import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../mainHeader/MainHeader";

const SingleUser = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <Box id="single-user-profile">
      {/* Main Header */}
      <MainHeader name="Single User" />

      <Box className="single-user-details" p={3}>
        {/* User Title */}
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontWeight: "bold",
            marginBottom: 2,
          }}
        >
          <ArrowBackIcon
            sx={{
              fontSize: "24px",
              cursor: "pointer",
            }}
            onClick={() => navigate(-1)}
          />
          User Name
        </Typography>

        {/* User Details Card */}
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            p: 3,
            borderRadius: "16px",
            backgroundColor: "#f1f5f9",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", md: "30%" },
            }}
          >
            <Avatar
              alt="User-Image"
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
              sx={{
                width: 150,
                height: 150,
              }}
            />
          </Box>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="body1" fontWeight="bold">
              Email
            </Typography>
            <Typography variant="body2">mail_id123@gmail.com</Typography>
            <AccountBalanceWalletIcon sx={{ marginTop: 1 }} />
          </CardContent>
          <Divider orientation="vertical" flexItem />
          <CardContent>
            <Typography variant="body1" fontWeight="bold">
              Contact
            </Typography>
            <Typography variant="body2">+91-8523697412</Typography>
          </CardContent>
        </Card>

        {/* All Orders Section */}
        <Typography variant="h5" mt={3}>
          All Orders
        </Typography>

        <Card
          sx={{
            mt: 2,
            p: 3,
            borderRadius: "16px",
            backgroundColor: "#f1f5f9",
          }}
        >
          <Box display="flex" justifyContent="space-between" mb={3}>
            {/* Filter Toggle */}
            <Box display="flex" gap={2}>
              <IconButton
                sx={{
                  backgroundColor: "white",
                  boxShadow: 1,
                  "&:hover": { backgroundColor: "#ffe4e6" },
                }}
                onClick={() => setFilterToggle(!filterToggle)}
              >
                <FilterAltIcon sx={{ fontSize: 30 }} />
              </IconButton>

              {/* Filter Options */}
              {filterToggle && (
                <Box display="flex" gap={2}>
                  {[
                    "All",
                    "Pending",
                    "Accepted",
                    "Shipping",
                    "Delivered",
                    "Other",
                  ].map((filter, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 1,
                        borderRadius: 2,
                        padding: "5px 15px",
                        textTransform: "capitalize",
                      }}
                    >
                      {filter}
                      <Box
                        sx={{
                          backgroundColor: "#6688DC",
                          color: "white",
                          borderRadius: 1,
                          padding: "2px 8px",
                        }}
                      >
                        215
                      </Box>
                    </Button>
                  ))}
                </Box>
              )}
            </Box>

            {/* Export Button */}
            <Button
              sx={{
                backgroundColor: "white",
                boxShadow: 1,
                "&:hover": { backgroundColor: "#ffe4e6" },
              }}
              startIcon={<DownloadIcon />}
            >
              Export
            </Button>
          </Box>

          {/* Search Box */}
          <Box mb={2}>
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              sx={{ width: "300px" }}
            />
          </Box>

          {/* No Data Found */}
          <Box textAlign="center">
            <Typography variant="body1" fontWeight="bold" color="gray">
              NO DATA FOUND FOR THIS USER.
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default SingleUser;

// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import DownloadIcon from "@mui/icons-material/Download";
// import FilterAltIcon from "@mui/icons-material/FilterAlt";
// import { Box, TextField } from "@mui/material";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import MainHeader from "../../MainHeader/MainHeader";
// {
//   /* <AccountCircleIcon sx={{ fontSize: "200px" }} />; */
// }

// const SingleUser = () => {
//   const [filterToggle, setFilterToggle] = useState(false);

