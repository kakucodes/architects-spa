import { useQueryCollections } from "./useQueryCollections/useQueryCollections";
import { usePrefetchOsmosisToken } from "./useQueryOsmosisToken";

export const usePrefetchQueries = () => {
  const { isFetched: areCollectionsFetched } = useQueryCollections();
  usePrefetchOsmosisToken("CULT");

  // return { isFetched: areStardexPairsFetched && areCollectionsFetched };
};
