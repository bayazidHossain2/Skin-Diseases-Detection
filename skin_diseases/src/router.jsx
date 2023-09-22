import { Navigate, createBrowserRouter } from "react-router-dom";
import NotFound from "./views/notFoundPage";
import Login from "./views/auth/login";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Signup from "./views/auth/signup";
import UserPageLayout from "./components/UserPageLayout";
import Home from "./views/user/Home";
import About from "./views/user/About";
import Diseases from "./views/user/Diseases";
import Feedback from "./views/user/Feedback";


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
        path: '/',
        element: <UserPageLayout />,
        children: [
            {
                path: '/home',
                element: <Home />
            },

            {
                path: '/about',
                element: <About />
            },

            {
                path: '/diseases',
                element: <Diseases />
            },

            {
                path: '/feedback',
                element: <Feedback />
            }
        ]
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