import type { AuthResponse } from "@/interfaces/auth.response";
import { create } from "zustand";

interface AuthState {
  auth: AuthResponse | null;

  login: (data: AuthResponse) => void;
  logout: () => void;
}

export const useAuthContext = create<AuthState>((set) => ({
  auth: JSON.parse(localStorage.getItem("auth") || "null"),

  login: (data: AuthResponse) => {
    localStorage.setItem("auth", JSON.stringify(data));

    set({
      auth: data,
    });
  },

  logout: () => {
    localStorage.removeItem("auth");

    set({
      auth: null,
    });
  },
}));
