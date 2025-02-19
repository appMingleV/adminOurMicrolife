import {
  Box,
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

const OrdersTable = () => {
  const orders = [
    {
      id: 2,
      orderId: "OD00000052",
      color: "Black",
      size: "L",
      couponCode: "",
      finalPrice: "27000.00",
      status: "pending",
    },
    {
      id: 4,
      orderId: "OD00000054",
      color: "Black",
      size: "L",
      couponCode: "",
      finalPrice: "78788.00",
      status: "pending",
    },
    {
      id: 5,
      orderId: "OD00000055",
      color: "Black",
      size: "L",
      couponCode: "",
      finalPrice: "78788.00",
      status: "pending",
    },
    {
      id: 9,
      orderId: "OD00000059",
      color: "Black",
      size: "L",
      couponCode: "",
      finalPrice: "78788.00",
      status: "pending",
    },
    {
      id: 1,
      orderId: "OD00000001",
      color: "Cream",
      size: "L",
      couponCode: "",
      finalPrice: "27799.00",
      status: "pending",
    },
    {
      id: 6,
      orderId: "OD00000056",
      color: "Red",
      size: "L",
      couponCode: "",
      finalPrice: "800.00",
      status: "pending",
    },
    {
      id: 3,
      orderId: "OD00000053",
      color: "White",
      size: "L",
      couponCode: "",
      finalPrice: "78675.00",
      status: "pending",
    },
    {
      id: 7,
      orderId: "OD00000057",
      color: "White",
      size: "L",
      couponCode: "",
      finalPrice: "65985.00",
      status: "pending",
    },
    {
      id: 8,
      orderId: "OD00000058",
      color: "White",
      size: "L",
      couponCode: "",
      finalPrice: "65985.00",
      status: "pending",
    },
  ];
  return (
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
                <TableCell>Coupon Code</TableCell>
                <TableCell>Final Price</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.orderId}</TableCell>
                  <TableCell>{row.color}</TableCell>
                  <TableCell>{row.size}</TableCell>
                  <TableCell>{row.couponCode || "-"}</TableCell>
                  <TableCell>{row.finalPrice}</TableCell>
                  <TableCell>
                    <span className="text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">
                      {row.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box className="p-4 flex justify-end">
          <TablePagination
            component="div"
            count={orders.length}
            rowsPerPage={5}
            page={0}
            onPageChange={() => {}}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </Box>
      </Card>
    </>
  );
};

export default OrdersTable;
