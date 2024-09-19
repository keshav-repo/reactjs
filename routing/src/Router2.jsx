import Root from "./component/Root";
import ErrorPage from "./component/ErrorPage";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";

const Router2 = createBrowserRouter([
  {
    path: "/root",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

export default Router2;
