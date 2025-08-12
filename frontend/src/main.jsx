import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Course from "./components/Course.jsx";
import Error from "./components/Error.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Courses from "./courses/Courses.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/course",
    element: <Courses />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);

 createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter} />);
