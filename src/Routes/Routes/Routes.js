import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CodingLanguage from "../../Pages/CodingLanguages/CodingLanguages/CodingLanguage";
import Home from "../../Pages/Home/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5002/courses')
            },
            {
                path: '/course/:id',
                element: <CodingLanguage></CodingLanguage>,
                loader: ({ params }) => fetch(`http://localhost:5002/courses/${params.id}`)
            }
        ]
    }
])