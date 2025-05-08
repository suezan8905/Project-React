import { useEffect, useState, useCallback } from "react";
import { useAuth } from "../store";
import handleError from "../utils/handleError";

export default function useFetch({ apiCall, params = [] }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { accessToken } = useAuth();

  const fetchData = useCallback(async () => {
    if (!accessToken) return;
    const controller = new AbortController();
    setLoading(true);
    try {
      const res = await apiCall(...params, {
        signal: controller.signal,
      });
      if (!controller.signal.aborted) {
        setData(res.data);
      }
    } catch (error) {
      if (!controller.signal.aborted && error.name !== "AbortError") {
        handleError(error);
        setError("Failed to load posts. please try again.");
      }
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
    return () => {
      controller?.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, apiCall, ...params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, setData };
}
