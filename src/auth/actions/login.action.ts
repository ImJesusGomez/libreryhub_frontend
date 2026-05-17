import libraryHubApi from "@/api/library.api";
import type { AuthResponse } from "@/interfaces/auth.response";

export interface LoginInput {
  email: string;
  password: string;
}

export const loginAction = async (input: LoginInput): Promise<AuthResponse> => {
  const { data } = await libraryHubApi.post(`/auth/login`, input);

  return data;
};
