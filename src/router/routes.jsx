import SignUp from "../auth/signup";
import Login from "../auth/login";

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