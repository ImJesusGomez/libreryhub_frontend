import { RouterProvider } from "react-router";
import { router } from "./router/app.router";

export const LibraryHubApp = () => {
  return <RouterProvider router={router} />;
};
