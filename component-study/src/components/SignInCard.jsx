import React from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Divider,
} from "@mui/material";
import SocialButtons from "./SocialButtons";

function SignInCard() {
    return (
        <Box
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                padding: "32px",
                borderRadius: "16px",
                backgroundColor: "#fff",
            }}
        >
            <Typography
                variant="h6"
                style={{
                    fontWeight: "bold",
                    color: "#6872C8",
                    marginBottom: "8px",
                }}
            >
                Sitemark
            </Typography>
            <Typography
                component="h1"
                variant="h5"
                style={{ fontWeight: 600, marginBottom: "16px" }}
            >
                Sign in
            </Typography>

            <Box component="form" noValidate style={{ width: "100%" }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    style={{ marginTop: "8px" }}
                />
                <Button
                    fullWidth
                    variant="contained"
                    style={{
                        marginTop: "24px",
                        marginBottom: "16px",
                        padding: "12px 0",
                        background: "black",
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "1rem",
                    }}
                >
                    Sign in
                </Button>

                <Grid container justifyContent="center">
                    <Grid item>
                        <Link href="#" variant="body2">
                            Forgot your password?
                        </Link>
                    </Grid>
                </Grid>

                <Divider style={{ margin: "24px 0" }}>or</Divider>

                <SocialButtons />

                <Grid
                    container
                    justifyContent="center"
                    style={{ marginTop: "16px" }}
                >
                    <Grid item>
                        <Typography variant="body2">
                            Don't have an account?{" "}
                            <Link
                                href="#"
                                variant="body2"
                                style={{ fontWeight: "bold" }}
                            >
                                Sign up
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default SignInCard;
