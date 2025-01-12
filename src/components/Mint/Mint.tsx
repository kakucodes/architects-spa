import {
  Box,
  Card,
  CardContent,
  Grid2,
  IconButton,
  LinearProgress,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { ArchButton } from "../ArchButton";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { MaxableInput } from "../MaxableInput/MaxableInput";

const StyledCard = styled(Card)(({ theme }) => ({
  background: "#16191F80",
  borderRadius: 16,
  maxWidth: 900,
  margin: "0 auto",
  padding: theme.spacing(2),
}));

const ProgressBar = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: "#262c35",
  "& .MuiLinearProgress-bar": {
    backgroundColor: "#f4b305",
  },
}));

const StatusBadge = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
  padding: "4px 12px",
  borderRadius: 16,
  backgroundColor: "#262c35",
  color: "#ffffff",
  "& .dot": {
    width: 8,
    height: 8,
    position: "relative",
    top: 2,

    borderRadius: "50%",
    backgroundColor: "#4aed4a",
  },
}));

export const Mint = () => {
  const [mintAmount, setMintAmount] = useState(1);
  const maxMint = 20;
  const progress = 74.06;
  const totalMinted = 4444;
  const totalSupply = 6000;
  const price = 150;
  const mintLive = false;

  const handleDecrease = () => {
    setMintAmount((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setMintAmount((prev) => Math.min(maxMint, prev + 1));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: { md: 12, sm: 2, xs: 2 },
        pb: { md: 16, sm: 8, xs: 8 },
        width: "100%",
      }}
    >
      <StyledCard
        sx={{
          mx: { md: 4, sm: 2, xs: 2 },
        }}
      >
        <CardContent>
          <Grid2 container spacing={4}>
            <Grid2 size={{ sm: 12, md: 6 }}>
              {/* Left side - NFT Preview */}
              <Stack sx={{ flex: 1 }} spacing={2}>
                <img
                  src={`${process.env.PUBLIC_URL}/architects-preview.gif`}
                  alt="Architect NFT Preview"
                  style={{
                    objectFit: "cover",
                    borderRadius: 8,
                    userSelect: "none",
                  }}
                />

                <Stack spacing={2}>
                  <ProgressBar variant="determinate" value={progress} />
                  <Typography variant="subtitle2" textAlign="center">
                    {(100 * (totalMinted / totalSupply)).toFixed(2)}% Minted!
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 1,
                    alignItems: "center",
                  }}
                >
                  <StatusBadge>
                    <span style={{ marginRight: 2 }}>
                      <Typography variant="caption">Public</Typography>
                    </span>
                    <span
                      className="dot"
                      style={{ backgroundColor: mintLive ? "#4aed4a" : "gray" }}
                    />
                    <span>
                      <Typography
                        color={mintLive ? "#4AED4A" : "gray"}
                        variant="caption"
                      >
                        {mintLive ? "Live" : "Coming Soon"}
                      </Typography>
                    </span>
                  </StatusBadge>
                  <Typography color="#ffffff" variant="caption">
                    {totalMinted} / {totalSupply} Minted
                  </Typography>
                </Box>
              </Stack>
            </Grid2>

            {/* Right side - Mint Controls */}
            <Grid2
              size={{ sm: 12, md: 6 }}
              sx={{
                px: { md: 6, sm: 0, xs: 0 },
                pt: { md: 6, sm: 1, xs: 1 },
                pb: { md: 2, sm: 0, xs: 0 },
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Box
                  sx={{
                    display: { sm: "none", xs: "none", md: "flex" },
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/architectslogo.png`}
                    alt="The Architects Logo"
                    width={273}
                    style={{
                      marginBottom: 24,
                    }}
                  />
                </Box>

                <Grid2
                  container
                  spacing={2}
                  rowSpacing={{ md: 3, sm: 4, xs: 4 }}
                >
                  <Grid2 size={6}>
                    <Stack spacing={1}>
                      <Typography color="white">Streamswap</Typography>
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          flexDirection: "row",
                          gap: 1,
                        }}
                      >
                        <img
                          width={34}
                          height={34}
                          src={`${process.env.PUBLIC_URL}/osmosis-logo.png`}
                          style={{ borderRadius: "50%" }}
                        />
                        <Typography fontWeight="bold" color="white">
                          OSMOSIS
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid2>

                  <Grid2 size={6}>
                    <Stack spacing={1}>
                      <Typography color="white">Minting on</Typography>
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          flexDirection: "row",
                          gap: 1,
                        }}
                      >
                        <img
                          width={34}
                          height={34}
                          src={`${process.env.PUBLIC_URL}/ambur-logo.jpg`}
                          style={{ borderRadius: "50%" }}
                        />
                        <Typography fontWeight="bold" color="white">
                          AMBUR
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid2>

                  <Grid2 size={6}>
                    <Stack spacing={1}>
                      <Typography color="white">Sale Price</Typography>
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          flexDirection: "row",
                          gap: 1,
                        }}
                      >
                        <img
                          width={34}
                          height={34}
                          src={`${process.env.PUBLIC_URL}/cultIcon.png`}
                          style={{ borderRadius: "50%" }}
                        />
                        <Typography fontWeight="bold" color="white">
                          150 $CULT
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid2>

                  <Grid2 size={6}>
                    <Stack spacing={1}>
                      <Typography color="white">
                        # to Mint (0/{maxMint})
                      </Typography>
                      <MaxableInput
                        max={maxMint}
                        value={mintAmount}
                        onChange={setMintAmount}
                      />
                    </Stack>
                  </Grid2>

                  <Grid2 size={12}>
                    <Stack spacing={2}>
                      <ArchButton
                        text="MINT ARCHITECT"
                        disabled
                        onClick={console.log}
                      />

                      <a
                        href="#"
                        style={{
                          color: "#f4b305",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          alignSelf: "center",
                        }}
                      >
                        <Typography variant="subtitle2">
                          Get $CULT on Osmosis{" "}
                          <span style={{ fontSize: 14 }}>↗</span>
                        </Typography>
                      </a>
                    </Stack>
                  </Grid2>
                </Grid2>
              </Box>
            </Grid2>
          </Grid2>
        </CardContent>
      </StyledCard>
    </Box>
  );
};
