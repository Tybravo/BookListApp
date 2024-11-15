// import { React } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { React } from 'react'
import { usestate } from 'react'
import Login from './auth/login'
import SignUp from './auth/signup'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from './router/routes.jsx'

const router = createBrowserRouter([...routes]);


function App() {

  return(
    <>
    <RouterProvider router={router}/>
    </>
  )

}

export default App


