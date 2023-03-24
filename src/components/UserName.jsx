import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function UserName({ user }) {
    const [name, setName] = useState("");
    useEffect(() => {
        axios
            .post(process.env.REACT_APP_BACKEND_URL + "getUserInfo", {
                token: user.data,
            })
            .then((response) => {
                setName(response.data.name);
            });
    }, [user]);
    return (
        <>
            {name && (
                <Typography my={2} textAlign={"center"} variant="body1">
                    Hi, {name}
                </Typography>
            )}
        </>
    );
}

export default UserName;
