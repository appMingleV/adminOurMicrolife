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

const PaymentManagement = () => {
  const navigate = useNavigate();

  // State for selected category and table data
  const [selectedCategory, setSelectedCategory] = useState("All Order");
  const [filteredData, setFilteredData] = useState([]);

  // Original data (mock data for demonstration)
  const allData = [
    {
      date: "10/12/2024",
      transactionId: "123456789",
      status: false,
      totalItem: 5,
      totalOrderAmt: 15500,
      totalPayout: 14000,
    },
    {
      date: "11/12/2024",
      transactionId: "987654321",
      status: true,
      totalItem: 3,
      totalOrderAmt: 8500,
      totalPayout: 8000,
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
  // Function to handle card click
  const handleCardClick = (category) => {
    setSelectedCategory(category);

    if (category === "All Order") {
      // Reset filteredData to include all items
      setFilteredData(allData);
    } else if (category === "Completed payout") {
      // Filter data for completed payouts
      setFilteredData(allData.filter((item) => item.status === true));
    } else if (category === "Undelivered Order") {
      // Filter data for undelivered orders
      setFilteredData(allData.filter((item) => item.status === false));
    }
  };

  return (
    <>
      <div className="mx-8">
        {/* Header Section */}
        <MainHeader name={"Payment Management"} />

        {/* Actions and Summary */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card
            className="col-span-1 p-4 shadow-md cursor-pointer"
            onClick={() => handleCardClick("All Order")}
          >
            <div className="text-gray-500">All Order</div>
            <div className="text-lg font-bold">
              {
                allData.filter(
                  (item) => item.status === true || item.status === false
                ).length
              }
            </div>
          </Card>
          <Card
            className="col-span-1 p-4 shadow-md cursor-pointer"
            onClick={() => handleCardClick("Undelivered Order")}
          >
            <div className="text-gray-500">Undelivered Order</div>
            <div className="text-lg font-bold">
              {allData.filter((item) => item.status === false).length}
            </div>
          </Card>
          <Card
            className="col-span-1 p-4 shadow-md cursor-pointer"
            onClick={() => handleCardClick("Completed payout")}
          >
            <div className="text-gray-500">Completed payout</div>
            <div className="text-lg font-bold">
              {allData.filter((item) => item.status === true).length}
            </div>
          </Card>
        </div>

        {/* Selected Category Display */}
        <h3 className="text-xl font-semibold mb-4">{selectedCategory}</h3>

        {/* Table Section */}
        <TableContainer className="shadow-md border rounded-md">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Transaction Id</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Total Items</TableCell>
                <TableCell>Total Order Amt.</TableCell>
                <TableCell>Total Payout</TableCell>
                <TableCell>View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(filteredData.length > 0 ? filteredData : allData)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.transactionId}</TableCell>
                    <TableCell>
                      {row.status ? (
                        <span className="bg-green-500 py-2 px-4 rounded-md border-gray-200 border-2">
                          Paid
                        </span>
                      ) : (
                        <span className="bg-yellow-500 py-2 px-4 rounded-md border-gray-300 border-2">
                          Pending
                        </span>
                      )}
                    </TableCell>
                    <TableCell>{row.totalItem}</TableCell>
                    <TableCell>₹{row.totalOrderAmt}</TableCell>
                    <TableCell>₹{row.totalPayout}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        onClick={() => navigate("./payment-details")}
                      >
                        Payemnt Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
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

export default PaymentManagement;
