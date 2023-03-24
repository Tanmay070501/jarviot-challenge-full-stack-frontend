import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import User from "./pages/User";

function Main() {
    //for small app, we don't need context api or redux
    const [user, setUser] = useState(null);
    //console.log(user);
    if (!user)
        return (
            <Box>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/auth"
                        element={<Auth setUser={setUser} />}
                    ></Route>
                    <Route path="*" element={<Navigate to={"/"} />} />
                </Routes>
            </Box>
        );
    if (user)
        return (
            <Box>
                <Routes>
                    <Route path="/" element={<User user={user} />}></Route>
                    <Route path="*" element={<Navigate to={"/"} />} />
                </Routes>
            </Box>
        );
}

export default Main;
