import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import app from '../base'
import { AuthContext } from '../Auth'

const Login = ({ history }) => {
	const handleLogin = useCallback(async event => {
		event.preventDefault()
		const { email, password } = event.target.elements
		try {
			await app
				.auth()
				.signInWithEmailAndPassword(email.value, password.value)
			history.push('/')
		} catch(error) {
			alert(error)
		}
	}, [history])

	const { currentUser } = useContext(AuthContext)

	if (currentUser) {
		return <Redirect to="/" />
	}

	return (
		<>
			<h2>Login</h2>
			<form onSubmit={handleLogin}>
				<label>
					Email
					<input type="email" name="email" placeholder="Email" />
				</label>
				<label>
					Password
					<input type="password" name="password" placeholder="Password" />
				</label>
				<button type="submit">Login</button>
			</form>
		</>
	)
}

export default withRouter(Login)