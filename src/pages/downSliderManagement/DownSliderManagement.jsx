// import React from "react";

// const TopSliderManagement = () => {
//   return <div></div>;
// };

// export default TopSliderManagement;
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../mainHeader/MainHeader";
import axios from "axios";

const DownSliderManagement = () => {
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const [slider, setSlider] = useState([]);
  const sliders = [
    {
      id: 1,
      imgText: "Image 1",
      image:
        "https://images.pexels.com/photos/16573354/pexels-photo-16573354/free-photo-of-funny-dog-in-wind.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      imgText: "Image 2",
      image:
        "https://images.pexels.com/photos/17739535/pexels-photo-17739535/free-photo-of-a-pink-neon-sign-on-the-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      imgText: "Image 3",
      image:
        "https://images.pexels.com/photos/28787264/pexels-photo-28787264/free-photo-of-colorful-ceramic-pot-with-cactus-on-pink-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];
  // //  {
  // //   headers: {
  // //     Authorization: `Bearer ${token}`, // Pass the token in the Authorization header

  // //   },
  // }
  const fetchSlider = async () => {
    console.log("hey");
    try {
      console.log("hey 1", import.meta.env.VITE_BASE_URL_RENDER);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/sliders/bottom`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        }
      );
      console.log("response slider", response.data.data);
      setSlider(response.data.data);
    } catch (error) {
      console.error("error in fetching Top slider", error);
    }
  };

  useEffect(() => {
    fetchSlider();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this slider?"
    );
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/sliders/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        }
      );

      if (response.status === 200) {
        alert("Slider deleted successfully!");
        // Update state by removing the deleted slider
        setSlider((prevSlider) =>
          prevSlider.filter((sliderItem) => sliderItem.id !== id)
        );
      } else {
        alert("Failed to delete the slider. Please try again.");
      }
    } catch (error) {
      console.error("Error in deleting slider:", error);
      alert("An error occurred while deleting the slider.");
    }
  };

  return (
    <Box p={3} bgcolor="#f9f9f9" height="100vh">
      {/* Header */}
      <MainHeader name={"Down Slider Management"}></MainHeader>

      {/* Title */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5">Sliders</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate("./create")}
          sx={{
            backgroundColor: "#1976d2",
            textTransform: "capitalize",
            "&:hover": { backgroundColor: "#1565c0" },
          }}
        >
          Create New Slider
        </Button>
      </Box>

      {/* Slider Table */}
      <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f1f5f9" }}>
              <TableCell>Image</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slider.map((slider, index) => (
              <TableRow key={slider.id}>
                <TableCell>
                  <img
                    src={`${import.meta.env.VITE_BASE_URL_NODE}uploads/sliders/${slider.image}`}
                    alt="top_slider-image"
                    className="text-blue-500"
                    style={{
                      width: "80px",
                      height: "60px",
                      borderRadius: "5px",
                    }}
                  />
                </TableCell>
                <TableCell align="center">
                  <Box display="flex" justifyContent="center" gap={2}>
                    {/* <IconButton
                      onClick={() => navigate("./edit")}
                      sx={{
                        backgroundColor: "#ffd600",
                        color: "white",
                        "&:hover": { backgroundColor: "#ffca28" },
                      }}
                    >
                      <EditIcon />
                    </IconButton> */}
                    <IconButton
                      sx={{
                        backgroundColor: "#d32f2f",
                        color: "white",
                        "&:hover": { backgroundColor: "#c62828" },
                      }}
                    >
                      <DeleteIcon onClick={() => handleDelete(slider.id)} />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DownSliderManagement;
