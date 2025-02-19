import DownloadIcon from "@mui/icons-material/Download";
import {
  Box,
  Button,
  Card,
  CardContent,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialData = [
  {
    id: 1,
    name: "Bamidele Johnson",
    img: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Chikwa Eligson",
    img: "https://images.pexels.com/photos/461415/pexels-photo-461415.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  // Add more rows as needed
];

const rowsPerPage = 5; // Number of rows per page

const CategoryManagement = () => {
  const [rows, setRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1); // Current page
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  const handleCreateCategory = () => {
    navigate("/admin/create-category");
  };
  const handleDeleteCategory = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete ?");
    if (confirm) {
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_BASE_URL_NODE}api/admin/category/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
            },
          }
        );
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
        console.log("category deleted", response.data);
        alert("category deleted", response?.data?.message);
      } catch (error) {
        console.log("error in delete Category", error);
        alert("Error while deleting category.");
      }
    }
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const filteredRows = initialData.filter((row) =>
        row.name.toLowerCase().includes(query)
      );
      setRows(filteredRows);
    } else {
      setRows(initialData);
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value); // Update current page
  };

  const fetchCategory = async () => {
    try {
      console.log("hey");
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/category`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        }
      );
      console.log(response.data.data);
      setRows(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  // Calculate sliced rows for current page
  const paginatedRows = rows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <Box className="container" mx="auto" px={5} py={5}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Category Management</Typography>
        <Button
          startIcon={<DownloadIcon />}
          variant="contained"
          color="primary"
        >
          Download
        </Button>
      </Box>
      <hr className="w-full mt-5" />

      {/* Total Categories */}
      <Card sx={{ maxWidth: 300, mt: 3 }}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Total Categories
          </Typography>
          <Typography variant="h5" component="div">
            {rows.length}
          </Typography>
        </CardContent>
      </Card>

      {/* Categories Section */}
      <Box mt={5}>
        <Typography variant="h5">Categories</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleCreateCategory}
        >
          Create New Category
        </Button>
      </Box>

      {/* Search and Table */}
      <div className="border shadow-gray-400 mt-4 rounded-md">
        <Box mt={5}>
          {/* Search Box */}
          <Box display="flex" justifyContent="flex-start" mb={2}>
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              value={searchQuery}
              onChange={handleSearch}
              sx={{ width: 300, marginLeft: 2 }}
            />
          </Box>

          {/* Table */}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Categories</TableCell>
                  <TableCell>Images</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedRows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.categorie_name}</TableCell>
                    <TableCell>
                      <img
                        src={`${import.meta.env.VITE_BASE_URL_IMAGE}/${row.image}`}
                        alt={row.categorie_name}
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "5%",
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ marginRight: "10px" }}
                        onClick={() => navigate(`../edit-category/${row.id}`)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="danger"
                        onClick={() => handleDeleteCategory(row.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <Box display="flex" justifyContent="center" mt={2}>
            <Pagination
              count={Math.ceil(rows.length / rowsPerPage)}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
            />
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default CategoryManagement;
