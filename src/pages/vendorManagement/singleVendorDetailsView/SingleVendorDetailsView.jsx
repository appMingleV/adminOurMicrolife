import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import MainHeader from "../../mainHeader/MainHeader";
import { useParams } from "react-router-dom";

const SingleVendorDetailsView = () => {
  const { id } = useParams();
  const [productTable, setProductTable] = useState(true);
  const [orderTable, setOrderTable] = useState(false);
  const [owner, setVendor] = useState([]);
  const [store, setVendorStoreDetails] = useState([]);
  const [kyc, setKyc] = useState([]);
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);

  const [isapproved, setApprove] = useState(false);
  const handleProduct = () => {
    setOrderTable(false);
    setProductTable(true);
  };

  const handleOrder = () => {
    setProductTable(false);
    setOrderTable(true);
  };

  // admin/vendorSingle/71
  const fetchVendorDetail = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/vendorSingle/${id}`
      );
      console.log("respose", response.data);
      console.log("vendor respose", response.data.vendor);
      console.log(
        "vendor respose store details ",
        response.data.vendorStoreDetails
      );

      setVendor(response.data.vendor);
      setKyc(response.data.vendorKYCDetails);
      const vendorId = response.data.vendorKYCDetails.vendor_id;
      setVendorStoreDetails(response.data.vendorStoreDetails);
      const responseVendorProduct = await axios.get(
        `${import.meta.env.VITE_BASE_URL_RENDER}vendor/stores/products/${vendorId}`
      );
      setProduct(responseVendorProduct.data.data);
      console.log("responseVendorProduct", responseVendorProduct.data.data);
      const responseVendorOrder = await axios.get(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/vendor/${vendorId}/order/`
      );
      setOrder(responseVendorOrder.data.data);
    } catch (error) {
      console.error("error in fetching vendor details", error);
    }
  };
  useEffect(() => {
    fetchVendorDetail();
  }, []);

  // admin/vendorStatus/:vendorId
  //   {
  //     "status":"Accept",
  //     "description":""
  // }
  const vendorStatus = async (status) => {
    try {
      console.log("status", status);
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL_RENDER}admin/vendorStatus/${kyc.vendor_id}`,
        { status: status, description: "You Are approved" }
      );
      console.log("status updation", response.data);
      setApprove(true);
    } catch (error) {
      console.error("error in fetching vendor details", error);
    }
  };

  const products = [
    {
      id: 1,
      productName: "Wireless Earbuds",
      quantity: 50,
      status: "Active",
      categoryId: "C001",
      subCategoryId: "SC001",
      oldPrice: "2999.00",
      newPrice: "2499.00",
    },
  ];

  return (
    <>
      <div id="single-vendor">
        <MainHeader name={"Single Vendor Details View"} />
        <div className="border m-2 p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <ArrowBackIcon sx={{ fontSize: "20px" }} />
              <h2 className="text-xl font-semibold">Vendor Details</h2>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  const newStatus =
                    owner.status === "Accept" ? "Pending" : "Accept";
                  vendorStatus(newStatus); // Call the vendorStatus function with the new status
                  setVendor((prev) => ({ ...prev, status: newStatus })); // Update the local state to reflect the change
                }}
                className={`px-8 py-1 border border-2 rounded-xl ${
                  owner.status === "Accept"
                    ? "bg-red-500 hover:bg-red-400 border-white-700 text-white"
                    : "bg-blue-200 hover:bg-blue-300 border-blue-800"
                }`}
              >
                {owner.status === "Accept" ? "Disapprove" : "Approve"}
              </button>

              <button className="px-8 py-1 border border-blue-800 bg-gray-200">
                Pause
              </button>
              <button className="px-8 py-1 border border-blue-800 bg-red-200">
                Close
              </button>
            </div>
          </div>
          {/* status of the vendor approval */}
          <div className="flex justify-end mb-5">
            {owner.status === "Accept" && (
              <p className="mt-2 md:mt-0 text-green-600 font-bold">
                You are approved.
              </p>
            )}
          </div>
          {/* ///code.... */}

          <div className="container border border-blue-200 rounded-md p-2">
            {/* {vendor.map((data) => ( */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* <!-- Left Section --> */}
              <div className="flex">
                {/* <!-- Vendor Image --> */}
                <img
                  id="imagePNG"
                  src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Vendor Image"
                  className="w-40 h-40 object-cover rounded-md border m-4"
                />

                {/* //   <!-- Vendor Info --> */}

                <div className="px-4 flex flex-col justify-center">
                  <div className="flex gap-2">
                    <p className="text-lg font-semibold">{owner.ownerName}</p>
                    {/* <p className="text-lg font-semibold">{vendors.last || ""}</p> */}
                  </div>
                  <p className="text-sm text-gray-600">{owner.email}</p>
                  <p className="text-sm text-gray-600">{owner.mobile}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <AccountBalanceWalletIcon />
                    <span className="text-sm font-medium">
                      {/* {vendors.wallet}.00 */}
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Right Section --> */}
              <div className="bg-gray-100 p-6 rounded-md shadow-md">
                <p className="mb-2 text-sm">
                  <span className="font-bold">Shop Name: </span>
                  {store.storeName}
                </p>
                <p className="mb-2 text-sm">
                  <span className="font-bold">
                    Shop Category: {store.storeCategory}{" "}
                  </span>
                  ID
                </p>
                <p className="mb-2 text-sm">
                  <span className="font-bold">Aadhaar Number: </span>
                  {kyc.aadharNumber}
                </p>
                <p className="mb-2 text-sm">
                  <span className="font-bold">Pan Number: </span>
                  {kyc.PAN}
                </p>
                <p className="mb-2 text-sm">
                  <span className="font-bold">GST Number: </span>
                  {/* {data.gst} */}
                </p>
                <p className="text-sm">
                  <span className="font-bold">Shop Address: </span>
                  {store.storeAddress}
                </p>
              </div>
            </div>
            {/* ))} */}
          </div>

          {/* ///code.... */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold">Documents</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Image 1 */}
            <div className="relative w-[200px] h-[250px] max-w-xs overflow-hidden rounded-lg shadow-lg">
              <img
                src={`${import.meta.env.VITE_BASE_URL_DOCUMENTS}${kyc.PANDocument}`}
                alt="Pan Document"
                className="w-[200px] h-[250px] object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-90"
              />
            </div>

            {/* Image 2 */}
            <div className="relative w-[200px] h-[250px] max-w-xs overflow-hidden rounded-lg shadow-lg">
              <img
                src={`${import.meta.env.VITE_BASE_URL_DOCUMENTS}${kyc.aadharNumberFront}`}
                alt="Aadhar Front"
                className="w-[200px] h-[250px] object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-90"
              />
            </div>

            {/* Image 3 */}
            <div className="relative w-[200px] h-[250px] max-w-xs overflow-hidden rounded-lg shadow-lg">
              <img
                src={`${import.meta.env.VITE_BASE_URL_DOCUMENTS}${kyc.aadharNumberBack}`}
                alt="Aadhar Back"
                className="w-[200px] h-[250px] object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-90"
              />
            </div>

            {/* Image 4 */}
            <div className="relative w-[200px] h-[250px] max-w-xs overflow-hidden rounded-lg shadow-lg">
              <img
                src={`${import.meta.env.VITE_BASE_URL_DOCUMENTS}${kyc.DocumentProof}`}
                alt="Certificates"
                className="w-[200px] h-[250px] object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-90"
              />
            </div>
          </div>

          <Box className="p-6 bg-gray-50">
            {/* Top Statistics */}
            <Box className="flex gap-4 items-center mb-4">
              <Button
                variant={productTable ? "contained" : "outlined"}
                color={productTable ? "primary" : "secondary"}
                onClick={handleProduct}
                className={`px-4 py-1 rounded-md ${
                  productTable ? "bg-blue-500 text-white" : ""
                }`}
              >
                Total Product{" "}
                <span className="font-bold ml-2">{product?.length}</span>
              </Button>
              <Button
                variant={!productTable ? "contained" : "outlined"}
                color={!productTable ? "primary" : "secondary"}
                onClick={handleOrder}
                className={`px-4 py-1 rounded-md ${
                  !productTable ? "bg-blue-500 text-white" : ""
                }`}
              >
                Total Orders{" "}
                <span className="font-bold ml-2">{order?.length}</span>
              </Button>
            </Box>

            {/* Product Table */}
            {productTable && (
              <>
                <Card className="rounded-lg shadow">
                  <Typography
                    variant="h6"
                    className="p-4 font-semibold border-b bg-gray-100"
                  >
                    All Products
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>#</TableCell>
                          <TableCell>Product Name</TableCell>
                          <TableCell>Image </TableCell>
                          <TableCell>Description</TableCell>
                          <TableCell>Old Price</TableCell>
                          <TableCell>New Price</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {/* Handle Empty Product List */}
                        {product?.length === 0 || product === undefined ? (
                          <TableRow>
                            <TableCell colSpan={6} align="center">
                              No products available yet
                            </TableCell>
                          </TableRow>
                        ) : (
                          /* Map and Display Products */
                          product?.map((row, index) => (
                            <TableRow key={row.id}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{row.name.slice(0, 70)}</TableCell>
                              <TableCell>
                                <img
                                  src={`https://ourmicrolife.com/ourmicrolife/storage/app/public/${row.featured_image}`}
                                  alt={row.name || "Product Image"}
                                  className="w-20 h-14 object-cover"
                                />
                              </TableCell>
                              <TableCell>
                                {row.description.slice(0, 70)}
                              </TableCell>
                              <TableCell>{row.old_price}</TableCell>
                              <TableCell>{row.sale_price}</TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Box className="p-4 flex justify-end">
                    <TablePagination
                      component="div"
                      count={product?.length}
                      rowsPerPage={5}
                      page={0}
                      onPageChange={() => {}}
                      rowsPerPageOptions={[5, 10, 25]}
                    />
                  </Box>
                </Card>
              </>
            )}
            {/* Product End  */}
            {/* ------------------------------------------------------- */}
            {/* Orders Table */}
            {orderTable && (
              <>
                <Card className="rounded-lg shadow">
                  <Typography
                    variant="h6"
                    className="p-4 font-semibold border-b bg-gray-100"
                  >
                    All Orders
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>#</TableCell>
                          <TableCell>Order ID</TableCell>
                          <TableCell>Color</TableCell>
                          <TableCell>Size</TableCell>
                          <TableCell>Image</TableCell>
                          <TableCell>Product Name</TableCell>
                          <TableCell>Final Price</TableCell>

                          <TableCell>Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {order?.length === 0 || order === undefined ? (
                          <TableRow>
                            <TableCell colSpan={7} align="center">
                              No orders available yet
                            </TableCell>
                          </TableRow>
                        ) : (
                          order?.map((row, index) => (
                            <TableRow key={row.id}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{row.orderId}</TableCell>
                              <TableCell>{row.color}</TableCell>
                              <TableCell>{row.size}</TableCell>
                              <TableCell>
                                <img
                                  src={`https://ourmicrolife.com/ourmicrolife/storage/app/public/${row.productImage}`}
                                  alt={row.productImage || "Product Image"}
                                  className="w-20 h-14 object-cover"
                                />
                              </TableCell>
                              <TableCell>
                                {row.productName.slice(0, 50) || "-"}
                              </TableCell>
                              <TableCell>{row.totalAmount}</TableCell>
                              <TableCell>
                                <span className="text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">
                                  {row.status}
                                </span>
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Box className="p-4 flex justify-end">
                    <TablePagination
                      component="div"
                      count={order.length}
                      rowsPerPage={5}
                      page={0}
                      onPageChange={() => {}}
                      rowsPerPageOptions={[5, 10, 25]}
                    />
                  </Box>
                </Card>
              </>
            )}
            {/* Order End  */}
          </Box>
        </div>
      </div>
    </>
  );
};

export default SingleVendorDetailsView;
