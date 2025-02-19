import React, { useState } from "react";
import axios from "axios";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DownloadIcon from "@mui/icons-material/Download";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CreateCategory = () => {
  const navigate=useNavigate();
  const [categoryName, setCategoryName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const token = "your-auth-token"; // Replace with actual token

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    console.log("Selected File:", file);
  };

  const addCategory = async () => {
    if (!categoryName || !selectedImage) {
      alert("Please provide a category name and image.");
      return;
    }

    const formData = new FormData();
    formData.append("categorie_name", categoryName);
    formData.append("image", selectedImage);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/category`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Category added successfully:", response.data);
      alert("Category added successfully!");
      navigate(-1)
    } catch (error) {
      console.error("Error in adding category:", error);
      alert(
        "Failed to add category. Please check the inputs and try again."
      );
    }
  };

  return (
    <Box className="container" mx="auto" px={5} py={5}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Create New Category</Typography>
        <Button
          startIcon={<DownloadIcon />}
          variant="contained"
          color="primary"
        >
          Download
        </Button>
      </Box>
      <hr className="w-full mt-5" />

      {/* Create category form */}
      <div className="mt-10">
        <div className="text-[25px]">
          <h2>Create Category</h2>
        </div>
        <form className="mt-5 flex" encType="multipart/form-data">
          {/* Category Name Input */}
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Category Name"
              variant="outlined"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </Box>

          {/* File Upload Button */}
          <Button
            component="label"
            role={undefined}
            variant="contained"
            startIcon={<CloudUploadIcon />}
            sx={{
              padding: "12px 24px", // Adjust padding for size
              fontSize: "16px", // Adjust text size
              width: "200px", // Optional: Adjust width
              height: "50px", // Optional: Adjust height
              marginTop: "10px",
            }}
          >
            Choose file
            <VisuallyHiddenInput
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </Button>

          {/* Save Button */}
          <Button
            onClick={addCategory}
            variant="contained"
            sx={{
              padding: "12px 24px",
              fontSize: "16px",
              width: "200px",
              height: "50px",
              margin: "10px",
            }}
          >
            Save
          </Button>
        </form>
      </div>
    </Box>
  );
};

export default CreateCategory;
