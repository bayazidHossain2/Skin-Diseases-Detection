import { Navigate, createBrowserRouter } from "react-router-dom";
import NotFound from "./views/notFoundPage";
import Login from "./views/auth/login";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Signup from "./views/auth/signup";
import UserPageLayout from "./components/UserPageLayout";


const router = createBrowserRouter([

    // {
    //     path: '/',
    //     element: <DefaultLayout />
        

    // },
    {
        path: '/',
        element: <DefaultLayout/>
    },

    {
        path: '/home',
        element: <UserPageLayout />,
        
    },


    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },

            {
                path: '/signup',
                element: <Signup />
            },
        ]

    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;