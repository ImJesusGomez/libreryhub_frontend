import libraryHubApi from "@/api/library.api";

export interface GetStatsResponse {
  books: number;
  customers: number;
  loans: number;
  loansOverdue: number;
}

export const getStatsAction = async (): Promise<GetStatsResponse> => {
  const { data } = await libraryHubApi.get("/stats");

  return data;
};
