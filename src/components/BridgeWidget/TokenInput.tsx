import React from "react";
import { Box, Grid2, Stack, Typography, styled } from "@mui/material";

interface TokenInputProps {
  amount: string;
  usdValue: string;
  network: string;
  onChange: (value: string) => void;
}

const InputContainer = styled(Box)({
  backgroundColor: "#000000",
  borderRadius: "24px",
  padding: "16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "8px",
  border: "1px solid #262C35",
});

const TokenInfo = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

const Input = styled("input")({
  background: "transparent",
  border: "none",
  color: "#ffffff",
  fontSize: "40px",
  fontWeight: 400,
  width: "120px",
  textAlign: "right",
  "&:focus": {
    outline: "none",
  },
  "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
  "&[type=number]": {
    "-moz-appearance": "textfield",
  },
});

const NetworkLabel = styled(Typography)({
  color: "#777777",
  fontSize: "14px",
});

const UsdValue = styled(Typography)({
  color: "#777777",
  fontSize: "14px",
  textAlign: "right",
});

export const TokenInput: React.FC<TokenInputProps> = ({
  amount,
  usdValue,
  network,
  onChange,
}) => {
  return (
    <InputContainer>
      <Grid2 container spacing={2}>
        <Grid2 size={12} container justifyContent="space-between">
          <TokenInfo>
            <img
              src={`${process.env.PUBLIC_URL}/cultIcon.png`}
              alt="CULT"
              width={32}
              height={32}
            />
            <Typography
              sx={{ display: { md: "inline", sm: "none", xs: "none" } }}
              variant="h6"
              color="white"
            >
              CULT
            </Typography>
          </TokenInfo>

          <Input
            type="number"
            value={amount}
            onChange={(e) => onChange(e.target.value)}
            placeholder="0"
          />
        </Grid2>
        <Grid2 size={12} container justifyContent="space-between">
          <NetworkLabel>on {network}</NetworkLabel>

          <UsdValue>${usdValue}</UsdValue>
        </Grid2>
      </Grid2>
    </InputContainer>
  );
};
