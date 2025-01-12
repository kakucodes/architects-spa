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
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Drawer,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { CHAIN_NAME } from "../../config";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

const NavLink = styled(Link)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "18px",
  lineHeight: "16.2px",

  fontWeight: 700,
  padding: "8px 16px",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

const ExternalLink = styled(MuiLink)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "18px",
  lineHeight: "16.2px",

  fontWeight: 700,
  padding: "8px 16px",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    textDecoration: "none",
  },
}));

export function Header({}: {}) {
  const { status, connect, openView } = useChain(CHAIN_NAME);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const ConnectButton = {
    [WalletStatus.Connected]: <ButtonConnected onClick={openView} />,
    [WalletStatus.Connecting]: <ButtonConnecting onClick={() => undefined} />,
    [WalletStatus.Disconnected]: <ButtonDisconnected onClick={connect} />,
    [WalletStatus.Error]: <ButtonError onClick={openView} />,
    [WalletStatus.Rejected]: <ButtonRejected onClick={connect} />,
    [WalletStatus.NotExist]: <ButtonNotExist onClick={openView} />,
  }[status] || <ButtonConnect onClick={connect} />;

  const menuItems = [
    { text: "MINT", to: "/mint", isExternal: false },
    {
      text: "RITES",
      href: "https://rites.architectsnft.io/",
      isExternal: true,
    },
    {
      text: "$CULT",
      href: "https://www.architectsnft.io/cult-minting",
      isExternal: true,
    },
    { text: "FAQ", href: "https://www.architectsnft.io/faq", isExternal: true },
  ];

  const renderMenuItems = () => (
    <>
      {menuItems.map((item) =>
        item.isExternal ? (
          <ExternalLink
            key={item.text}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.text}
          </ExternalLink>
        ) : (
          <NavLink key={item.text} to={item.to}>
            {item.text}
          </NavLink>
        )
      )}
    </>
  );

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        py: 4,
        px: 2,
      }}
    >
      <Stack spacing={2}>
        <img
          src={`${process.env.PUBLIC_URL}/architectslogo.png`}
          alt="Architects Rites"
          height={70}
        />
        {ConnectButton}
        <List>
          {menuItems.map((item) => (
            <ListItem sx={{ borderLeft: "3px solid gray" }} key={item.text}>
              <ListItemText>
                <Box>
                  {item.isExternal ? (
                    <ExternalLink
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.text}
                    </ExternalLink>
                  ) : (
                    <NavLink to={item.to}>{item.text}</NavLink>
                  )}
                </Box>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  );

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
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              size="large"
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              {renderMenuItems()}
              {ConnectButton}
            </>
          )}
        </Box>
      </Toolbar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            background: `center bottom 10px / 30% no-repeat url(${process.env.PUBLIC_URL}/architects-icon-white.png) #16191FDD`,
          },
        }}
        sx={{
          display: { xs: "block", md: "none" },

          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
