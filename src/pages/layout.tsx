import { Outlet } from "react-router-dom";
import { Footer } from "../sections";
import { Header } from "../components";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
