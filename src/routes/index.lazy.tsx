import { Grid2 } from "@mui/material";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return <Grid2>Index</Grid2>;
}
