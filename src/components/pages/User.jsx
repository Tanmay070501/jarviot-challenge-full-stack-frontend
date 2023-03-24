import { Box } from "@mui/material";
import React from "react";
import PublicallyAccessible from "../PublicallyAccessible";
import UserName from "../UserName";

function User({ user }) {
    return (
        <Box>
            <UserName user={user} />
            <PublicallyAccessible user={user} />
        </Box>
    );
}

export default User;
