import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import CreateUser from "../pages/CreateUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
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
