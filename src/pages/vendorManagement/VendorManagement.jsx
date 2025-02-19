import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  Box,
  Button,
  Card,
  CardContent,
  MenuItem,
  Pagination,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";

import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../mainHeader/MainHeader";

const VendorManagement = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const [activeCard, setActiveCard] = useState("Total Vendor");

  const [vendors, setVendors] = useState([]);

  // admin/vendor/accept
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const filteredVendors = () => {
    if (activeCard === "Approved Vendor") {
      return vendors.filter((v) => v.status === "Accept");
    } else if (activeCard === "Pending Vendor") {
      return vendors.filter((v) => v.status === "Pending");
    }
    return vendors;
  };
 

  const paginatedVendors = filteredVendors().slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const fetchVendor = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/vendor/all`
      );
      console.log("Response:", response.data.data);
      setVendors(response.data.data);
    } catch (error) {
      console.error(
        "Error in fetching vendor list:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    fetchVendor();
  }, []);
  return (
    <Box>
      {/* Header Section */}
      <MainHeader name={"Vendor Management"}></MainHeader>
      <Box className="container mx-auto px-10 mb-10">
        {/* Buttons Section */}
        <Box display="flex" gap={2} mt={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("./vendor-details")}
          >
            Approve Request
          </Button>
        </Box>

        {/* Stats Section */}
        <Box display="grid" gridTemplateColumns="repeat(5, 1fr)" gap={2} mt={3}>
          {[
            { label: "Total Vendor", value: vendors.length },
            {
              label: "Approved Vendor",
              value: vendors.filter((v) => v.status === "Approved").length,
            },
            {
              label: "Pending Vendor",
              value: vendors.filter((v) => v.status === "Pending").length,
            },
          ].map((stat, index) => (
            <Card
              key={index}
              variant="outlined"
              className="p-4"
              sx={{
                borderColor: activeCard === stat.label ? "blue" : "grey",
                cursor: "pointer",
              }}
              onClick={() => {
                setActiveCard(stat.label);
                setPage(1); // Reset to the first page on card click
              }}
            >
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {stat.label}
                </Typography>
                <Typography variant="h5">{stat.value}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Table Section */}
        <Box mt={4}>
          {/* Table Actions */}
          <Box display="flex" alignItems="center" mt={3} mb={2}>
            <FilterAltIcon
              sx={{ fontSize: 40, marginRight: "15px" }}
              className="bg-white rounded-md px-2 drop-shadow-md hover:bg-pink-100 cursor-pointer border"
              onClick={() => setFilterToggle(!filterToggle)}
            />
            {filterToggle ? (
              <>
                <div className="flex justify-between gap-4 border">
                  <button className=" flex items-center justify-between border border-gray-500 text-xs rounded-md p-1">
                    <span className="text-gray-500 mx-2">Today</span>
                    <span className="text-white bg-[#6688DC] py-1 px-2 rounded-md">
                      215
                    </span>
                  </button>
                  <button className=" flex items-center justify-between border border-gray-500 text-xs rounded-md p-1">
                    <span className="text-gray-500 mx-2">Yesterday</span>
                    <span className="text-white bg-[#6688DC] py-1 px-2 rounded-md">
                      215
                    </span>
                  </button>
                  <button className=" flex items-center justify-between border border-gray-500 text-xs rounded-md p-1">
                    <span className="text-gray-500 mx-2">Vendor</span>
                    <span className="text-white bg-[#6688DC] py-1 px-2 rounded-md">
                      215
                    </span>
                  </button>
                  <button className=" flex items-center justify-between border border-gray-500 text-xs rounded-md p-1">
                    <span className="text-gray-500 mx-2">Email</span>
                    <span className="text-white bg-[#6688DC] py-1 px-2 rounded-md">
                      215
                    </span>
                  </button>
                  <button className=" flex items-center justify-between border border-gray-500 text-xs rounded-md p-1">
                    <span className="text-gray-500 mx-2">Number</span>
                    <span className="text-white bg-[#6688DC] py-1 px-2 rounded-md">
                      215
                    </span>
                  </button>
                </div>
              </>
            ) : null}
          </Box>
          <div className="flex justify-between">
            <TextField label="Search" variant="outlined" size="small" />
            <Box display="flex" alignItems="center" gap={2}>
              <Typography>Entries Per Page:</Typography>
              <Select size="small" value={rowsPerPage}>
                {[5, 10, 15].map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </div>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Owner Name</TableCell>
                  <TableCell>DOB</TableCell>
                  <TableCell>Mobile Number</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedVendors.map((vendor, index) => (
                  <TableRow key={vendor.id}>
                    <TableCell>
                      {index + 1 + (page - 1) * rowsPerPage}
                    </TableCell>
                    <TableCell>{vendor.ownerName}</TableCell>
                    <TableCell>{vendor.dob}</TableCell>
                    <TableCell>{vendor.mobile}</TableCell>
                    <TableCell>{vendor.email}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color={
                          vendor.status === "Approved" ? "success" : "warning"
                        }
                      >
                        {vendor.status}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate(`./vendor-approval/${vendor.id}`)}
                      >
                        View Details
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
              count={Math.ceil(filteredVendors().length / rowsPerPage)}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VendorManagement;
