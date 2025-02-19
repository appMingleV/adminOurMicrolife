import {
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../mainHeader/MainHeader";

const DeliveryAgent = () => {
  const navigate = useNavigate();

  // State for selected category and table data
  const [selectedCategory, setSelectedCategory] = useState("Total Agent");
  const [filteredData, setFilteredData] = useState([]);

  // Original data (mock data for demonstration)
  const allData = [
    {
      agent: "ggg",
      mobile: "6543",
      email: "ff2@gmail.com",
      location: "Location 1",
      status: "Basic",
      pickupOrder: 1,
      totalSales: 0,
      cashCollection: 0,
      category: "Total Agent",
    },
    {
      agent: "aaa",
      mobile: "1234",
      email: "aa1@gmail.com",
      location: "Location 2",
      status: "Premium",
      pickupOrder: 2,
      totalSales: 500,
      cashCollection: 200,
      category: "Online Agent",
    },
    {
      agent: "bbb",
      mobile: "7890",
      email: "bb1@gmail.com",
      location: "Location 3",
      status: "Basic",
      pickupOrder: 0,
      totalSales: 100,
      cashCollection: 50,
      category: "Offline Agent",
    },
  ];
  // State for pagination
  const [page, setPage] = useState(0); // Current page
  const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page

  // Handler for page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handler for rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when rows per page changes
  };

  // Function to handle card click
  const handleCardClick = (category) => {
    setSelectedCategory(category);
    const filtered = allData.filter((item) => item.category === category);
    setFilteredData(filtered);
  };

  return (
    <>
      <div className="mx-8">
        {/* Header Section */}
        <MainHeader name={"Delivery Agent"} />

        <div className="mb-4">
          <Button
            variant="contained"
            className="col-span-1 bg-blue-500"
            onClick={() => navigate("./delivery-approval")}
          >
            Approve Delivery Request
          </Button>
        </div>

        {/* Actions and Summary */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card
            className="col-span-1 p-4 shadow-md cursor-pointer"
            onClick={() => handleCardClick("Total Agent")}
          >
            <div className="text-gray-500">Total Agent</div>
            <div className="text-lg font-bold">2</div>
          </Card>
          <Card
            className="col-span-1 p-4 shadow-md cursor-pointer"
            onClick={() => handleCardClick("Online Agent")}
          >
            <div className="text-gray-500">Online Agent</div>
            <div className="text-lg font-bold">124</div>
          </Card>
          <Card
            className="col-span-1 p-4 shadow-md cursor-pointer"
            onClick={() => handleCardClick("Offline Agent")}
          >
            <div className="text-gray-500">Offline Agent</div>
            <div className="text-lg font-bold">504</div>
          </Card>
          <Card
            className="col-span-1 p-4 shadow-md cursor-pointer"
            onClick={() => handleCardClick("Cash Collection")}
          >
            <div className="text-gray-500">Cash Collection</div>
            <div className="text-lg font-bold">₹12400</div>
          </Card>
        </div>

        {/* Selected Category Display */}
        <h3 className="text-lg font-semibold mb-4">
          Showing data for: {selectedCategory}
        </h3>

        {/* Table Section */}
        <TableContainer className="shadow-md border rounded-md">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Agent</TableCell>
                <TableCell>Mobile Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Pickup Order</TableCell>
                <TableCell>Total Sales</TableCell>
                <TableCell>Cash Collection</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(filteredData.length > 0 ? filteredData : allData).map(
                (row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.agent}</TableCell>
                    <TableCell>{row.mobile}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.location}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.pickupOrder}</TableCell>
                    <TableCell>{row.totalSales}</TableCell>
                    <TableCell>{row.cashCollection}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          count={(filteredData.length > 0 ? filteredData : allData).length} // Total number of rows
          page={page} // Current page
          onPageChange={handleChangePage} // Handler for page change
          rowsPerPage={rowsPerPage} // Rows per page
          onRowsPerPageChange={handleChangeRowsPerPage} // Handler for rows per page change
          rowsPerPageOptions={[5, 10, 25]} // Options for rows per page
        />
      </div>
    </>
  );
};

export default DeliveryAgent;
