import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import { React, useState, useEffect } from "react";
import axios from "axios";
// http://127.0.0.1:8000/api/admin/campaign/page/home/location/1
const CartPageCampaign = () => {
  const [editing, setEditing] = useState(false);

  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupSecond, setOpenPopupSecond] = useState(false);
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [formData, setFormData] = useState({
    buttonName: "",
    link: "",
    image: null,
  });

  const [formDataSecond, setFormDataSecond] = useState({
    buttonName: "",
    link: "",
    image: null,
  }); // State for second campaign
  const [imagePreview, setImagePreview] = useState("");
  const [imagePreviewSecond, setImagePreviewSecond] = useState(""); // Image preview for second campaign

  const handleOpenPopup = () => setOpenPopup(true);
  const handleClosePopup = () => setOpenPopup(false);
  const handleOpenPopupSecond = () => setOpenPopupSecond(true);
  const handleClosePopupSecond = () => setOpenPopupSecond(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleInputChangeSecond = (e) => {
    const { name, value } = e.target;
    setFormDataSecond((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };
  const handleImageChangeSecond = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormDataSecond((prev) => ({ ...prev, image: file }));
      setImagePreviewSecond(URL.createObjectURL(file));
    }
  };
  const fetchFirstCampaign = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/campaign/page/cart/location/1`
      );
      const data = response.data.data;

      if (Array.isArray(data) && data.length > 0) {
        const lastElement = data[data.length - 1]; // Access the last element
        console.log("Last Element:", lastElement);
        setFirst(lastElement); // Set the last element as state
        setFormData({
          buttonName: lastElement.button_name || "",
          link: lastElement.link || "",
          image: lastElement.image || null,
        });
      } else {
        console.log("Data is not an array or is empty");
      }
      console.log("response 1", response.data.data);
    } catch (error) {
      console.error("error in get first campaign", error);
    }
  };
  const fetchSecondCampaign = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/campaign/page/cart/location/2`
      );
      const data = response.data.data;

      if (Array.isArray(data) && data.length > 0) {
        const lastElement = data[data.length - 1]; // Access the last element
        console.log("Last Element:", lastElement);
        setSecond(lastElement); // Set the last element as state
        setFormDataSecond({
          buttonName: lastElement.button_name || "",
          link: lastElement.link || "",
          image: lastElement.image || null,
        });
      } else {
        console.log("Data is not an array or is empty");
      }
      console.log("response 2", response.data.data);
    } catch (error) {
      console.error("error in get first campaign", error);
    }
  };
  const handleDeleteCampaign = async (id, type) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/campaign/${id}`
      );
      console.log("Campaign deleted:", response.data);

      // Update the state based on type

      alert("Campaign deleted successfully.");
      if (type === "first") {
        setFirst([]); // Reset the first campaign state to empty
      } else if (type === "second") {
        setSecond([]); // Reset the second campaign state to empty
      }
    } catch (error) {
      console.log("error in delete one", error);
    }
  };
  const handleAddCampaignTop = async () => {
    // handleClosePopup();
    console.log("hey");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/campaign/page/cart/location/1`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("response campaign", response.data);
      alert("Campaign Added successfully.");
      handleClosePopup();
      fetchFirstCampaign();
    } catch (error) {
      console.error("error in adding top campaing in order ", error);
    }
  };
  const handleAddCampaignSecond = async () => {
    // handleClosePopup();
    console.log("hey");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/campaign/page/cart/location/2`,
        formDataSecond,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("response campaign", response.data);
      alert("Campaign Added successfully.");
      handleClosePopupSecond();
      fetchSecondCampaign();
    } catch (error) {
      console.error("error in adding top campaing in order ", error);
    }
  };
  const handleEdit = (type) => {
    setEditing(true);
    if (type === "first") {
      setOpenPopup(true);
    } else {
      setOpenPopupSecond(true);
    }
  };

  const handleUpdateCampaign = async (id, type) => {
    console.log("hey");
    const dataToSend = type === "first" ? formData : formDataSecond;
    if (type === "first") {
      console.log("first");
    } else {
      console.log("second");
    }
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/campaign/${id}`,
        dataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("response campaign", response.data);
      handleClosePopup();
      setEditing(false);
      handleClosePopupSecond();
      fetchFirstCampaign();
      fetchSecondCampaign();
    } catch (error) {
      console.error("error in adding top campaing in product", error);
    }
  };

  useEffect(() => {
    fetchFirstCampaign();
    fetchSecondCampaign();
  }, []);

  return (
    <>
      <div className="">
        {/* Left Section */}
        <div className="flex gap-4">
          {/* First Image Section */}
          <div className="relative border w-[25%] h-[512px] mb-2">
            <img
              src={`${import.meta.env.VITE_BASE_URL_IMAGE}uploads/campaign/${first.image}`}
              alt="Campaign 1"
              className="w-full h-full object-cover rounded-xl"
            />
            <Box className="absolute top-2 right-2 flex space-x-2">
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={handleOpenPopup}
              >
                Add
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => handleEdit("first")}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={() => handleDeleteCampaign(first?.id, "first")}
              >
                Delete
              </Button>
            </Box>
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
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              )}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={
                  editing
                    ? () => handleUpdateCampaign(first.id, "first")
                    : handleAddCampaignTop
                }
              >
                {editing ? "Update Campaign" : "Submit"}
              </Button>
            </Box>
          </Modal>

          {/* Cart Section */}
          <div className="flex flex-col gap-6 w-[512px]">
            <div className="bg-white shadow-md rounded-lg p-4 w-full h-40">
              {/* Item Info Skeleton */}
              <div className="flex gap-4 items-center">
                <div className="bg-gray-200 w-20 h-20 rounded-lg"></div>
                <div className="flex flex-col flex-1 gap-2">
                  <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
                  <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
                  <div className="bg-gray-200 h-4 w-1/4 rounded"></div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="bg-gray-200 h-10 w-32 rounded"></div>
                <div className="bg-gray-200 h-10 w-10 rounded"></div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 w-full h-40">
              {/* Item Info Skeleton */}
              <div className="flex gap-4 items-center">
                <div className="bg-gray-200 w-20 h-20 rounded-lg"></div>
                <div className="flex flex-col flex-1 gap-2">
                  <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
                  <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
                  <div className="bg-gray-200 h-4 w-1/4 rounded"></div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="bg-gray-200 h-10 w-32 rounded"></div>
                <div className="bg-gray-200 h-10 w-10 rounded"></div>
              </div>
            </div>
          </div>

          {/* Price Details Section */}
          <div className="bg-white shadow-md rounded-lg p-4 w-72 h-96">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="bg-gray-200 h-4 w-1/3 rounded"></div>
                <div className="bg-gray-200 h-4 w-1/4 rounded"></div>
              </div>
              <div className="flex justify-between">
                <div className="bg-gray-200 h-4 w-1/3 rounded"></div>
                <div className="bg-gray-200 h-4 w-1/4 rounded"></div>
              </div>
              <div className="flex justify-between">
                <div className="bg-gray-200 h-4 w-1/3 rounded"></div>
                <div className="bg-gray-200 h-4 w-1/4 rounded"></div>
              </div>
            </div>
            <div className="mt-6 bg-gray-200 h-10 w-full rounded"></div>
          </div>
        </div>

        {/* Second Image Section */}
        <div className="relative border w-[100%] h-64">
          <img
            src={`${import.meta.env.VITE_BASE_URL_IMAGE}uploads/campaign/${second.image}`}
            alt="Campaign 2"
            className="w-full h-full object-cover rounded-xl border"
          />
          <Box className="absolute top-2 right-2 flex space-x-2">
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={handleOpenPopupSecond}
            >
              Add
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleEdit("second")}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => handleDeleteCampaign(second?.id, "second")}
            >
              Delete
            </Button>
          </Box>
        </div>
      </div>
      {/* Popup for Second Campaign */}
      <Modal open={openPopupSecond} onClose={handleClosePopupSecond}>
        <Box sx={{ ...modalStyle }}>
          <Typography variant="h6" component="h2" mb={2}>
            Add Campaign 2
          </Typography>
          <TextField
            fullWidth
            label="Button Name"
            name="buttonName"
            value={formDataSecond.buttonName}
            onChange={handleInputChangeSecond}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Link"
            name="link"
            value={formDataSecond.link}
            onChange={handleInputChangeSecond}
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
              onChange={handleImageChangeSecond}
            />
          </Button>
          {imagePreviewSecond && (
            <img
              src={imagePreviewSecond}
              alt="Preview"
              style={{ width: "100%" }}
            />
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={
              editing
                ? () => handleUpdateCampaign(second.id, "second")
                : handleAddCampaignSecond
            }
          >
            {editing ? "Update Campaign" : "Submit"}
          </Button>
        </Box>
      </Modal>
    </>
  );
};
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default CartPageCampaign;
