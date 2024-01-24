import { RouteObject, createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

const routes: RouteObject[] = [
  {
    path: AppRoutes.HomePage.path,
    element: AppRoutes.HomePage.element,
  },
  {
    path: AppRoutes.RegisterPage.path,
    element: AppRoutes.RegisterPage.element,
  },
];

export const router = createBrowserRouter(
  routes.map((route) => ({
    path: route.path,
    element: route.element,
  }))
);
