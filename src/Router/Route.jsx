import { createBrowserRouter } from "react-router-dom";
import Root from "../component/Root/Root";
import Home from "../component/Home/Home";
import Form from "../component/Form/Form";
import SignUp from "../component/SignUp/SignUp";

const Route = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`)
            },
            {
                path:'/form',
                element:<Form></Form>

            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    }
])


export default Route;