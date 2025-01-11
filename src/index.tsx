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
            typography: {
              h1: {
                fontFamily: "acumin-pro, sans-serif",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "42px",
              },
              h2: {
                fontFamily: "acumin-pro, sans-serif",
                textTransform: "uppercase",
                fontWeight: "bold",
              },
              h3: {
                fontFamily: "roc-grotesk, sans-serif",
                textTransform: "uppercase",
                fontWeight: 700,
                fontSize: "32px",
              },
              h4: {
                fontFamily: "acumin-pro, sans-serif",
                textTransform: "uppercase",
              },
              h5: {
                fontFamily: "roc-grotesk-condensed, sans-serif",
                textTransform: "uppercase",
                fontWeight: 400,
                fontSize: "18px",
              },
              h6: {
                fontFamily: "acumin-pro, sans-serif",
                textTransform: "uppercase",
                fontSize: "14px",
                fontWeight: 500,
                color: "#777777",
              },
              subtitle1: {
                fontFamily: "roc-grotesk-condensed, sans-serif",
                textTransform: "uppercase",
                color: "#F4B305",
                fontSize: "32px",
                fontWeight: "bold",
              },
              subtitle2: {
                fontFamily: "roc-grotesk-wide, sans-serif",
                textTransform: "uppercase",
                color: "#F4B305",
                fontSize: "18px",
                fontWeight: 300,
              },
              button: {
                fontFamily: "acumin-pro, sans-serif",
                textTransform: "uppercase",
              },
              body1: {
                fontFamily: "acumin-pro, sans-serif",
                textTransform: "uppercase",
              },
              body2: {
                fontFamily: "acumin-pro, sans-serif",
              },
              caption: {
                fontFamily: "acumin-pro, sans-serif",
                textTransform: "uppercase",
                fontWeight: "500",
                fontSize: "14px",
                color: "#F4B305",
              },
            },
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
