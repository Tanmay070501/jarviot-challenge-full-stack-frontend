import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const columns = [
    { id: "file_name", label: "File Name", minWidth: 170 },
    { id: "access_setting", label: "Access Setting", minWidth: 100 },
    {
        id: "shared_with",
        label: "Shared with",
        minWidth: 170,
        align: "right",
    },
    {
        id: "created_by",
        label: "Created by",
        align: "right",
    },
];
function createData(file_name, access_setting, shared_with, created_by) {
    return { file_name, access_setting, shared_with, created_by };
}
function PublicallyAccessible({ user }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = useState([]);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    useEffect(() => {
        axios
            .post(process.env.REACT_APP_BACKEND_URL + "getPublicFiles", {
                token: user.data,
            })
            .then((response) => {
                //setName(response.data.name);
                console.log(response.data);
                setRows(
                    response.data.publicFilesInfo.map((item) =>
                        createData(
                            item.name,
                            "anyone with link",
                            item.sharedWith.length,
                            item.createdBy
                        )
                    )
                );
            });
    }, [user]);
    return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.code}
                                    >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                >
                                                    {column.format &&
                                                    typeof value === "number"
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default PublicallyAccessible;
