import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainHeader from "../../mainHeader/MainHeader";

const EditTopSliderImage = () => {
  const navigate = useNavigate();
  const { sliderId } = useParams(); // Assuming the slider ID is passed as a route param
  const [imageName, setImageName] = useState(""); // For the slider image name
  const [image, setImage] = useState(null); // For the new image
  const [preview, setPreview] = useState(null); // For the image preview

  // Simulating the existing slider data
  useEffect(() => {
    // Fetch slider data from API or state management
    const fetchSliderData = async () => {
      const existingSliderData = {
        id: sliderId,
        name: "Sample Slider Image",
        imageUrl:
          "https://images.pexels.com/photos/16573354/pexels-photo-16573354/free-photo-of-funny-dog-in-wind.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      };

      // Preload the form with the old data
      setImageName(existingSliderData.name);
      setPreview(existingSliderData.imageUrl);
    };

    fetchSliderData();
  }, [sliderId]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imageName) {
      alert("Please provide an image name.");
      return;
    }

    // Prepare data for submission
    const formData = new FormData();
    formData.append("imageName", imageName);
    if (image) formData.append("image", image);

    // Add API logic here to save the updated slider data
    console.log("Updated Data Submitted:", {
      imageName,
      image,
    });

    // Navigate back to the slider management page after submission
    navigate("/admin/top-slider");
  };

  return (
    <>
      <div id="edit" className="bg-gray-100 min-h-screen">
        {/* Header */}
        <MainHeader name={"Edit Top Slider"} />

        <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md mt-2">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-6 text-gray-800">Edit Slider</h1>

          <form onSubmit={handleSubmit}>
            {/* Image Name */}
            <div className="mb-4">
              <label
                htmlFor="sliderImageName"
                className="text-lg font-medium text-gray-700"
              >
                Slider Image Name
              </label>
              <input
                type="text"
                id="sliderImageName"
                value={imageName}
                onChange={(e) => setImageName(e.target.value)}
                className="block mt-2 w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter Image Name"
                required
              />
            </div>

            {/* Image Upload */}
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
              />
              {preview && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Current Image:</p>
                  <img
                    src={preview}
                    alt="Current Preview"
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
                Update Slider
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

export default EditTopSliderImage;
