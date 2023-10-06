import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.css";
import Router from "./components/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const documentEl = document.getElementById("root");

if (documentEl) {
    ReactDOM.createRoot(documentEl).render(
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <Router />
            </QueryClientProvider>
        </React.StrictMode>
    );
}
