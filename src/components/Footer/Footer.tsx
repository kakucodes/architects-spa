import React from "react";
import { Box, Container, Link, Stack, styled } from "@mui/material";
import { Link as RouterLink } from "@tanstack/react-router";

const FooterContainer = styled(Box)({
  backgroundColor: "#16191F80",
  padding: "64px 0",
  color: "#ffffff",
});

const InternalLink = styled(RouterLink)({
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "16px",
  "&:hover": {
    color: "#777777",
  },
});

const FooterLink = styled(Link)({
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "16px",
  "&:hover": {
    color: "#777777",
  },
});

const SocialIcon = styled(Link)({
  color: "#ffffff",
  "&:hover": {
    color: "#777777",
  },
});

export const Footer = () => {
  return (
    <FooterContainer sx={{ width: "100%" }}>
      <Container>
        <Stack spacing={6} alignItems="center">
          {/* Logo */}
          <Box>
            <img
              src={`${process.env.PUBLIC_URL}/architects-icon-white.png`}
              alt="The Architects Logo"
              width={48}
              height={48}
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* Navigation Links */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 8,
              width: "100%",
              maxWidth: "800px",
            }}
          >
            {/* Column 1 */}
            <Stack spacing={2}>
              <FooterLink href="https://www.architectsnft.io/">Home</FooterLink>
              <FooterLink href="https://www.architectsnft.io/cult-minting">
                About $CULT
              </FooterLink>
              <FooterLink href="https://www.architectsnft.io/faq">
                FAQ
              </FooterLink>
            </Stack>

            {/* Column 2 */}
            <Stack spacing={2}>
              <FooterLink href="/streamswap">Streamswap</FooterLink>
              <InternalLink to="/bridge">Bridge</InternalLink>
              <InternalLink href="/mint">Mint</InternalLink>
            </Stack>

            {/* Column 3 */}
            <Stack spacing={2}>
              <FooterLink href="/trade">Trade on Ambur</FooterLink>
            </Stack>

            {/* Column 4 */}
            <Stack spacing={2}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  mt: 2,
                }}
              >
                <SocialIcon
                  href="https://discord.gg/A6qNnR9Mvr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </SocialIcon>
                <SocialIcon
                  href="https://x.com/Architects_nft"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </SocialIcon>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </FooterContainer>
  );
};
