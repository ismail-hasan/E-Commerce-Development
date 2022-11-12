import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Page/LogInPage/Login";
import Register from "../Page/RegisterPage/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    },
    {
        path: '/home',
        element: <Main></Main>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/shop',
        element: <Main></Main>
    },
])