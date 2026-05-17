import { useMutation } from "@tanstack/react-query";
import { loginAction } from "../actions/login.action";
import { toast } from "sonner";
import { useAuthContext } from "@/store/auth.store";

export const useLogin = () => {
  return useMutation({
    mutationFn: loginAction,

    onSuccess: (data) => {
      toast.success("Inicio de sesión exitoso.");

      useAuthContext.getState().login({
        accessToken: data.accessToken,
        employee: data.employee,
      });
    },

    onError: () => {
      toast.error("Credenciales inválidas.");
    },
  });
};
