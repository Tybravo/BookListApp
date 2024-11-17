import SignUp from "../auth/SignUp";
import Login from "../auth/Login";

const routes = [

    {
        path :"/signup",
        element:  <SignUp/>
    },
    
    {
        path :"/login",
        element:  <Login/>
    }
    ,

    {
        path :"/",
        element:  <SignUp/>
    }
]

export default routes;