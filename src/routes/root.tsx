import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UseStatePage from "./use-state-page";
import UseContextPage from "./use-context-page";
import EstadoPage from "./helps/state";
import ContextPage from "./helps/context";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "use-state",
    element: <UseStatePage />,
  },
  {
    path: "use-context",
    element: <UseContextPage />,
  },
  {
    path: "state",
    element: <EstadoPage />,
  },
  {
    path: "context",
    element: <ContextPage />,
  },
]);
