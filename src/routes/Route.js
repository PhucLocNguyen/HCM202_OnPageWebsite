import { Fragment, lazy } from "react";
const DefaultLayout = lazy(() => import("../components/layouts/DefaultLayout"));
const Home = lazy(() => import("../pages/Home/Home"));
const publicRoutes = [
  {
    index: true,
    component: Home,
    layout: DefaultLayout,
  },
];

const privateRoutes = [
 
];
export { publicRoutes, privateRoutes };
