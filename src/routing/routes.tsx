import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/TravelDocs";

import Layout from "../Layout";
import Drivers from "../pages/Drivers";
import RoutesPage from "../pages/RoutesPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "drivers", element: <Drivers /> },
            { path: "routes", element: <RoutesPage /> }
        ],
    }
]);

export default router;
