import { createBrowserRouter } from "react-router-dom";
import { Favorites } from "./pages/Favorites";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { ImageApp } from "./pages/ImageApp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <ImageApp />,
        index: true,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      }
    ],
  },
]);
