import React from "react";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

function SocialButtons() {
    return (
        <>
            <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                style={{
                    marginBottom: "12px",
                    textTransform: "none",
                    padding: "10px 0",
                }}
            >
                Sign in with Google
            </Button>

            <Button
                fullWidth
                variant="outlined"
                startIcon={<FacebookIcon />}
                style={{
                    marginBottom: "16px",
                    textTransform: "none",
                    padding: "10px 0",
                }}
            >
                Sign in with Facebook
            </Button>
        </>
    );
}

export default SocialButtons;
