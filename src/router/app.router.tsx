import { AuthLayout } from "@/auth/layout/AuthLayout";
import { LoginPage } from "@/auth/pages/LoginPage";
import { SignupPage } from "@/auth/pages/SignupPage";
import DashboardLayout from "@/dashboard/layout/DashboardLayout";
import { BooksPage } from "@/dashboard/pages/BooksPage";
import { CustomersPage } from "@/dashboard/pages/CustomersPage";
import DashboardPage from "@/dashboard/pages/DashboardPage";
import { LoansPage } from "@/dashboard/pages/LoansPage";
import { createBrowserRouter, Navigate } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/login"} />,
  },
  {
    path: "/",
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
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "books",
        element: <BooksPage />,
      },
      {
        path: "customers",
        element: <CustomersPage />,
      },
      {
        path: "loans",
        element: <LoansPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/login"} />,
  },
]);
