import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import { React, useState, useEffect } from "react";
import axios from "axios";

const ProductPageCampaign = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupEdit,setOpenPopupEdit]=useState(false);
  const [oldimage, setImage] = useState(null);
  const [first, setFirst] = useState([]);
  const [formData, setFormData] = useState({
    buttonName: "",
    link: "",
    image: null,
  });
  // <Modal open={openPopupEdit} onClose={handleCloseUpdatePopup}>
  const [imagePreview, setImagePreview] = useState("");
  const handleOpenPopup = () => setOpenPopup(true);
  const handleClosePopup = () => setOpenPopup(false);
const handleCloseUpdatePopup=()=>setOpenPopupEdit(false);
const handleOpenUpdatePopup=()=>setOpenPopupEdit(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };
  const handleEdit=async()=>{
    handleOpenUpdatePopup();
  }
  const fetchFirstCampaign = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/campaign/page/product/location/1`
      );
      const data = response.data.data;
      if (Array.isArray(data) && data.length > 0) {
        const lastElement = data[data.length - 1]; // Access the last element
        console.log("Last Element:", lastElement);
        setFormData({
          buttonName: lastElement.button_name||"",
    link:lastElement.link|| "",
    image:lastElement.image||null,
        })
        setImage(lastElement.image);
        setFirst(lastElement); 
        // Set the last element as state
      } else {
        console.log("Data is not an array or is empty");
      }
    } catch (error) {
      console.error("error in get first campaign", error);
    }
  };
  const handleAddCampaign = async () => {
    handleOpenPopup();
    console.log("hey");
    console.log(formData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/campaign/page/product/location/1`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("response campaign", response.data);
      handleClosePopup();
      fetchFirstCampaign();
    } catch (error) {
      console.error("error in adding top campaing in product", error);
    }
  };
  const handleUpdateCampaign = async (id) => {
   
    console.log("hey");
    console.log(formData);
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/campaign/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("response campaign", response.data);
      handleCloseUpdatePopup();
      fetchFirstCampaign();
    } catch (error) {
      console.error("error in adding top campaing in product", error);
    }
  };
  const handleDeleteCampaign = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/campaign/${id}`
      );
      alert("Delete successfully");
      setFirst([]);
      console.log("delete one", response.data);
    } catch (error) {
      console.log("error in delete one", error);
    }
  };
  useEffect(() => {
    fetchFirstCampaign();
  }, []);
  return (
    <>
      <div className="border rounded-xl max-w-[1280px] m-auto p-4">
        <div className="mb-4">
          <Typography variant="h4" className="font-semibold">
            Product Campaigns
          </Typography>
        </div>

        {/* Product Skeleton  */}

        <div className="flex gap-10 px-4">
          <div className="flex flex-col gap-6 w-1/3 ml-4">
            <div className="bg-gray-200 w-[300px] h-[300px] rounded-lg"></div>
            <div className="flex flex-col justify-start">
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
                <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
                <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
                <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-2/3 gap-4 my-4">
            <h2 className="w-52 h-4 bg-gray-200 rounded-md"></h2>
            <p className="w-40 h-4 bg-gray-200 rounded-md"></p>
            <p className="w-40 h-4 bg-gray-200 rounded-md"></p>
            <p className="w-full h-4 bg-gray-200 rounded-md"></p>
            <p className="w-full h-4 bg-gray-200 rounded-md"></p>
            <p className="w-full h-4 bg-gray-200 rounded-md"></p>
            <p className="w-40 h-4 bg-gray-200 rounded-md"></p>
            <p className="w-32 h-4 bg-gray-200 rounded-md"></p>
            <p className="w-full h-1 bg-gray-200 rounded-sm"></p>
            <div className="flex gap-8">
              <button className="w-32 h-10 bg-gray-200 rounded-lg"></button>
              <button className="w-32 h-10 bg-gray-200 rounded-lg"></button>
            </div>
          </div>
        </div>

        {/* Second Image Section */}
        <div className="mt-5">
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleAddCampaign}
          >
            Add
          </Button>
        </div>

        <div className="py-4">
          <div className="relative border w-[100%] h-64">
            <img
              src={`${import.meta.env.VITE_BASE_URL_IMAGE}uploads/campaign/${first.image}`}
              alt="https://images.pexels.com/photos/29684685/pexels-photo-29684685/free-photo-of-stylish-black-earbuds-on-wooden-surface.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="w-full h-full object-cover rounded-xl border"
            />
            <Box className="absolute top-2 right-2 flex space-x-2">
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={handleEdit}
              >
                Edit
              </Button>
              <Modal open={openPopupEdit} onClose={handleCloseUpdatePopup}>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 4,
      borderRadius: 2,
    }}
  >
    <Typography variant="h6" component="h2" mb={2}>
    Edit Campaign {/* Change the heading dynamically */}
    </Typography>
    <TextField
      fullWidth
      label="Button Name"
      name="buttonName"
      value={formData.buttonName}
      onChange={handleInputChange}
      margin="normal"
    />
    <TextField
      fullWidth
      label="Link"
      name="link"
      value={formData.link}
      onChange={handleInputChange}
      margin="normal"
    />
    <Button
      variant="contained"
      component="label"
      sx={{ mt: 2, mb: 2 }}
      fullWidth
    >
      Upload Image
      <input
        type="file"
        hidden
        accept="image/*"
        onChange={handleImageChange}
      />
    </Button>
    {imagePreview && (
      <Box
        sx={{
          width: "100%",
          height: 150,
          overflow: "hidden",
          borderRadius: 1,
          mb: 2,
          border: "1px solid #ccc",
        }}
      >
        <img
          src={imagePreview}
          alt="Preview"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
    )}
    <Button
      variant="contained"
      color="primary"
      fullWidth
      onClick={()=>handleUpdateCampaign(first.id)}  // This function will handle both adding and updating
    >
     Update {/* Change the button text based on the context */}
    </Button>
  </Box>
</Modal>

              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={() => handleDeleteCampaign(first.id)}
              >
                Delete
              </Button>
            </Box>
          </div>
        </div>
        {/* Popup Form */}
        <Modal open={openPopup} onClose={handleClosePopup}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" component="h2" mb={2}>
              Add Campaign 1
            </Typography>
            <TextField
              fullWidth
              label="Button Name"
              name="buttonName"
              value={formData.buttonName}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Link"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              margin="normal"
            />
            <Button
              variant="contained"
              component="label"
              sx={{ mt: 2, mb: 2 }}
              fullWidth
            >
              Upload Image
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
            </Button>
            {imagePreview && (
              <Box
                sx={{
                  width: "100%",
                  height: 150,
                  overflow: "hidden",
                  borderRadius: 1,
                  mb: 2,
                  border: "1px solid #ccc",
                }}
              >
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            )}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleAddCampaign}
            >
              Submit
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ProductPageCampaign;
