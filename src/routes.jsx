import { createBrowserRouter } from "react-router"
import MainLayout from "./layouts/MainLayout"
import Home from "./page/Home"
import NotFound from "./page/NotFound"
export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: "/",
                Component: Home
            }
        ]
    },
    {
        path: '*',
        Component: NotFound
    }
])
