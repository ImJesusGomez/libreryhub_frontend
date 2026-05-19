import { useMutation } from "@tanstack/react-query";
import { loginAction } from "../actions/login.action";
import { toast } from "sonner";
import { useAuthContext } from "@/store/auth.store";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginAction,

    onSuccess: (data) => {
      toast.success("Inicio de sesión exitoso.");

      useAuthContext.getState().login({
        accessToken: data.accessToken,
        employee: data.employee,
      });

      navigate("/dashboard");
    },

    onError: () => {
      toast.error("Credenciales inválidas.");
    },
  });
};
