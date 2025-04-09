import React from "react";
import {
    Avatar,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
    Container,
    CssBaseline,
    Divider,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./App.css";

const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    style={{
                        marginTop: "64px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
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
                        style={{
                            fontWeight: 600,
                            marginBottom: "16px",
                        }}
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
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
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

                        <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<GoogleIcon />}
                            style={{
                                marginBottom: "8px",
                                padding: "10px 0",
                                textTransform: "none",
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
                                padding: "10px 0",
                                textTransform: "none",
                            }}
                        >
                            Sign in with Facebook
                        </Button>

                        <Grid container justifyContent="center">
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
            </Container>
        </ThemeProvider>
    );
}

export default App;
