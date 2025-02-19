import DownloadIcon from "@mui/icons-material/Download";
import {
  Box,
  Button,
  Card,
  CardContent,
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

// Sample categories and subcategories, replace with actual API data.
const initialData = [
  {
    id: 1,
    name: "Chikwa Eligson",
    img: "https://images.pexels.com/photos/461415/pexels-photo-461415.jpeg?auto=compress&cs=tinysrgb&w=600",
    location: "Lagos",
    level: "stage-1",
    mood: "happy",
  },
  {
    id: 2,
    name: "Bamidele Johnson",
    img: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600",
    location: "Anambra",
    level: "stage-4",
    mood: "anxious",
  },
];

const SubCategoryManagement = () => {
  const [rows, setRows] = useState([]); // This will hold the subcategories for the selected category
  const [category, setCategory] = useState([]); // Categories to display in the select dropdown
  const [selectedCategory, setSelectedCategory] = useState(""); // Store selected category ID
  const [searchQuery, setSearchQuery] = useState(""); // Search query for the table
  const navigate = useNavigate();

  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/category`
      );
      setCategory(response.data.data); // Set categories from API response
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchSubCategories = async (categoryId) => {
    if (!categoryId) return;
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/subategory/category/${categoryId}`
      );
      setRows(response.data.data);
      console.log("subcategory by id", response.data.data); // Set subcategories for the selected category
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredRows = rows.filter(
      (row) =>
        row.name.toLowerCase().includes(query) ||
        row.location.toLowerCase().includes(query)
    );
    setRows(filteredRows);
  };

  const handleCategoryChange = (event) => {
    const selectedCategoryId = event.target.value;
    setSelectedCategory(selectedCategoryId);
    fetchSubCategories(selectedCategoryId); // Fetch subcategories when category is changed
  };

  const handleCreateSubCategory = () => {
    navigate("/admin/create-sub-category");
  };

  const handleDeleteCategory = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this subcategory?"
    );
    if (confirmDelete) {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL_NODE}admin/subategory/${id}`
      );
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      alert("Subcategory deleted successfully!");
    }
  };

  useEffect(() => {
    fetchCategory(); // Fetch categories when the component mounts
  }, []);

  return (
    <Box className="container" mx="auto" px={5} py={5}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Sub Category Management</Typography>
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
            {category.length}
          </Typography>
        </CardContent>
      </Card>

      {/* Categories Section */}
      <Box mt={5}>
        <Typography variant="h5">Sub Categories</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleCreateSubCategory}
        >
          Create New Sub Category
        </Button>
      </Box>

      {/* Search and Table */}
      <div className="border shadow-gray-400 mt-4 rounded-md">
        <Box mt={5}>
          {/* Search Box */}
          <Box
            display="flex justify-between"
            justifyContent="flex-start"
            mb={2}
          >
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              value={searchQuery}
              onChange={handleSearch}
              sx={{ width: 300, marginLeft: 2 }}
            />
            <div className="category m-2 mt-4">
              <label className="text-xl">Select Category: </label>
              <select
                className="border p-2 w-60"
                name="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Select Category</option>
                {category.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.categorie_name}
                  </option>
                ))}
              </select>
            </div>
          </Box>

          {/* Table */}
          <TableContainer>
            <Table border>
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell>Images</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.sub_category_name}</TableCell>
                    <TableCell>
                      <img
                        src={`${import.meta.env.VITE_BASE_URL_IMAGE_SUBCATEGORY}/${row.image}`}
                        alt={row.sub_category_name}
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
                        onClick={() =>
                          navigate(`../edit-subcategory/${row.id}`)
                        }
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
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
        </Box>
      </div>
    </Box>
  );
};

export default SubCategoryManagement;
