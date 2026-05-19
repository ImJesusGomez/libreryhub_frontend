import { useQuery } from "@tanstack/react-query";
import { getStatsAction } from "../actions/get-stats.action";

export const useGetStats = () => {
  return useQuery({
    queryKey: ["get-stats"],
    queryFn: getStatsAction,
    staleTime: 1000 * 60 * 5,
  });
};
