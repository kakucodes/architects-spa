import React, { useState } from "react";
import { Box, Button, Card, Stack, Typography, styled } from "@mui/material";
import { NetworkSelector } from "./NetworkSelector";
import { TokenInput } from "./TokenInput";
import { ArchButton } from "../common/ArchButton";

const BridgeCard = styled(Card)({
  background: "#16191f",
  borderRadius: "32px",
  padding: "32px",
  width: "100%",
  maxWidth: "375px",
});

const SwapButton = styled(Button)({
  width: "48px",
  height: "48px",
  minWidth: "unset",
  padding: 0,
  borderRadius: "50%",
  backgroundColor: "#262c35",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#363c45",
  },
});

const BridgeButton = styled(Button)({
  backgroundColor: "#f4b305",
  color: "#000000",
  borderRadius: "9999px",
  padding: "16px",
  fontSize: "18px",
  fontWeight: "bold",
  width: "100%",
  marginTop: "32px",
  "&:hover": {
    backgroundColor: "#dba004",
  },
});

const BalanceText = styled(Typography)({
  color: "#777777",
  textAlign: "right",
  marginTop: "8px",
});

export const BridgeWidget = () => {
  const [amount, setAmount] = useState("150");
  const [fromNetwork, setFromNetwork] = useState({
    name: "OSMOSIS",
    logo: `${process.env.PUBLIC_URL}/osmosis-logo.png`,
  });
  const [toNetwork, setToNetwork] = useState({
    name: "ARCHWAY",
    logo: `${process.env.PUBLIC_URL}/archway-logo.jpg`,
  });

  const handleSwapNetworks = () => {
    setFromNetwork(toNetwork);
    setToNetwork(fromNetwork);
  };

  const cultUsdValue = 1.25;

  return (
    <BridgeCard>
      <Stack spacing={6}>
        <Typography variant="h3" color="white" sx={{ mb: 4 }}>
          Bridge
        </Typography>

        <Stack spacing={5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Stack spacing={2}>
              <Typography variant="h6" color="white" sx={{ mb: 2 }}>
                From
              </Typography>
              <NetworkSelector
                networkName={fromNetwork.name}
                logoUrl={fromNetwork.logo}
              />
            </Stack>

            <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
              <SwapButton onClick={handleSwapNetworks}>⇄</SwapButton>
            </Box>

            <Stack spacing={2}>
              <Typography variant="h6" color="white" sx={{ mb: 2 }}>
                To
              </Typography>
              <NetworkSelector
                networkName={toNetwork.name}
                logoUrl={toNetwork.logo}
              />
            </Stack>
          </Box>

          <Stack spacing={2}>
            <BalanceText>
              {fromNetwork.name} balance: {0}
            </BalanceText>

            <Stack spacing={1}>
              <TokenInput
                amount={amount}
                usdValue={(Number(amount) * cultUsdValue).toString()}
                network={fromNetwork.name}
                onChange={setAmount}
              />

              <Typography
                variant="body2"
                color="white"
                sx={{ mt: 2, textAlign: "center" }}
              >
                Enter amount to bridge
              </Typography>
            </Stack>
          </Stack>

          <ArchButton text="BRIDGE" disabled onClick={console.log} />
        </Stack>
      </Stack>
    </BridgeCard>
  );
};
