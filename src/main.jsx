import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./Router";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <div className="">
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>
  </div>
);
