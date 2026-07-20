import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import StockDetail from "./pages/StockDetail";
import { publicAPIClient } from "./utils/apiClient";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>문제가 발생했습니다.</div>, // loader 에러, 404 에러 등
    children: [
      { index: true, element: <Home /> },
      {
        path: "stocks/:ticker",
        element: <StockDetail />,
        loader: async ({ params }) => {
          const { data } = await publicAPIClient.get(
            `/api/stocks/${params.ticker}`,
          );
          return data;
        },
      },
    ],
  },
]);

export default router;
