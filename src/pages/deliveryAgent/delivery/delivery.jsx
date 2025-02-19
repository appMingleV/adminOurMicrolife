import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../mainHeader/MainHeader";

const Delivery = () => {
  const navigate = useNavigate();
  const deliveryAppData = [
    {
      id: 1,
      name: "Yogesh Rana",
      email: "yogesh@test.com",
      mobile: "7854963215",
      status: true,
    },
    {
      id: 2,
      name: "Aman Gupta",
      email: "aman@test.com",
      mobile: "9856321478",
      status: false,
    },
    {
      id: 3,
      name: "Riya Sharma",
      email: "riya@test.com",
      mobile: "7865214893",
      status: true,
    },
    // Add more dummy data as needed
  ];

  // Pagination state
  const [page, setPage] = useState(0); // Current page index
  const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page

  // Handlers for pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page
  };

  // Calculate rows to display based on pagination
  const paginatedData = deliveryAppData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="delivery-approval">
      {/* Header Section */}
      <MainHeader name={"Delivery"} />
      <div className="mx-6">
        <h2 className="font-semibold mb-4">
          <ArrowBackIcon
            className="cursor-pointer mb-1 mr-2"
            onClick={() => navigate(-1)}
          />
          Delivery Approval Request
        </h2>

        {/* Table Section */}
        <TableContainer className="shadow-md border rounded-md">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Agent Name</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.mobile}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.status ? "Approved" : "Pending"}</TableCell>
                  <TableCell>
                    <Button>View Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <div className="table-pagination">
          <TablePagination
            component="div"
            count={deliveryAppData.length} // Total number of rows
            page={page} // Current page
            onPageChange={handleChangePage} // Handler for page change
            rowsPerPage={rowsPerPage} // Rows per page
            onRowsPerPageChange={handleChangeRowsPerPage} // Handler for rows per page change
            rowsPerPageOptions={[5, 10, 25]} // Options for rows per page
          />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
