import { Form } from "react-router-dom"

const Login = () => {

	return (
		<div className="login-container">
		<Form className="login-form">
			<h2>로그인</h2>
			<div className="input-group">
				<label htmlFor="username">아이디</label>
				<input type="text" id="username" name="username" required />
			</div>
			<div className="input-group">
				<label htmlFor="password">비밀번호</label>
				<input type="password" id="password" name="password" required />
			</div>
			<button type="submit">로그인</button>
			<p className="register-text">
				계정이 없으신가요? <a href="#">회원가입</a>
			</p>
		</Form>
	</div>
	)
}

export default Login
