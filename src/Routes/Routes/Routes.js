import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CodingLanguage from "../../Pages/CodingLanguages/CodingLanguages/CodingLanguage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/LogIn/Login/Login";
import Register from "../../Pages/LogIn/Register/Register";

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
                element: <CodingLanguage></CodingLanguage>,
                loader: ({ params }) => fetch(`https://education-server-three.vercel.app/courses/${params.id}`)
            },
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])