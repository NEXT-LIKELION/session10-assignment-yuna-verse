import React from "react";
import { CssBaseline, Container, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SignInCard from "./components/SignInCard";

const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box
                style={{
                    backgroundColor: "#f5f8ff",
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <SignInCard />
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default App;
