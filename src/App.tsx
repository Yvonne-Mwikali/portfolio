import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Layout, MainPage, PortfolioPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "portfolio", element: <PortfolioPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
