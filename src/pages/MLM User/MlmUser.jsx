import DownloadIcon from "@mui/icons-material/Download";
import img from "../../assets/hacker.png";
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const data = [
    {
        id: 1,
        fullName: "John",
        transactionId: "33434",
        image: img,
        mobile: "1234567890",
    },
    {
        id: 2,
        fullName: "Jane",
        transactionId: "3ew332",
        image: img,
        mobile: "0987654321",
    },
    {
        id: 1,
        fullName: "John",
        transactionId: "342ew",
        image: img,
        mobile: "1234567890",
    },
    {
        id: 2,
        fullName: "Jane",
        transactionId: "3322",
        image: img,
        mobile: "0987654321",
    },
    {
        id: 1,
        fullName: "John",
        transactionId: "456678",
        image: img,
        mobile: "1234567890",
    },
    {
        id: 2,
        fullName: "Jane",
        transactionId: "5ty7y",
        image: img,
        mobile: "0987654321",
    },

];

const MlmUser = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // Filter data based on search term
    const filteredData = data.filter(
        (row) =>
            row.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.image.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.mobile.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Handle Pagination
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Handle View Details Navigation
    const handleDetails = (id) => {
        navigate("/admin/mlm-details");
    };

    return (
        <div>
            {/* Header */}
            <div className="container mx-auto px-5 py-5">
                <header className="flex justify-between px-5">
                    <Typography variant="h4">MLM User</Typography>
                    <div className="flex gap-5 items-center">
                        {/* <button className="flex items-center gap-2">
              <DownloadIcon />
              <span>Download</span>
            </button> */}
                    </div>
                </header>
                <hr className="w-full " />
            </div>

            <div className="flex justify-center mb-20">
                <Paper style={{ width: "90%" }}>
                    {/* Search Input */}
                    <TextField
                        label="Search"
                        variant="outlined"
                        sx={{ margin: "16px", width: "33%" }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {/* Table */}
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Full Name</TableCell>
                                    <TableCell>Transaction ID</TableCell>
                                    <TableCell>Image</TableCell>
                                    <TableCell>Mobile</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredData
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell>{row.id}</TableCell>
                                            <TableCell>{row.fullName}</TableCell>
                                            <TableCell>{row.transactionId}</TableCell>
                                            <TableCell>
                                                <img src={row.image} alt={row.fullName} width="50" height="50" style={{ borderRadius: "5px" }} />
                                            </TableCell>

                                            <TableCell>{row.mobile}</TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() => handleDetails(row.id)}
                                                >
                                                    View Details
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* Pagination */}
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={filteredData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </div>
    );
};

export default MlmUser;
