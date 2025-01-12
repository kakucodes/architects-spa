import React, { useState, ChangeEvent } from "react";
import { Box, Button, InputBase, styled } from "@mui/material";

interface MaxInputProps {
  max: number;
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

const InputContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#000000",
  borderRadius: "9999px",
  overflow: "hidden",
  width: "fit-content",
  border: "1px solid #262C35",
});

const StyledInput = styled(InputBase)({
  color: "#ffffff",
  padding: "0px 12px",
  width: "60px",
  input: {
    textAlign: "center",
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "&[type=number]": {
      "-moz-appearance": "textfield",
    },
  },
});

const MaxButton = styled(Button)({
  backgroundColor: "#262C35",
  color: "#ffffff",
  borderRadius: "0 9999px 9999px 0", // Changed to match container radius
  padding: "8px 16px",
  minWidth: "unset",
  "&:hover": {
    backgroundColor: "#363c45",
  },
});

export const MaxableInput: React.FC<MaxInputProps> = ({
  max,
  value,
  onChange,
  className,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || 0;
    if (newValue <= max) {
      onChange(newValue);
    }
  };

  const handleMaxClick = () => {
    onChange(max);
  };

  return (
    <InputContainer className={className}>
      <StyledInput
        type="number"
        value={value}
        onChange={handleInputChange}
        inputProps={{
          min: 0,
          max: max,
        }}
      />
      <MaxButton onClick={handleMaxClick}>MAX</MaxButton>
    </InputContainer>
  );
};
