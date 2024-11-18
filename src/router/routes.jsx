import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import BookListPage from "../component/BookListPage";

const routes = [

    {
        path :"/signup",
        element:  <SignUp/>
    },
    
    {
        path :"/login",
        element:  <Login/>
    },

    {
        path :"/",
        element:  <SignUp/>
    },

    {
        path:"/booklist",
        element: <BookListPage/>
    }
]

export default routes;