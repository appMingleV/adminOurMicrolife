import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DownloadIcon from "@mui/icons-material/Download";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import axios from "axios";
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

const CreateSubCategory = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [formData, setFormData] = useState({
    category: "",
    subCategoryName: "",
    file: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (
      formData.category == "" ||
      formData.subCategoryName == "" ||
      formData.file == null
    ) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true); // Set loading state to true before API call

    const data = new FormData();
    data.append("category_id", formData.category);
    data.append("sub_category_name", formData.subCategoryName);
    if (formData.file) {
      data.append("image", formData.file);
    }
    console.log("form subcategory", formData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/subcategory`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure the request is sent as form data
          },
        }
      );
      console.log("Subcategory added successfully", response.data);
      alert("Subcategory created successfully!");
      navigate(-1);
      setLoading(false); // Set loading state to false after the API call
    } catch (error) {
      console.error("Error adding subcategory", error);
      alert("Failed to create subcategory");
      setLoading(false); // Set loading state to false in case of error
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/category`
      );
      setCategory(response.data.data); // Assuming your response is in `data.data`
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <Box className="container" mx="auto" px={5} py={5}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Create New Sub Category</Typography>
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
          <h2>Create Sub Category</h2>
        </div>
        <div className="category m-2 mt-4">
          <label className="text-xl">Select Category : </label>
          <select
            className="border p-2 w-60"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            {category.map((category) => (
              <option key={category.id} value={category.id}>
                {category.categorie_name}
              </option>
            ))}
          </select>
        </div>

        {/* Form for sub-category creation */}
        <form
          className="mt-5 flex"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <Box
            component="div"
            sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Sub Category Name"
              variant="outlined"
              name="subCategoryName"
              value={formData.subCategoryName}
              onChange={handleChange}
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
            Choose file
            <VisuallyHiddenInput type="file" onChange={handleFileChange} />
          </Button>

          <Button
            variant="contained"
            sx={{
              padding: "12px 24px",
              fontSize: "16px",
              width: "200px",
              height: "50px",
              margin: "10px",
            }}
            type="submit"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Saving..." : "Save"}
          </Button>
        </form>
      </div>
    </Box>
  );
};

export default CreateSubCategory;
