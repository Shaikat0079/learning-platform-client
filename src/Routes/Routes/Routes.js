import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import CodingLanguage from "../../Pages/CodingLanguages/CodingLanguages/CodingLanguage";
import Faq from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/LogIn/Login/Login";
import Register from "../../Pages/LogIn/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            // {
            //     path: '/',
            //     element: <Home></Home>,
            //     loader: () => fetch('https://education-server-three.vercel.app/courses')
            // },
            {
                path: '/',
                element: <Login></Login>
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('https://education-server-three.vercel.app/courses')
            },
            {
                path: '/course/:id',
                // element: <PrivateRoute><CodingLanguage></CodingLanguage></PrivateRoute>,
                element: <CodingLanguage></CodingLanguage>,
                loader: ({ params }) => fetch(`https://education-server-three.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])