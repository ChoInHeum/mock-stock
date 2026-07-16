import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import router from "./router";
import { publicAPIClient } from "./utils/apiClient";

const testBackendHandle = async () => {
  const { data } = await publicAPIClient.get("/api/health");
  console.log(data);
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
