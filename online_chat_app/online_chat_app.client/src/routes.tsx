import { BasePage } from "./page";
import { HomePage } from "./page/home_page";

export const AppRoutes = Object.freeze({
  HomePage: {
    path: "/",
    element: (
      <BasePage>
        <HomePage />
      </BasePage>
    ),
  },
  RegisterPage: {
    path: "/register",
    element: (
      <BasePage>
        <div>RegisterPage</div>
      </BasePage>
    ),
  },
});
