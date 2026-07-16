import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

/* 임시 작성 */
import { publicAPIClient } from "./utils/apiClient";

const testBackendHandle = async () => {
  const { data } = await publicAPIClient.get("/api/health");
  console.log(data);
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <h1>Test</h1>

      <button
        className="px-4 py-2 border border-neutral-400 rounded-xl cursor-pointer"
        onClick={testBackendHandle}
      >
        backend 통신 테스트
      </button>
    </div>
  </StrictMode>,
);
