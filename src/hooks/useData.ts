import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre{
    id: number;
    name: string;
}

interface FetchResponse <T>{ //gtp to interface
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => { //generic type parameter(gtp)
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
        .then((res) => {
        setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    [], //array of dependencies avoids constantly sending requests to backend
  );

  return { data, error, isLoading };
};

export default useData;
