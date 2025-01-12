import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@interchain-ui/react/styles";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
// import { SignerOptions } from "cosmos-kit";
import { ChainProvider } from "@cosmos-kit/react";
import { assets, chains } from "chain-registry";
import {
  Box,
  ThemeProvider,
  useColorModeValue,
  useTheme,
} from "@interchain-ui/react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { wallets } from "@cosmos-kit/keplr";
import { TypographyOptions } from "@mui/material/styles/createTypography";

// const keplrExtension = new KeplrExtensionWallet();
// const KeplrMobile = new KeplrMobileWallet();

// export const wallets = [keplrExtension, KeplrMobile];

export type RouterContext = {
  headerTitle: string;
  meta: {
    title: string;
    description: string;
    image: string;
  };
};

// Create a new router instance
const router = createRouter({
  routeTree,
  basepath: "/architects-spa",
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const typography: TypographyOptions = {
  // fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontFamily: '"acumin-pro", sans-serif',
    fontSize: "2.5rem",
    fontWeight: 700,
    letterSpacing: "0.02em",
    color: "#FFB800", // The gold/orange brand color
    textTransform: "uppercase",
  },
  h2: {
    fontFamily: '"acumin-pro", sans-serif',
    fontSize: "32px",
    lineHeight: "32px",
    fontWeight: 400,
  },
  h3: {
    fontFamily: '"acumin-pro", sans-serif',
    fontSize: "1.5rem",
    fontWeight: 600,
    letterSpacing: "0.01em",
  },
  h4: {
    fontFamily: '"acumin-pro", sans-serif',
    fontSize: "18px",
    lineHeight: "16.2px",
    color: "#FFF",
    fontWeight: 700,
  },
  subtitle1: {
    fontFamily: '"acumin-pro", sans-serif',
    fontSize: "14px",
    lineHeight: "11.2px",
    fontWeight: 500,
    color: "#F4B305",
  },
  subtitle2: {
    fontFamily: '"acumin-pro", sans-serif',
    fontSize: "14px",
    lineHeight: "11.2px",
    color: "#F4B305",
    fontWeight: 500,
  },
  body1: {
    fontFamily: '"acumin-pro", sans-serif',
    fontSize: "14px",
    lineHeight: "14px",
    color: "#FFF",
    fontWeight: 400,
  },
  body2: {
    fontFamily: '"acumin-pro", sans-serif',
    fontSize: "0.875rem",
    fontWeight: 400,
  },
  button: {
    fontFamily: '"acumin-pro", sans-serif',
    fontSize: "18px",
    lineHeight: "18px",
    fontWeight: 900,
    // letterSpacing: "0.05em",
    textTransform: "uppercase",
  },
  caption: {
    fontFamily: '"acumin-pro", sans-serif',
    fontSize: "14px",
    lineHeight: "14px",
    fontWeight: 400,
  },
  overline: {
    fontFamily: '"acumin-pro", sans-serif',
    fontSize: "0.75rem",
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
};

root.render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider>
        <MuiThemeProvider
          theme={createTheme({
            colorSchemes: {},
            components: {
              MuiTextField: {
                styleOverrides: {
                  root: {
                    borderColor: "rgba(255,255,255,.25)",
                    borderRadius: "10px",
                    color: "white",
                  },
                },
              },
            },
            typography,
          })}
        >
          <ChainProvider
            // @ts-ignore
            chains={chains}
            assetLists={assets}
            wallets={wallets}
            walletConnectOptions={{
              signClient: {
                projectId: "a8510432ebb71e6948cfd6cde54b70f7",
                relayUrl: "wss://relay.walletconnect.org",
                metadata: {
                  name: "Architects",
                  description: "",
                  url: "",
                  icons: [],
                },
              },
            }}
            // @ts-ignore
            // signerOptions={signerOptions}
          >
            <RouterProvider router={router} />
          </ChainProvider>
        </MuiThemeProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
