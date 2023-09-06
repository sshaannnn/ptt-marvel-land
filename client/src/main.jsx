import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import LoginPage from "./LoginPage.jsx";
import ArticlesListPage from "./ArticlesListPage.jsx";
import ArticleDetailPage from "./ArticleDetailPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/articles",
    element: <ArticlesListPage />,
    children: [
      {
        path: "/articles/:articleId",
        element: <ArticleDetailPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  // {
  //   path: "*",
  //   element: <Navigate to="/" />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
