import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { StargazeNameQueryDocument } from "../../gql/graphql";
import { STARGAZE_ENDPOINT } from "../../config";

export const useQueryStargazeName = () => {
  // const { data } = useAccount();
  const stargazeAddr = "";

  return useQuery({
    queryKey: ["stargaze-name", stargazeAddr],
    queryFn: () =>
      request(STARGAZE_ENDPOINT, StargazeNameQueryDocument, {
        ownerAddr: stargazeAddr,
      }).then(({ names }) => {
        const name = names?.names.find(
          ({ associatedAddr }) => associatedAddr === stargazeAddr
        )?.name;
        return name || null; // Return null if name is not found, to avoid console error.
      }),
    enabled: !!stargazeAddr,
  });
};
