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
        width: "100%",
        maxWidth: "100vw",
      }}
    >
      <BridgeWidget />
    </Box>
  );
}
