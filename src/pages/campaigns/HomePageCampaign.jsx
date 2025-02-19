import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import { React, useState, useEffect } from "react";
import axios from "axios";

const HomePageCampaign = () => {
  const [editing,setEditing]=useState(false);
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
      console.log("fetch1");
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/campaign/page/home/location/1`
      );
      const data = response.data.data;

      if (Array.isArray(data) && data.length > 0) {
        const lastElement = data[data.length - 1]; //Access the last element
        console.log("Last Element:", lastElement);
        setFirst(lastElement);
        setFormData({
          buttonName: lastElement.button_name || "",
          link: lastElement.link || "",
          image: lastElement.image || null,
        }); // Set the last element as state
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
      console.log("fetch2");
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/campaign/page/home/location/2`
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
      console.log("delete1");
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/campaign/${id}`
      );
      alert("Campaign deleted successfully.");
      if (type === "first") {
        setFirst([]); // Reset the first campaign state to empty
      } else if (type === "second") {
        setSecond([]); // Reset the second campaign state to empty
      }
      console.log("delete one", response.data);
    } catch (error) {
      console.log("error in delete one", error);
    }
  };
  const handleAddCampaignTop = async () => {
    // handleClosePopup();
    console.log("m hit now");
    const formPayload = new FormData();
    formPayload.append("buttonName", formData.buttonName);
    formPayload.append("link", formData.link);
    formPayload.append("image", formData.image);

    try {
      console.log("fordata", formData);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/campaign/page/home/location/1`,
        formPayload,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("Added campaign:", response.data);
      handleClosePopup();
      setEditing(false);
      fetchFirstCampaign();
    } catch (error) {
      console.error("Error in adding campaign:", error);
    }
  };

  const handleAddCampaignSecond = async () => {
    const formPayload = new FormData();
    formPayload.append("buttonName", formDataSecond.buttonName);
    formPayload.append("link", formDataSecond.link);
    formPayload.append("image", formDataSecond.image);
    console.log("hey");
    try {
      console.log("formDataSecond", formDataSecond);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/campaign/page/home/location/2`,
        formPayload,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("response campaign", response.data);
      handleClosePopupSecond();
      setEditing(false);
      fetchSecondCampaign();
    } catch (error) {
      console.error("error in adding top campaing in home ", error);
    }
  };
  const handleEditOne = () => {
    handleOpenPopup();
    setEditing(true)
  };
  const handleEditSecond = () => {
    handleOpenPopupSecond();
    setEditing(true)
  };
  const handleUpdateCampaign = async (id,type) => {
    console.log("hey");
    const dataToSend = type === "first" ? formData : formDataSecond;
    if(type==="first"){console.log("first")}else{console.log("second")}
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
      {/* 1st campaign  */}
      <div className="border rounded-xl max-w-[1280px] m-auto p-4 mb-4">
        <div className="mb-4">
          <Typography variant="h4" className="font-semibold">
            Home Campaigns
          </Typography>
        </div>
        <div className="">
          {/* first line  */}
          <div className="flex gap-4">
            {/* Skeleton */}
            <div className="flex items-center justify-center border w-[72%]">
              <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl">
                {/* <!-- First Box --> */}
                <div className="bg-white shadow-md rounded-lg flex-1 p-4">
                  <h2 className="text-xl font-bold text-gray-700 mb-4">
                    Top Category
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {/* <!-- Cards --> */}
                    <div className="bg-gray-200 w-40 h-40 rounded-lg"></div>
                    <div className="bg-gray-200 w-40 h-40 rounded-lg"></div>
                    <div className="bg-gray-200 w-40 h-40 rounded-lg"></div>
                    <div className="bg-gray-200 w-40 h-40 rounded-lg"></div>
                  </div>
                </div>

                {/* <!-- Second Box --> */}
                <div className="bg-white shadow-md rounded-lg flex-1 p-4">
                  <h2 className="text-xl font-bold text-gray-700 mb-4">
                    Top Pick
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {/* <!-- Cards --> */}
                    <div className="bg-gray-200 w-40 h-40 rounded-lg"></div>
                    <div className="bg-gray-200 w-40 h-40 rounded-lg"></div>
                    <div className="bg-gray-200 w-40 h-40 rounded-lg"></div>
                    <div className="bg-gray-200 w-40 h-40 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* First Image Section */}
            <div className="relative border w-[28%] h-[420px]">
              <img
                src={`${import.meta.env.VITE_BASE_URL_NODE}uploads/campaign/${first.image}`}
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
                  onClick={handleEditOne}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  onClick={() => handleDeleteCampaign(first.id, "first")}
                >
                  Delete
                </Button>
              </Box>
            </div>
          </div>
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
            onClick={editing ? () => handleUpdateCampaign(first.id,"first") : handleAddCampaignTop}
          >
           {editing ? "Update Campaign" : "Submit"}
          </Button>
        </Box>
      </Modal>

      {/* 2nd campaign  */}

      <div className="">
        {/* first line  */}
        <div className="flex gap-4">
          {/* First Image Section */}
          <div className="relative border w-[28%] h-[420px]">
            <img
              src={`${import.meta.env.VITE_BASE_URL_NODE}uploads/campaign/${second.image}`}
              alt="Home Campaign 3"
              className="w-full h-full object-cover rounded-xl"
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
              <Button variant="contained" color="primary" size="small" onClick={handleEditSecond}>
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={() => handleDeleteCampaign(second.id, "second")}
              >
                Delete
              </Button>
            </Box>
          </div>

          {/* Skeleton */}
          <div className="flex items-center justify-center border w-[72%]">
            <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl">
              {/* <!-- First Box --> */}
              <div className="bg-white shadow-md rounded-lg flex-1 p-4">
                <h2 className="text-xl font-bold text-gray-700 mb-4">
                  Top Category
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {/* <!-- Cards --> */}
                  <div className="bg-gray-200 w-40 h-40 rounded-lg"></div>
                  <div className="bg-gray-200 w-40 h-40 rounded-lg"></div>
                  <div className="bg-gray-200 w-40 h-40 rounded-lg"></div>
                  <div className="bg-gray-200 w-40 h-40 rounded-lg"></div>
                </div>
              </div>

              {/* <!-- Second Box --> */}
              <div className="bg-white shadow-md rounded-lg flex-1 p-4">
                <h2 className="text-xl font-bold text-gray-700 mb-4">
                  Top Pick
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {/* <!-- Cards --> */}
                  <div className="bg-gray-200 w-40 h-40 rounded-lg"></div>
                  <div className="bg-gray-200 w-40 h-40 rounded-lg"></div>
                  <div className="bg-gray-200 w-40 h-40 rounded-lg"></div>
                  <div className="bg-gray-200 w-40 h-40 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
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
              style={{ width: "300px", height: "300px" }}
            />
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={editing ? () => handleUpdateCampaign(second.id,"second") : handleAddCampaignSecond}
          >
            {editing?"Update":"Submit"}
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
export default HomePageCampaign;
