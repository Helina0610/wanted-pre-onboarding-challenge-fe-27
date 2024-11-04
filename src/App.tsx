import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from './pages/login';
import ErrorPage from './errorPage';

const router = createBrowserRouter([
	{
		path : '/',
		element : <Home/>,
		errorElement : <ErrorPage/>,
	},
	{
		path : '/about',
		element : <About/>,
		errorElement : <ErrorPage/>,
	},
	{
		path : '/auth',
		element : <Login/>,
		errorElement : <ErrorPage/>,
	},
])


const App = () => {
	return (
		<>
			<RouterProvider router={router}/>	
		</>
	)
}

export default App
