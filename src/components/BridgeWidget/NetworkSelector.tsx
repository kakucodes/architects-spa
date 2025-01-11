import React from "react";
import { Box, Typography, styled } from "@mui/material";

interface NetworkSelectorProps {
  networkName: string;
  logoUrl: string;
}

const NetworkContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

const NetworkLogo = styled(Box)({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const NetworkName = styled(Typography)({
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: 500,
});

export const NetworkSelector: React.FC<NetworkSelectorProps> = ({
  networkName,
  logoUrl,
}) => {
  return (
    <NetworkContainer>
      <NetworkLogo>
        <img src={logoUrl} alt={networkName} width={40} height={40} />
      </NetworkLogo>
      <NetworkName>{networkName}</NetworkName>
    </NetworkContainer>
  );
};
