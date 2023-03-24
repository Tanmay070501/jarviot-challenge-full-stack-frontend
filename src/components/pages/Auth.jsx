import axios from "axios";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Auth({ setUser }) {
    const [searchParams] = useSearchParams();
    useEffect(() => {
        const code = searchParams.get("code");
        console.log(code);
        if (code) {
            axios
                .post(process.env.REACT_APP_BACKEND_URL + "getToken", {
                    code: code,
                })
                .then((response) => {
                    console.log(response);
                    setUser({ data: response.data });
                });
        }
    }, [searchParams, setUser]);

    return <></>;
}

export default Auth;
