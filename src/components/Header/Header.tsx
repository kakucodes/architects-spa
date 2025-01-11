import { WalletStatus } from "cosmos-kit";
import {
  ButtonConnect,
  ButtonConnected,
  ButtonConnecting,
  ButtonDisconnected,
  ButtonError,
  ButtonNotExist,
  ButtonRejected,
} from "../wallet/Connect";
import { useChain } from "@cosmos-kit/react";

import {
  AppBar,
  Box,
  Button,
  styled,
  Toolbar,
  Link as MuiLink,
} from "@mui/material";
import { CHAIN_NAME } from "../../config";
import { Link } from "@tanstack/react-router";

const NavLink = styled(Link)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "16px",
  fontWeight: 500,
  padding: "8px 16px",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

const ExternalLink = styled(MuiLink)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "16px",
  fontWeight: 500,
  padding: "8px 16px",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    textDecoration: "none",
  },
}));

export function Header({}: {}) {
  const { status, connect, openView } = useChain(CHAIN_NAME);

  const ConnectButton = {
    [WalletStatus.Connected]: <ButtonConnected onClick={openView} />,
    [WalletStatus.Connecting]: <ButtonConnecting onClick={() => undefined} />,
    [WalletStatus.Disconnected]: <ButtonDisconnected onClick={connect} />,
    [WalletStatus.Error]: <ButtonError onClick={openView} />,
    [WalletStatus.Rejected]: <ButtonRejected onClick={connect} />,
    [WalletStatus.NotExist]: <ButtonNotExist onClick={openView} />,
  }[status] || <ButtonConnect onClick={connect} />;

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#000", boxShadow: "none", py: "12px" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: "24px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/architectslogo.png`}
              alt="Architects Rites"
              height={70}
            />
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <NavLink to="/mint">MINT</NavLink>
          <ExternalLink
            href="https://rites.architectsnft.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            RITES
          </ExternalLink>
          <ExternalLink
            href="https://www.architectsnft.io/cult-minting"
            target="_blank"
            rel="noopener noreferrer"
          >
            ABOUT $CULT
          </ExternalLink>
          <ExternalLink
            href="https://www.architectsnft.io/faq"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAQ
          </ExternalLink>
          {ConnectButton}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
