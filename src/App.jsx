import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./components/Template";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
