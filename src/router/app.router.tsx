import { AuthLayout } from "@/auth/layout/AuthLayout";
import { LoginPage } from "@/auth/pages/LoginPage";
import { SignupPage } from "@/auth/pages/SignupPage";
import { createBrowserRouter, Navigate } from "react-router";

export const router = createBrowserRouter([
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/auth/login"} />,
  },
]);
