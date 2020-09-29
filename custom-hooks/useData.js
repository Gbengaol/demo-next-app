const { fetcher } = require("../utils/fetcher");
import useSWR from "swr";

export default function useData(url) {
  const { data, error } = useSWR(url, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
