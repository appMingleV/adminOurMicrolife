import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  Box,
  Button,
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../mainHeader/MainHeader";

const VendorDetail = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const [vendors, setVendors] = useState([
    {
      id: 1,
      firstName: "Pawan",
      lastName: "Kumar",
      phone: "9149060662",
      email: "pawan12233@gmail.com",
      status: "Pending",
    },
    {
      id: 2,
      firstName: "Pawan",
      lastName: "Kumar",
      phone: "9149060663",
      email: "pawan122323@gmail.com",
      status: "Pending",
    },
    {
      id: 3,
      firstName: "Ankit",
      lastName: "Ankit",
      phone: "8506844055",
      email: "ankit1234512@gmail.com",
      status: "Pending",
    },
    {
      id: 4,
      firstName: "Alishba",
      lastName: "Ansari",
      phone: "7645873487",
      email: "alishbaan123@gmail.com",
      status: "Pending",
    },
    {
      id: 5,
      firstName: "Deep",
      lastName: "Deep",
      phone: "9145687894",
      email: "depmaurya1234123@gmail.com",
      status: "Pending",
    },
    {
      id: 6,
      firstName: "Deep",
      lastName: "Anshu",
      phone: "9146789787",
      email: "deepmaurya088@gmail.com",
      status: "Pending",
    },
    {
      id: 7,
      firstName: "Ankit",
      lastName: "Shakyaa",
      phone: "8630352371",
      email: "ankitemail012@gmail.com",
      status: "Pending",
    },
    {
      id: 8,
      firstName: "Ankit",
      lastName: "Shakya",
      phone: "8630352372",
      email: "ankitemail012@gmail.com",
      status: "Pending",
    },
    {
      id: 9,
      firstName: "Vamsyjf",
      lastName: "Deqwfwfw",
      phone: "2736564514",
      email: "gfg@gmail.com",
      status: "Pending",
    },
    {
      id: 10,
      firstName: "Gaurav",
      lastName: "Singhal",
      phone: "8882639449",
      email: "gauravsinghal311@gmail.com",
      status: "Pending",
    },
  ]);

  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const paginatedVendors = vendors.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box className="pb-10">
      {/* Header Section */}
      <MainHeader name={"Vendor Detail"}></MainHeader>
      <Box className="container mx-auto px-10">
        {/* Subtitle */}
        <div className="flex items-center justify-start">
          <ArrowBackIcon
            onClick={() => navigate(-1)}
            className="mt-4 mr-2 cursor-pointer"
          />
          <Typography variant="h6" mt={2}>
            Vendor Approval Requests
          </Typography>
        </div>
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
        {/* Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Mobile Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedVendors.map((vendor, index) => (
                <TableRow key={vendor.id}>
                  <TableCell>{index + 1 + (page - 1) * rowsPerPage}</TableCell>
                  <TableCell>{vendor.firstName}</TableCell>
                  <TableCell>{vendor.lastName}</TableCell>
                  <TableCell>{vendor.phone}</TableCell>
                  <TableCell>{vendor.email}</TableCell>
                  <TableCell>
                    <Button variant="outlined" color="warning">
                      {vendor.status}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => navigate("../vendors/vendor-approval")}
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
        <Box display="flex" justifyContent="center" mt={3}>
          <Pagination
            count={Math.ceil(vendors.length / rowsPerPage)}
            page={page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default VendorDetail;
