import { useRoutes } from "react-router-dom";
import Homepage from "src/pages/Homepage";

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/sign-in",
      element: <div>Sign in</div>,
    },
    {
      path: "/settings",
      element: <div>Settings</div>,
    },
  ]);
  return routeElements;
}
