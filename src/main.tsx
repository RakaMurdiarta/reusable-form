import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./pages/Form.tsx";
import Container from "./components/Container.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/form",
    element: <Form/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="dark:bg-[#252525] bg-gray-200 min-h-screen min-w-screen">
      <Container>
        <RouterProvider router={router} />
      </Container>
    </div>
  </React.StrictMode>
);
