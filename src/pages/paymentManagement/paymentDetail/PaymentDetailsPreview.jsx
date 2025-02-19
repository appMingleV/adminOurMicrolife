// import React from "react";

// const PaymentDetail = () => {
//   return (
//     <>
//       <div>Payment Details</div>
//     </>
//   );
// };

// export default PaymentDetail;
import {
  Button,
  Card,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const PaymentDetailsPreview = () => {
  const paymentDetails = {
    transactionId: "123456789",
    date: "10/12/2024",
    customerName: "John Doe",
    customerEmail: "johndoe@example.com",
    paymentStatus: "Completed", // Can be "Pending" or "Failed"
    totalAmount: 15500,
    items: [
      { name: "Product 1", quantity: 2, price: 5000 },
      { name: "Product 2", quantity: 1, price: 5500 },
    ],
    taxes: 1500,
    discount: 1000,
    finalAmount: 15000,
  };

  return (
    <div className="mx-8 my-6">
      {/* Page Header */}
      <Typography variant="h4" className="font-bold mb-6">
        Payment Details
      </Typography>

      {/* Payment Info Card */}
      <Card className="p-6 mb-6 shadow-md border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Typography variant="subtitle1" className="text-gray-500">
              Transaction ID
            </Typography>
            <Typography variant="h6" className="font-bold">
              {paymentDetails.transactionId}
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle1" className="text-gray-500">
              Date
            </Typography>
            <Typography variant="h6" className="font-bold">
              {paymentDetails.date}
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle1" className="text-gray-500">
              Customer Name
            </Typography>
            <Typography variant="h6" className="font-bold">
              {paymentDetails.customerName}
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle1" className="text-gray-500">
              Customer Email
            </Typography>
            <Typography variant="h6" className="font-bold">
              {paymentDetails.customerEmail}
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle1" className="text-gray-500">
              Payment Status
            </Typography>
            <span
              className={`py-1 px-3 rounded-full text-white text-sm ${
                paymentDetails.paymentStatus === "Completed"
                  ? "bg-green-500"
                  : paymentDetails.paymentStatus === "Pending"
                    ? "bg-yellow-500"
                    : "bg-red-500"
              }`}
            >
              {paymentDetails.paymentStatus}
            </span>
          </div>
          <div>
            <Typography variant="subtitle1" className="text-gray-500">
              Total Amount
            </Typography>
            <Typography variant="h6" className="font-bold">
              ₹{paymentDetails.totalAmount.toLocaleString()}
            </Typography>
          </div>
        </div>
      </Card>

      {/* Order Summary Table */}
      <Typography variant="h5" className="font-semibold mb-4">
        Order Summary
      </Typography>
      <TableContainer className="shadow-md border rounded-md mb-6">
        <Table>
          <TableHead className="bg-gray-100">
            <TableRow>
              <TableCell>Item Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paymentDetails.items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>₹{item.price.toLocaleString()}</TableCell>
                <TableCell>
                  ₹{(item.quantity * item.price).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Payment Breakdown */}
      <Typography variant="h5" className="font-semibold mb-4">
        Payment Breakdown
      </Typography>
      <Card className="p-6 shadow-md border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-between">
            <Typography variant="subtitle1" className="text-gray-500">
              Subtotal
            </Typography>
            <Typography variant="h6" className="font-bold">
              ₹{paymentDetails.totalAmount.toLocaleString()}
            </Typography>
          </div>
          <div className="flex justify-between">
            <Typography variant="subtitle1" className="text-gray-500">
              Taxes
            </Typography>
            <Typography variant="h6" className="font-bold">
              ₹{paymentDetails.taxes.toLocaleString()}
            </Typography>
          </div>
          <div className="flex justify-between">
            <Typography variant="subtitle1" className="text-gray-500">
              Discount
            </Typography>
            <Typography variant="h6" className="font-bold">
              ₹{paymentDetails.discount.toLocaleString()}
            </Typography>
          </div>
          <Divider className="col-span-2" />
          <div className="flex justify-between">
            <Typography variant="subtitle1" className="text-gray-500">
              Final Amount
            </Typography>
            <Typography variant="h6" className="font-bold">
              ₹{paymentDetails.finalAmount.toLocaleString()}
            </Typography>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-end mt-6">
        <Button
          variant="contained"
          color="primary"
          className="mr-4"
          onClick={() => console.log("Approve Payment")}
        >
          Approve Payment
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => console.log("Reject Payment")}
        >
          Reject Payment
        </Button>
      </div>
    </div>
  );
};

export default PaymentDetailsPreview;
