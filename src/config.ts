import { GasPrice } from "@cosmjs/stargate";
import { chains } from "chain-registry";

export const STARGAZE_ENDPOINT =
  "https://graphql.mainnet.stargaze-apis.com/graphql";

type Environment = "mainnet" | "testnet";
type ChainInfo = {
  chainName: string;
  chainDenom: string;
  gasPrice: GasPrice;
  nftContract: string;
  cultDenom: string;
  chainInfo: (typeof chains)[number];
};
type ContractAddress = string;

const chain: Record<Environment, ChainInfo> = {
  // mainnet: {
  //   chainName: "archway",
  //   chainDenom: "aarch",
  //   gasPrice: GasPrice.fromString("225400000000aarch"),
  //   nftContract:
  //     "archway12893kazrl6hhwas3u650dpck92ut6mv428wned36s0fy3auje7uqe0nvm5",
  //   cultDenom:
  //     "archway16kxu278xtwa9ql20yhgk9smk2k6ke74hsxeesf36c9dhxqc5zyksh8ykwu",
  //   chainInfo: chains.find(
  //     ({ chain_name: chainName }) => chainName === "archway"
  //   )!,
  // },
  // testnet: {
  //   chainName: "archwaytestnet",
  //   chainDenom: "aconst",
  //   gasPrice: GasPrice.fromString("1000000000000aconst"),
  //   nftContract: "",
  //   cultDenom: "",
  //   chainInfo: chains!.find(
  //     ({ chain_name: chainName }) => chainName === "archwaytestnet"
  //   )!,
  // },
  mainnet: {
    chainName: "stargaze",
    chainDenom: "stars",
    gasPrice: GasPrice.fromString("1ustars"),
    nftContract: "stars123",
    cultDenom: "ibc/123",
    chainInfo: chains.find(
      ({ chain_name: chainName }) => chainName === "stargaze"
    )!,
  },
  testnet: {
    chainName: "stargazetestnet",
    chainDenom: "ustars",
    gasPrice: GasPrice.fromString("1ustars"),
    nftContract: "",
    cultDenom: "",
    chainInfo: chains!.find(
      ({ chain_name: chainName }) => chainName === "stargazetestnet"
    )!,
  },
};

export const ENVIRONMENT: Environment = "mainnet";

export const {
  chainName: CHAIN_NAME,
  chainDenom: CHAIN_DENOM,
  gasPrice,
  nftContract,
  cultDenom,
  chainInfo,
} = chain[ENVIRONMENT];
