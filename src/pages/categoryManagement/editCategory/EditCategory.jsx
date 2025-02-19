import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DownloadIcon from "@mui/icons-material/Download";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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

const EditCategory = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Accessing the `id` parameter from the URL
  const token = localStorage.getItem("authToken");
  const [category, setCategory] = useState({
    name: "",
    image: null,
  });

  // Fetch category details on mount
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}admin/categories/get/cate_id_${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Map response data to the state
        const { categorie_name, image } = response.data.Category;
        setCategory({
          name: categorie_name,
          image, // Use the image URL for preview
        });
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, [id]);

  // Handle input change for category name
  const handleInputChange = (e) => {
    setCategory({ ...category, name: e.target.value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCategory({ ...category, image: file });
  };

  // Handle save/update category
  const handleSave = async () => {
    const formData = new FormData();
    formData.append("categorie_name", category.name);

    // Append the image file only if a new file is uploaded
    if (category.image instanceof File) {
      formData.append("image", category.image);
    }

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL_NODE}api/admin/category/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Category updated successfully:", response.data);
      alert("Category updated successfully");
      navigate("/admin/category");
    } catch (error) {
      console.error("Error updating category:", error.response?.data || error);
    }
  };

  return (
    <Box className="container" mx="auto" px={5} py={5}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Edit Category</Typography>
        <Button
          startIcon={<DownloadIcon />}
          variant="contained"
          color="primary"
        >
          Download
        </Button>
      </Box>
      <hr className="w-full mt-5" />

      {/* Edit category form */}
      <div className="mt-10">
        <div className="text-[25px]">
          <h2>Edit Category</h2>
        </div>
        <form className="mt-5 flex" encType="multipart/formdata">
          <Box
            sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Category Name"
              variant="outlined"
              value={category.name}
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
            {category.image instanceof File ? "Change File" : "Choose File"}
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

        {/* Display Uploaded File or Old Image */}
        {category.image ? (
          <Box mt={2}>
            <Typography>Uploaded File:</Typography>
            <img
              src={
                category.image instanceof File
                  ? URL.createObjectURL(category.image)
                  : `${import.meta.env.VITE_BASE_URL}${category.image}`
              }
              alt="Uploaded category"
              style={{ width: "150px", height: "100px" }}
            />
          </Box>
        ) : (
          <Typography mt={2}>No file available</Typography>
        )}
      </div>
    </Box>
  );
};

export default EditCategory;
