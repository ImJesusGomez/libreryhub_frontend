import { useMutation } from "@tanstack/react-query";
import { signupAction } from "../actions/signup.action";
import { toast } from "sonner";

export const useSignup = () => {
  return useMutation({
    mutationFn: signupAction,

    onSuccess: () => {
      toast.success("Cuenta creada exitosamente.");

      setTimeout(() => {
        navigation.navigate("/auth/login");
      }, 500);
    },

    onError: () => {
      toast.error("Credenciales inválidas.");
    },
  });
};
