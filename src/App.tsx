import './App.css'
import {ThemeProvider} from "@mui/material";
import {theme} from "./config/themes/theme.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Dashboard from "./pages/admin/Dashboard.tsx";

function App() {

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<ProtectedRoute routeType={"admin"}/>}>
                        <Route path={'/'} element={<Dashboard/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
