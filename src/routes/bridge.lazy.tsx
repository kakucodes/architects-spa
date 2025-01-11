import { Box } from "@mui/material";
import { createLazyFileRoute } from "@tanstack/react-router";
import { BridgeWidget } from "../components/BridgeWidget/BridgeWidget";

export const Route = createLazyFileRoute("/bridge")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "75vh",
        width: "100%",
      }}
    >
      <BridgeWidget />
    </Box>
  );
}
