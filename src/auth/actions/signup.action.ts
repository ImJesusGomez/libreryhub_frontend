import libraryHubApi from "@/api/library.api";
import { type AuthResponse } from "../../interfaces/auth.response";

export interface SignupInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  roles: string[];
}

export const signupAction = async (input: SignupInput): Promise<AuthResponse> => {
  const { data } = await libraryHubApi.post("/auth/register", input);

  return data;
};
