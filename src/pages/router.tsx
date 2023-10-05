import { createBrowserRouter } from "react-router-dom";
import MainPage from "./main/MainPage";
import Layout from "../components/Layout";
import AboutHim from "./soyoun/AboutHim";

export const path = {
  root: "/",
  dongseon: "/dongseon",
  jeongoon: "/jeongoon",
  teahyeong: "/teahyeong",
  about: "/about",
  dahyeon: "/dahyeon",
  gangsan: "/gangsan",
  choonghyeon: "/choonghyeon",
  minseong: "/minseong",
};

export const router = createBrowserRouter([
  {
    path: path.root,
    element: <Layout />,
    children: [
      {
        path: path.root,
        element: <MainPage />,
      },
      {
        path: path.about,
        element: <AboutHim />,
      },
    ],
  },
]);
