import { Grid2 } from "@mui/material";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Mint } from "../components/Mint/Mint";

export const Route = createLazyFileRoute("/")({
  component: Mint,
});

function Index() {
  return <Grid2>Index</Grid2>;
}
