import { Home, Profile, SignIn, SignUp } from "@/pages";
import TestSeries from "./pages/testseries";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  // {
  //   name: "About",
  //   path: "/about",
  //   element: <About/>,
  // },
  {
    name: "Prelims and Mains",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Interview Preparation",
    path: "/sign-in",
    element: <Home/>,
  },
  {
    name: "Test Series",
    path: "/testseries",
    element: <TestSeries />,
  },
  {
    name: "Study Material",
    href: "/home",
    target: "_blank",
    element: "",
  },
];

export default routes;
