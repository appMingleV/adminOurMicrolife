import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const [orderDetail,setOrderDetail]=useState(null)
  const {id}=useParams()


  useEffect(()=>{
       const getOrderDetail=async()=>{
        await axios.get(`https://api.ourmicrolife.com/api/admin/eco/orderItems/${id}`)
        .then((response)=>{
            console.log(response.data.data)
            setOrderDetail(response.data.data)
        })
        .catch((error)=>{
             console.log(error)
        })
       }
       getOrderDetail()
  },[id])



  const orders = [
    {
      orderId: "ORD123456",
      orderDate: "2024-12-09T12:34:56Z",
      customerDetails: {
        customerId: "CUST98765",
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "+1234567890",
        address: {
          street: "123 Main St",
          city: "Springfield",
          state: "IL",
          zipCode: "62701",
          country: "USA",
        },
      },
      orderStatus: "Shipped",
      paymentDetails: {
        paymentMethod: "Credit Card",
        paymentStatus: "Paid",
        transactionId: "TXN987654321",
      },
      items: [
        {
          productId: "PROD001",
          productName: "Wireless Headphones",
          quantity: 2,
          unitPrice: 50.0,
          subtotal: 100.0,
          vendor: {
            vendorId: "VEND123",
            vendorName: "TechGear Inc.",
            vendorContact: "contact@techgear.com",
          },
        },
        {
          productId: "PROD002",
          productName: "Bluetooth Speaker",
          quantity: 1,
          unitPrice: 75.0,
          subtotal: 75.0,
          vendor: {
            vendorId: "VEND124",
            vendorName: "SoundWave Ltd.",
            vendorContact: "support@soundwave.com",
          },
        },
      ],
      totalAmount: 175.0,
      discount: 10.0,
      finalAmount: 165.0,
      coupon: {
        couponCode: "SUMMER10",
        couponName: "Summer Sale 10%",
        discountValue: 10.0,
        discountType: "Percentage",
        couponValidity: {
          startDate: "2024-06-01",
          endDate: "2024-09-01",
        },
      },
      deliveryDetails: {
        deliveryMethod: "Standard Shipping",
        deliveryStatus: "Out for Delivery",
        trackingId: "TRK123456789",
        estimatedDeliveryDate: "2024-12-12",
      },
    }
  ];

  return (
    <div className="p-6">
      {orderDetail &&
        <Card  className="shadow-lg rounded-lg mb-6">
          <CardContent>
            <Typography
              variant="h4"
              className="text-center text-gray-800 font-bold mb-6"
            >
              Order Details
            </Typography>
            <Grid container spacing={4}>
             
              <Grid item xs={12} md={6}>
                <Box className="border p-4 rounded-md">
                  <Typography variant="h6" className="font-semibold">
                    Order ID
                  </Typography>
                  <Typography>{orderDetail?.orderPayment[0]?.id}</Typography>

                  <Typography variant="h6" className="font-semibold mt-2">
                    Order Date
                  </Typography>
                  <Typography>
                    {new Date(orderDetail?.orderPayment[0]?.updated_at).toLocaleString()}
                  </Typography>

                  <Typography variant="h6" className="font-semibold mt-2">
                    Order Status
                  </Typography>
                  <Typography>{orderDetail?.orderPayment[0]?.status}</Typography>
                </Box>
              </Grid>

              
              <Grid item xs={12} md={6}>
                <Box className="border p-4 rounded-md">
                  <Typography variant="h6" className="font-semibold">
                    Customer Details
                  </Typography>
                  <Typography>Name: {orderDetail?.addressDetails[0]?.full_name}</Typography>
                  {/* <Typography>Email: {orderDetail?.addressDetails[0]?.email}</Typography> */}
                  <Typography>Phone: {orderDetail?.addressDetails[0]?.mobile_number}</Typography>
                  <Typography>
                    Address: {orderDetail?.addressDetails[0]?.full_address},{" "}
                    {orderDetail?.addressDetails[0]?.near_by_address},{" "}
                    {orderDetail?.addressDetails[0]?.pin_code},{" "}
                    {orderDetail?.addressDetails[0]?.city},{" "}
                    {orderDetail?.addressDetails[0]?.state},{" "}
                    {/* {order.customerDetails.address.state},{" "}
                    {order.customerDetails.address.zipCode},{" "}
                    {order.customerDetails.address.country} */}
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            {/* <Grid container spacing={4} className="mt-6">
              
              <Grid item xs={12}>
                <Box className="border p-4 rounded-md">
                  <Typography variant="h6" className="font-semibold">
                    Items
                  </Typography>
                  {order.items.map((item, index) => (
                    <Box
                      key={index}
                      className="flex justify-between py-2 border-b"
                    >
                      <Typography>
                        {item.productName} (x{item.quantity})
                      </Typography>
                      <Typography>₹{item.subtotal}</Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>

              
              <Grid item xs={12} md={6}>
                <Box className="border p-4 rounded-md">
                  <Typography variant="h6" className="font-semibold">
                    Payment Details
                  </Typography>
                  <Typography>
                    Payment Method: {order.paymentDetails.paymentMethod}
                  </Typography>
                  <Typography>
                    Payment Status: {order.paymentDetails.paymentStatus}
                  </Typography>
                  <Typography>
                    Transaction ID: {order.paymentDetails.transactionId}
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box className="border p-4 rounded-md">
                  <Typography variant="h6" className="font-semibold">
                    Coupon Applied
                  </Typography>
                  <Typography>
                    Coupon Code: {order.coupon.couponCode}
                  </Typography>
                  <Typography>
                    Coupon Name: {order.coupon.couponName}
                  </Typography>
                  <Typography>
                    Discount: {order.coupon.discountValue}{" "}
                    {order.coupon.discountType === "Percentage" ? "%" : "₹"}
                  </Typography>
                  <Typography>
                    Validity:{" "}
                    {new Date(
                      order.coupon.couponValidity.startDate
                    ).toLocaleDateString()}{" "}
                    -{" "}
                    {new Date(
                      order.coupon.couponValidity.endDate
                    ).toLocaleDateString()}
                  </Typography>
                </Box>
              </Grid>
            </Grid> */}

            <Grid container spacing={4} className="mt-6">
              
              <Grid item xs={12}>
                <Box className="border p-4 rounded-md">
                  <Typography variant="h6" className="font-semibold">
                    Vendors
                  </Typography>
                  {orderDetail?.orderItems.map((item, index) => (
                    <Box
                      key={index}
                      className="flex justify-between py-2 border-b"
                    >
                      <Typography>{item?.productName}</Typography>
                      <Typography>{item?.vendor_id}</Typography>
                      {/* <Typography>{item.vendor.vendorContact}</Typography> */}
                    </Box>
                  ))}
                </Box>
              </Grid>

              
              {/* <Grid item xs={12} md={6}>
                <Box className="border p-4 rounded-md">
                  <Typography variant="h6" className="font-semibold">
                    Delivery Details
                  </Typography>
                  <Typography>
                    Delivery Method: {order.deliveryDetails.deliveryMethod}
                  </Typography>
                  <Typography>
                    Delivery Status: {order.deliveryDetails.deliveryStatus}
                  </Typography>
                  <Typography>
                    Tracking ID: {order.deliveryDetails.trackingId}
                  </Typography>
                  <Typography>
                    Estimated Delivery Date:{" "}
                    {new Date(
                      order.deliveryDetails.estimatedDeliveryDate
                    ).toLocaleDateString()}
                  </Typography>
                </Box>
              </Grid> */}

             
              <Grid item xs={12} md={6}>
                <Box className="border p-4 rounded-md">
                  <Typography variant="h6" className="font-semibold">
                    Amount Summary
                  </Typography>
                  <Typography>Total Amount: ₹{orderDetail?.orderPayment[0]?.total_amount}</Typography>
                  <Typography>Discount: ₹{orderDetail?.orderPayment[0]?.net_amount}</Typography>
                  <Typography className="font-bold">
                    Final Amount: ₹{orderDetail?.orderPayment[0]?.net_amount}
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Box className="mt-6 flex justify-end">
              <Button variant="contained" color="primary" className="mr-4">
                Edit Order
              </Button>
              <Button variant="outlined" color="secondary">
                Cancel Order
              </Button>
            </Box>
          </CardContent>
        </Card>
      }
    </div>
  );
};

export default OrderDetails;
