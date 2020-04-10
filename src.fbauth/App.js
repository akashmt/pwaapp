import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { AuthProvider } from './Auth'
import PrivateRoute from './PrivateRoute'

const App = () => {
	return (
		<AuthProvider>
		<Router>
		<div className="App">
			<header className="App-header">
				<h1>React</h1>
			</header>
			<main>
				<Switch>
					<PrivateRoute exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
				</Switch>
			</main>
		</div>
		</Router>
		</AuthProvider>
	)
}

export default App
