import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import the components
import App from "./App";
import ErrorPage from "./pages/Error";
import About from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/Resume";

// set up router
const routerConfig = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Portfolio /> },
      { path: "/Portfolio", element: <Portfolio /> },
      { path: "/About", element: <About /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/Resume", element: <Resume /> },
    ],
  },
];

const router = createBrowserRouter(routerConfig);

// render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);