import { chains } from "chain-registry";
import { Asset, Chain } from "@chain-registry/types";

export function getLogo(from: Asset | Chain) {
  return (
    from.logo_URIs?.svg ||
    from.logo_URIs?.png ||
    // @ts-ignore
    from.logo_URIs?.jpeg
  );
}

export function getChainLogo(name: string) {
  const chain = chains.find((chain) => chain.chain_name === name);
  return chain
    ? // @ts-ignore
      getLogo(chain)
    : null;
}

export const ipfsToHttps = (ipfsUrl: string): string =>
  `https://ipfs.io/ipfs/${ipfsUrl.replace("ipfs://", "")}`;
