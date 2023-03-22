// API calls for client to use
// Uses SWR package and axios to simplify API calls
// eg: useSWR(<axiosConfigObject>, fetcher), where <axiosConfigObject> defines method, url, params, etc

import useSWR from "swr";
import axios from "axios";

const fetcher = (config) => axios.request(config);

// Ping '/health'
function useHealth() {
  const { data, error, isLoading } = useSWR(
    { url: "/api/health", method: "GET" },
    fetcher
  );
  return {
    response: data,
    error,
    isLoading,
  };
}

export { useHealth };
