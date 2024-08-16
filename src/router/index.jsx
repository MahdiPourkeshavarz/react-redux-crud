import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import CreateUser from "../pages/CreateUser";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/create",
        element: <CreateUser />,
      },
    ],
  },
]);

export function AppRout() {
  return <RouterProvider router={router} />;
}
