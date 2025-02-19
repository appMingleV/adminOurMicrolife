import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MainHeader from "../../mainHeader/MainHeader";

const CreateDownSliderImage = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [sliderLink, setSliderLink] = useState("");
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleLinkChange = (e) => {
    setSliderLink(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !sliderLink) {
      alert("Please provide both a slider image and a link.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("link", sliderLink);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/sliders/bottom`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("response slider", response.data);
      if (response.status === 200 || response.status === 201) {
        alert("Slider added successfully!");
        navigate(-1);
      } else {
        alert("Failed to add slider. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading slider:", error);
      alert("An error occurred while uploading the slider. Please try again.");
    }
  };

  return (
    <>
      <div id="create" className="bg-gray-100 min-h-screen">
        <MainHeader name={"Create Top Slider"} />
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md mt-6">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">
            Create Slider
          </h1>
          <form onSubmit={handleSubmit}>
            {/* Slider Link */}
            <div className="mb-4">
              <label
                htmlFor="sliderLink"
                className="text-lg font-medium text-gray-700"
              >
                Slider Link
              </label>
              <input
                type="text"
                value={sliderLink}
                onChange={handleLinkChange}
                className="block mt-2 w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter Image Name"
                required
              />
            </div>
            {/* Slider Image */}
            <div className="mb-4">
              <label
                htmlFor="sliderImage"
                className="text-lg font-medium text-gray-700"
              >
                Slider Image
              </label>
              <input
                type="file"
                id="sliderImage"
                accept="image/*"
                onChange={handleImageChange}
                className="block mt-2 w-full border border-gray-300 rounded-md p-2"
                required
              />
              {preview && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Image Preview:</p>
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-40 h-40 rounded-md border border-gray-300 mt-2"
                  />
                </div>
              )}
            </div>
            {/* Buttons */}
            <div className="flex items-center justify-between mt-6">
              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-all duration-200"
              >
                Add Slider
              </button>
              <button
                type="button"
                className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-all duration-200"
                onClick={() => navigate("/admin/top-slider")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateDownSliderImage;
