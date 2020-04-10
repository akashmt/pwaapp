import React from 'react'
import { Link } from 'react-router-dom'
import useFormValidation from './useFormValidation'
import validateLogin from './validateLogin'
import firebase from '../../../firebase'

const INITIAL_STATE = {
	name: '',
	email: '',
	password: ''
}

function Login(props) {
	const { handleChange, handleBlur, handleSubmit, values, errors, isSubmitting } = useFormValidation(
		INITIAL_STATE,
		validateLogin,
		authenticateUser
	)
	const [login, setLogin] = React.useState(true)
	const [firebaseError, setFirebaseError] = React.useState(null)

	async function authenticateUser() {
		const { name, email, password } = values
		try {
			login
				? await firebase.login(email, password)
				: await firebase.register(name, email, password)
			props.history.push("/linksapp")
		} catch (err) {
			console.error('Authentication Error', err)
			setFirebaseError(err.message)
		}
	}

	return (
		<div>
			<h2 className="mv3">{login ? "Login" : "Create Account"}</h2>
			<form className="flex flex-column" onSubmit={handleSubmit}>

				{ 
					!login &&
					<input type="text" placeholder="Your name" 
								 name="name" value={values.name}
								 autoComplete="off" 
								 onChange={handleChange} />
				}

				<input className={errors.email && 'error-input'}
							 type="email" placeholder="Your email" 
							 name="email" value={values.email}
							 autoComplete="off"
							 onChange={handleChange} onBlur={handleBlur} />
				{errors.email && <p className="error-text">{errors.email}</p>}

				<input className={errors.password && 'error-input'}
							 type="password" placeholder="Choose a secure password" 
							 name="password" value={values.password}
							 onChange={handleChange} onBlur={handleBlur} />
				{errors.password && <p className="error-text">{errors.password}</p>}
				{firebaseError && <p className="error-text">{firebaseError}</p>}

				<div className="flex mt3">
					<button className="button pointer mr2" type="submit"
									disabled={isSubmitting} 
									style={{ background: isSubmitting ? "grey" : "orange" }} >
						Submit
					</button>
					<button className="button pointer" type="button" 
									onClick={() => setLogin(prevLogin => !prevLogin)}>
						{ login ? "need to create an account?" : "already have an account?" }
					</button>
				</div>
			</form>
			<div className="forgot-password">
				<Link to="/forgot">Forgot Password?</Link>
			</div>
		</div>
	)
}

export default Login