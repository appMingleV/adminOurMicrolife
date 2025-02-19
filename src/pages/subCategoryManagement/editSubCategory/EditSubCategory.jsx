import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DownloadIcon from "@mui/icons-material/Download";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";

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

const EditSubCategory = ({ subCategoryId }) => {
  // console.log(subCategoryId);

  const [subCategory, setSubCategory] = useState({
    name: "",
    file: null,
    oldImage: null, // For storing the old image URL
  });

  // Simulate fetching existing sub-category details
  useEffect(() => {
    // Replace this with an actual API call to fetch sub-category details
    const fetchSubCategory = async () => {
      const data = {
        name: "mobile", // Example pre-filled data
        oldImage: "https://via.placeholder.com/150", // Example image URL
      };
      setSubCategory(data);
    };

    fetchSubCategory();
  }, [subCategoryId]);

  const handleInputChange = (e) => {
    setSubCategory({ ...subCategory, name: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSubCategory({ ...subCategory, file });
  };

  const handleSave = () => {
    // Handle form submission logic
    console.log("Updated Sub Category:", subCategory);
  };

  return (
    <Box className="container" mx="auto" px={5} py={5}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Edit Sub Category</Typography>
        <Button
          startIcon={<DownloadIcon />}
          variant="contained"
          color="primary"
        >
          Download
        </Button>
      </Box>
      <hr className="w-full mt-5" />

      {/* Edit Sub Category Form */}
      <div className="mt-10">
        <div className="text-[25px]">
          <h2>Edit Sub Category</h2>
        </div>
        <div className="category m-2 mt-4">
          <label className="text-xl">Select Category : </label>
          <select className="border p-2 w-60">
            <option value="">Select Category</option>
            <option value="">Drinks</option>
          </select>
        </div>
        <form className="mt-5 flex" encType="multipart/formdata">
          <Box
            sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Sub Category Name"
              variant="outlined"
              value={subCategory.name}
              onChange={handleInputChange}
            />
          </Box>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            sx={{
              padding: "12px 24px",
              fontSize: "16px",
              width: "200px",
              height: "50px",
              marginTop: "10px",
            }}
          >
            {subCategory.file ? "Change File" : "Choose File"}
            <VisuallyHiddenInput type="file" onChange={handleFileChange} />
          </Button>
          <Button
            onClick={handleSave}
            variant="contained"
            sx={{
              padding: "12px 24px",
              fontSize: "16px",
              width: "200px",
              height: "50px",
              margin: "10px",
            }}
          >
            Save Changes
          </Button>
        </form>

        {/* Display Old Image */}
        {subCategory.oldImage && !subCategory.file && (
          <Box mt={3}>
            <Typography variant="subtitle1">Current Image:</Typography>
            <img
              src={subCategory.oldImage}
              alt="Old Sub Category"
              style={{
                maxWidth: "150px",
                maxHeight: "150px",
                marginTop: "10px",
              }}
            />
          </Box>
        )}

        {/* Display Uploaded File Preview */}
        {subCategory.file && (
          <Box mt={3}>
            <Typography variant="subtitle1">New Image Preview:</Typography>
            <img
              src={URL.createObjectURL(subCategory.file)}
              alt="New Sub Category"
              style={{
                maxWidth: "150px",
                maxHeight: "150px",
                marginTop: "10px",
              }}
            />
          </Box>
        )}
      </div>
    </Box>
  );
};

export default EditSubCategory;
