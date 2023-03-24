import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { BrowserRouter, Link, Routes } from "react-router-dom";

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <BrowserRouter>
                        <Typography to={"/"} variant="h5" component={Link}>
                            Assignment
                        </Typography>
                    </BrowserRouter>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
