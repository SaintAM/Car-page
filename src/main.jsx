import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.css";
// import Home from "./components/screens/home/Home";
import Router from "./components/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Router />
        </QueryClientProvider>
    </React.StrictMode>
);
