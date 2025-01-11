import { useEffect } from "react";
import { usePrefetchQueries } from "../../hooks/usePrefetchQueries";
import { Header } from "../Header/Header";
import { Outlet } from "@tanstack/react-router";
import { Footer } from "../Footer/Footer";
import "../../App.css";
import Grid2 from "@mui/material/Grid2";

const initialLoader = document.getElementById("initial-loader");

export const AppRoot = () => {
  return (
    <Grid2 container sx={{ backgroundColor: "black" }}>
      <Header />
      <Outlet />
      <Footer />
    </Grid2>
  );
};
