import { Box, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [url, seturl] = useState("");
    useEffect(() => {
        axios
            .get(process.env.REACT_APP_BACKEND_URL + "getAuthUrl")
            .then((response) => {
                seturl(response.data);
            });
    }, []);
    return (
        <Box my={12} textAlign={"center"}>
            {url && (
                <Button href={url} variant="contained">
                    Link Drive
                </Button>
            )}
        </Box>
    );
}

export default Home;
