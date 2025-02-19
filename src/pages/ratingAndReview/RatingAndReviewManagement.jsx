import {
  Card,
  Rating,
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
import MainHeader from "../mainHeader/MainHeader";

const RatingAndReviewManagement = () => {
  const [selectedSection, setSelectedSection] = useState("Vendor Reviews");
  const [searchTerm, setSearchTerm] = useState("");

  const vendorReviews = [
    {
      vendorName: "Vendor A",
      reviewDate: "10/12/2024",
      rating: 4.5,
      feedback: "Great service and quality products.",
    },
    {
      vendorName: "Vendor B",
      reviewDate: "11/12/2024",
      rating: 3.8,
      feedback: "Decent service, but delivery was delayed.",
    },
  ];

  const deliveryAgentReviews = [
    {
      agentName: "Agent X",
      reviewDate: "09/12/2024",
      rating: 4.9,
      feedback: "Prompt and polite delivery.",
    },
    {
      agentName: "Agent Y",
      reviewDate: "08/12/2024",
      rating: 3.0,
      feedback: "Package was damaged on arrival.",
    },
  ];

  const handleSectionChange = (section) => {
    setSelectedSection(section);
    setSearchTerm("");
  };

  const filteredReviews =
    selectedSection === "Vendor Reviews"
      ? vendorReviews.filter((review) =>
          review.vendorName.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : deliveryAgentReviews.filter((review) =>
          review.agentName.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <div className="px-6">
      {/* Page Header */}
      <MainHeader name={"Ratings and Review"} />

      {/* Section Selector */}
      <div className="flex space-x-4 mb-6">
        <Card
          className={`cursor-pointer p-4 shadow-md ${
            selectedSection === "Vendor Reviews" && "border-blue-500 border-2"
          }`}
          onClick={() => handleSectionChange("Vendor Reviews")}
        >
          <Typography
            variant="h6"
            sx={{ padding: "0" }}
            className="font-semibold text-center"
          >
            Vendor Reviews
          </Typography>
        </Card>
        <Card
          className={`cursor-pointer p-4 shadow-md ${
            selectedSection === "Delivery Agent Reviews" &&
            "border-blue-500 border-2"
          }`}
          onClick={() => handleSectionChange("Delivery Agent Reviews")}
        >
          <Typography variant="h6" className="font-semibold text-center">
            Delivery Agent Reviews
          </Typography>
        </Card>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <TextField
          label="Search by Name"
          variant="outlined"
          className=""
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Reviews Table */}
      <TableContainer className="shadow-md border rounded-md">
        <Table>
          <TableHead className="bg-gray-100">
            <TableRow>
              <TableCell>
                {selectedSection === "Vendor Reviews"
                  ? "Vendor Name"
                  : "Agent Name"}
              </TableCell>
              <TableCell>Review Date</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Feedback</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredReviews.map((review, index) => (
              <TableRow key={index}>
                <TableCell>
                  {selectedSection === "Vendor Reviews"
                    ? review.vendorName
                    : review.agentName}
                </TableCell>
                <TableCell>{review.reviewDate}</TableCell>
                <TableCell>
                  <Rating value={review.rating} readOnly precision={0.1} />
                </TableCell>
                <TableCell>{review.feedback}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* No Reviews Message */}
      {filteredReviews.length === 0 && (
        <Typography
          variant="subtitle1"
          className="text-center mt-4 text-gray-500"
        >
          No reviews found.
        </Typography>
      )}
    </div>
  );
};

export default RatingAndReviewManagement;
