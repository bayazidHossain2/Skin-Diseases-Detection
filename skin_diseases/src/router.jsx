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
import Profile from "./views/user/Profile";
import AdminUsers from "./views/admin/AdminUsers";
import AdminFeedback from "./views/admin/AdminFeedback";
import Content from "./views/admin/Content";
import AdminDiseases from "./views/admin/AdminDiseases";
import AdminTokens from "./views/admin/AdminTokens";
import AdminDashbord from "./views/admin/AdminDashbord";


const router = createBrowserRouter([

    // {
    //     path: '/',
    //     element: <DefaultLayout />
        

    // },
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <AdminDashbord />
            },
            {
                path: '/admin-dashbord',
                element: <AdminDashbord />
            },
            {
                path: '/admin-alluser',
                element: <AdminUsers />
            },
            {
                path: '/admin-feedback',
                element: <AdminFeedback />
            },
            {
                path: '/admin-contents',
                element: <Content />
            },
            {
                path: '/admin-tokens',
                element: <AdminTokens />
            },
            {
                path: '/admin-diseases',
                element: <AdminDiseases />
            }
        ]
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
            },

            {
                path: '/profile',
                element: <Profile />
            },
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