//   const navigate = useNavigate();
//   return (
//     <>
//       <div id="single-user-profile">
//         <MainHeader name={"Single User"}></MainHeader>
//         <div className="single-user-details">
//           <h2 className="flex items-center text-2xl font-semibold ml-5">
//             <ArrowBackIcon
//               sx={{
//                 fontSize: "24px",
//                 cursor: "pointer",
//               }}
//               onClick={() => navigate(-1)}
//             />
//             User Name
//           </h2>
//           <div className="border border-blue-500 bg-gray-100 m-4 p-4 rounded-xl flex column-container">
//             <div className="w-60 h-60 border border-gray-400 flex items-center justify-center w-1/2 ">
//               <img
//                 src={
//                   "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
//                 }
//                 alt="User-Image"
//                 className="h-full w-full p-2 object-cover rounded-full"
//               />
//             </div>
//             <div className="m-2 p-2 w-1/3">
//               <p>Email</p>
//               <p>mail_id123@gmail.com</p>
//               <AccountBalanceWalletIcon />
//             </div>
//             <div className="border-black border-l m-2 p-2 w-1/3">
//               <p>Contact</p>
//               <p>+91-8523697412</p>
//             </div>
//           </div>

//           <h2 className="text-2xl ml-5">All Orders</h2>

//           <div className="all-orders border border-blue-500 bg-gray-100 m-4 p-4 rounded-xl">
//             <div className="flex justify-between">
//               <div className="filter-main flex gap-5">
//                 <span>
//                   <FilterAltIcon
//                     sx={{ fontSize: 40 }}
//                     className="bg-white rounded-md px-2 drop-shadow-md hover:bg-pink-100 cursor-pointer"
//                     onClick={() => setFilterToggle(!filterToggle)}
//                   />
//                 </span>
//                 {filterToggle ? (
//                   <>
//                     <div className="flex justify-between gap-4 h-10">
//                       <button className=" flex items-center justify-between border border-gray-500 w-24 rounded-md">
//                         <span className="ml-2 text-gray-500">All</span>
//                         <span className="text-white bg-[#6688DC] py-1 px-2 rounded-md m-1">
//                           215
//                         </span>
//                       </button>
//                       <button className=" flex items-center justify-between border border-gray-500 w-32 rounded-md">
//                         <span className="ml-2 text-gray-500">Pending</span>
//                         <span className="text-white bg-[#6688DC] py-1 px-2 rounded-md m-1">
//                           215
//                         </span>
//                       </button>
//                       <button className=" flex items-center justify-between border border-gray-500 w-32 rounded-md">
//                         <span className="ml-2 text-gray-500">Accepted</span>
//                         <span className="text-white bg-[#6688DC] py-1 px-2 rounded-md m-1">
//                           215
//                         </span>
//                       </button>
//                       <button className=" flex items-center justify-between border border-gray-500 w-32 rounded-md">
//                         <span className="ml-2 text-gray-500">Shiping</span>
//                         <span className="text-white bg-[#6688DC] py-1 px-2 rounded-md m-1">
//                           215
//                         </span>
//                       </button>
//                       <button className=" flex items-center justify-between border border-gray-500 w-32 rounded-md">
//                         <span className="ml-2 text-gray-500">Delivered</span>
//                         <span className="text-white bg-[#6688DC] py-1 px-2 rounded-md m-1">
//                           215
//                         </span>
//                       </button>
//                       <button className=" flex items-center justify-between border border-gray-500 w-30 rounded-md">
//                         <span className="ml-2 text-gray-500">Other</span>
//                         <span className="text-white bg-[#6688DC] py-1 px-2 rounded-md m-1">
//                           215
//                         </span>
//                       </button>
//                     </div>
//                   </>
//                 ) : null}
//               </div>

//               <span className="bg-white rounded-md p-2 drop-shadow-md hover:bg-pink-100 cursor-pointer">
//                 Export
//                 <DownloadIcon sx={{ fontSize: 20 }} className="text-xl" />
//               </span>
//             </div>

//             {/* Search Box */}
//             <Box display="flex" justifyContent="flex-start" mb={2}>
//               <TextField
//                 label="Search"
//                 variant="outlined"
//                 size="small"
//                 sx={{ width: 300, margin: 2 }}
//               />
//             </Box>

//             <div className="user-data-section">
//               <p>NO DATA FOUND FOR THIS USER.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SingleUser;
