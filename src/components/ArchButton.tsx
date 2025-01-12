import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AccountBalanceWallet } from "@mui/icons-material";

type Props = {
  text: string;
  style?: "outline" | "filled" | "red" | "cult";
  onClick: () => void;
  disabled?: boolean;
};

const buttonStyles = {
  boxShadow: "none",
  textTransform: "uppercase",
  fontSize: 16,
  padding: "6px 24px",
  border: "3px solid",
  lineHeight: 1.5,
  backgroundColor: "#F4B305",
  borderColor: "#F4B305",
  borderRadius: "40px",
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#fcc838",
    borderColor: "#fcc838",
  },
  "&:disabled": {
    backgroundColor: "rgba(244, 179, 5, .5)",
    color: "#F4B305",
  },
} as const;

const FilledButton = styled(Button)(buttonStyles);
const OutlinedButton = styled(Button)({
  ...buttonStyles,
  backgroundColor: "transparent",
  borderColor: "#F4B305",
  color: "white",
  "&:hover": {
    backgroundColor: "#F4B305",
    color: "black",
  },
});
const RedFilledButton = styled(Button)({
  ...buttonStyles,
  backgroundColor: "#F00",
  borderColor: "#F00",
  "&:hover": {
    backgroundColor: "#ff526c",
    borderColor: "#ff526c",
  },
});

export const ArchButton = ({
  text,
  disabled,
  style = "filled",
  onClick,
}: Props) => {
  return style === "filled" ? (
    <FilledButton onClick={onClick} disabled={disabled}>
      {text}
    </FilledButton>
  ) : style === "outline" ? (
    <OutlinedButton onClick={onClick} disabled={disabled} variant="outlined">
      {text}
    </OutlinedButton>
  ) : style === "red" ? (
    <RedFilledButton onClick={onClick} disabled={disabled}>
      {text}
    </RedFilledButton>
  ) : (
    <OutlinedButton onClick={onClick} disabled={disabled} variant="outlined">
      <Box sx={{ direction: "row", display: "flex", alignItems: "center" }}>
        <img
          src={`${process.env.PUBLIC_URL}/cultIcon.png`}
          height="24"
          width="24"
          alt="CULT logo"
        />
        <Typography sx={{ mx: 1 }}>{text}</Typography>
        <AccountBalanceWallet height="24" width="24" />
      </Box>
    </OutlinedButton>
  );
};
