import {
  Button,
  Card,
  CardContent,
  Paper,
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
import MainHeader from "../mainHeader/MainHeader";

const OrderManagement = () => {
  const [activeTable, setActiveTable] = useState("Total Order");
  const navigate = useNavigate();

  // Data for cards
  const cards = [
    { label: "Total Order", count: 3298, trend: "up" },
    { label: "Pending Order", count: 2980, trend: "down" },
    { label: "Accepted Order", count: 5026, trend: "up" },
    { label: "Shipping Order", count: 2700, trend: "down" },
    { label: "Delivered Orders", count: 4000, trend: "up" },
    { label: "Others Order", count: 200, trend: "down" },
  ];

  // Example table data
  const tableData = {
    "Total Order": [
      {
        id: "#256349",
        user: "Username",
        mobile: "+91 1234567890",
        location: "Clock Tower, Dehradun",
        payment: "Debit Card",
        status: "Pending",
        totalOrder: 13,
        totalSales: 8000,
        date: "-",
      },
    ],
    "Pending Order": [
      {
        id: "#256350",
        user: "Pending User",
        mobile: "+91 1234567891",
        location: "Location 1",
        payment: "Credit Card",
        status: "Pending",
        totalOrder: 5,
        totalSales: 5000,
        date: "-",
      },
    ],
    // Add more data for other cards...
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <MainHeader name={"Order Management"} />

      {/* Cards Section */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        {cards.map((card) => (
          <Card
            key={card.label}
            className={`cursor-pointer border ${
              activeTable === card.label ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setActiveTable(card.label)}
          >
            <CardContent>
              <Typography variant="p" className="flex">
                {card.label}
              </Typography>
              <Typography variant="p" className="text-2xl font-bold">
                {card.count}
                <span
                  className={`ml-2 text-sm ${
                    card.trend === "up" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {card.trend === "up" ? "▲" : "▼"}
                </span>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* shipping order  */}
      <CardContent>
        <Typography variant="p" className="flex">
          Shipping Order
        </Typography>
        <Typography variant="p" className="text-2xl font-bold">
          2800
          <span className="ml-2 text-sm">▼</span>
        </Typography>
      </CardContent>
      {/* Table Section */}
      <div className="border rounded-lg p-4">
        <Typography variant="h6" className="font-bold mb-4">
          {activeTable}
        </Typography>
        <div className="search m-4">
          <TextField label="Search" variant="outlined" size="small" />
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Payment</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Total Order</TableCell>
                <TableCell>Total Sales</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData[activeTable]?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.user}</TableCell>
                  <TableCell>{row.mobile}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>{row.payment}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.totalOrder}</TableCell>
                  <TableCell>{row.totalSales}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <Button
                      variant={"contained"}
                      onClick={() => navigate("./order-detail")}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default OrderManagement;
