import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div>
			<h1>Hello</h1>
			{/*<Link to={'/about'}>About</Link>*/}
			<Link to={'/auth'}>Login</Link>
		</div>
	)
}

export default Home
