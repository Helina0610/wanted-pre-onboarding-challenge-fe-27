import React from 'react'
import { Form } from 'react-router-dom'

const Login = () => {


	const onChangeEmial = (e) => {
		const value = e.target.value;
		console.log(value)
	}

	return (
		<div>
			<Form action='/users/login' method='post'>
				<h1>안녕하세요</h1>
				<div>
					이메일 : <input type="email" name="email" id="email" onChange={(e) => onChangeEmial(e)} />
				</div>
				<div>
					비밀번호 : <input type="password" name="password" id="password" />
				</div>
				<button type="submit">로그인</button>
			</Form>
		</div>
	)
}

export default Login
