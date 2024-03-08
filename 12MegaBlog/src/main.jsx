import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import {Authentication, Login } from './components/index.js'


import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";

import Post from "./pages/Post";

import AllPosts from "./pages/AllPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <Authentication authentication={false}>
                    <Login />
                </Authentication>
            ),
        },
        {
            path: "/signup",
            element: (
                <Authentication authentication={false}>
                    <Signup />
                </Authentication>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <Authentication authentication>
                    {" "}
                    <AllPosts />
                </Authentication>
            ),
        },
        {
            path: "/add-post",
            element: (
                <Authentication authentication>
                    {" "}
                    <AddPost />
                </Authentication>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <Authentication authentication>
                    {" "}
                    <EditPost />
                </Authentication>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)