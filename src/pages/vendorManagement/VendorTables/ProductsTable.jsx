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

const ProductsTable = () => {
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
    {
      id: 2,
      productName: "Smartphone Cover",
      quantity: 200,
      status: "Active",
      categoryId: "C002",
      subCategoryId: "SC002",
      oldPrice: "499.00",
      newPrice: "399.00",
    },
    {
      id: 3,
      productName: "Bluetooth Speaker",
      quantity: 30,
      status: "Inactive",
      categoryId: "C003",
      subCategoryId: "SC003",
      oldPrice: "3999.00",
      newPrice: "3499.00",
    },
    {
      id: 4,
      productName: "Laptop Stand",
      quantity: 100,
      status: "Active",
      categoryId: "C004",
      subCategoryId: "SC004",
      oldPrice: "1499.00",
      newPrice: "1299.00",
    },
    {
      id: 5,
      productName: "Gaming Mouse",
      quantity: 75,
      status: "Active",
      categoryId: "C005",
      subCategoryId: "SC005",
      oldPrice: "1999.00",
      newPrice: "1799.00",
    },
    {
      id: 6,
      productName: "Wireless Keyboard",
      quantity: 60,
      status: "Inactive",
      categoryId: "C006",
      subCategoryId: "SC006",
      oldPrice: "2499.00",
      newPrice: "2199.00",
    },
    {
      id: 7,
      productName: "Power Bank",
      quantity: 90,
      status: "Active",
      categoryId: "C007",
      subCategoryId: "SC007",
      oldPrice: "1299.00",
      newPrice: "1099.00",
    },
    {
      id: 8,
      productName: "Fitness Band",
      quantity: 120,
      status: "Active",
      categoryId: "C008",
      subCategoryId: "SC008",
      oldPrice: "3499.00",
      newPrice: "2999.00",
    },
    {
      id: 9,
      productName: "Portable SSD",
      quantity: 40,
      status: "Inactive",
      categoryId: "C009",
      subCategoryId: "SC009",
      oldPrice: "5999.00",
      newPrice: "5499.00",
    },
    {
      id: 10,
      productName: "Smartwatch",
      quantity: 25,
      status: "Active",
      categoryId: "C010",
      subCategoryId: "SC010",
      oldPrice: "9999.00",
      newPrice: "8499.00",
    },
  ];
  return (
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
                <TableCell>Quantity</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Category Id</TableCell>
                <TableCell>Sub-Category Id</TableCell>
                <TableCell>Old Price</TableCell>
                <TableCell>New Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.productName}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.categoryId}</TableCell>
                  <TableCell>{row.subCategoryId}</TableCell>
                  <TableCell>{row.oldPrice}</TableCell>
                  <TableCell>{row.newPrice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box className="p-4 flex justify-end">
          <TablePagination
            component="div"
            count={products.length}
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

export default ProductsTable;
