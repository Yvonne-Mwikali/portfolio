import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Layout, MainPage } from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <Layout />, children: [{ index: true, element: <MainPage /> }] },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
