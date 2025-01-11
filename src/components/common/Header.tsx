"use client";
import { WalletStatus } from "cosmos-kit";
import { Wallet } from "../wallet";
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
// import { CHAIN_NAME, cultContract } from "@/config/defaults";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import { CHAIN_NAME } from "../../config";
import { Link } from "@tanstack/react-router";

export function Header({ title }: { title: string }) {
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
    <Grid2 container spacing={0}>
      {/* header */}
      <Grid2
        container
        size={12}
        sx={{
          px: 3,
          pt: 2,
          pb: 1,
          background: "center /cover no-repeat url(/starsdarkened.jpg)",
          backgroundColor: "rgba(0,0,0,.8)",
          direction: "row",
          display: "flex",
        }}
      >
        <Grid2 size={{ lg: 0, xl: 1 }} />
        <Grid2 size={{ xs: 6, lg: 6, xl: 5 }}>
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/architectsrites.png`}
              alt="Architects Rites"
              height={70}
              width={115.82}
            />
          </Link>
        </Grid2>
        <Grid2
          size={{ xs: 6, lg: 6, xl: 5 }}
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          {ConnectButton}
        </Grid2>

        <Grid2 size={{ lg: 0, xl: 1 }} />
      </Grid2>

      {/* <Grid2 size={12}>
        <Stack spacing={0}>
          <Box
            sx={{
              height: 30,
              background: "url(/bricks.jpg)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 5,
              alignItems: "center",
            }}
          >
            <Link href="/holdings">
              <Typography>HOLDINGS</Typography>
            </Link>
            <Link href="/rites">
              <Typography>PERFORM RITES</Typography>
            </Link>
            <Link href="#">
              <Typography sx={{ color: "#AAA" }}>LEADERBOARD</Typography>
            </Link>
          </Box>
          <Box
            sx={{
              height: 87,
              background: "url(/headertile.jpg)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 5,
              alignItems: "center",
            }}
          >
            <Typography variant="h1">{title}</Typography>
          </Box>
          <Box sx={{ height: 30, background: "url(/bricks.jpg)" }}>&nbsp;</Box>
        </Stack>
      </Grid2> */}
      {/* <Box justifyContent="end" mb="$8">
        <Button
          intent="secondary"
          size="sm"
          attributes={{
            paddingX: 0,
          }}
          onClick={toggleColorMode}
        >
          <Icon name={useColorModeValue("moonLine", "sunLine")} />
        </Button>
      </Box> */}
    </Grid2>
  );
}
