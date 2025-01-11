import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { STARGAZE_ENDPOINT } from "../../config";
import {
  NftFragment,
  UserNftsQueryDocument,
  UserNftsQueryQuery,
} from "../../gql/graphql";

export type NftInfo = NonNullable<
  UserNftsQueryQuery["tokens"]
>["tokens"][number] &
  NftFragment;

export const queryNfts = (address: string) =>
  request(STARGAZE_ENDPOINT, UserNftsQueryDocument, {
    tokensOwnerAddrOrName: address,
    filterByCollectionAddrs: [],
  }).then(({ tokens }) =>
    // @ts-ignore
    tokens?.tokens.sort((a, b) => (b?.rarityScore || 0) - (a?.rarityScore || 0))
  );

export const useQueryNfts = () => {
  // const { data: account } = useAccount();
  const address = "";

  return useQuery({
    queryKey: ["user-nfts", address],
    queryFn: () => (address ? queryNfts(address) : undefined),
    enabled: !!address,
  });
};
