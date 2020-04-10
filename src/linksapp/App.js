import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AppStyles from './styles/global'
// import './styles/index.css'

import Login from './components/Auth/Login'
import useAuth from './components/Auth/useAuth'
import firebase, { FirebaseContext } from '../firebase'

import ForgotPassword from './components/Auth/ForgotPassword'
import CreateLink from './components/Link/CreateLink'
import SearchLinks from './components/Link/SearchLinks'
import LinkList from './components/Link/LinkList'
import LinkDetail from './components/Link/LinkDetail'
import Header from './components/Header'

function App() {
	const user = useAuth()
	return (
		<Router>
		<FirebaseContext.Provider value={{ user, firebase }}>
		{/* <div className="App"> */}
			<div className="app-container">
				<AppStyles/>
				<Header/>
				<div className="route-container">
					<Switch>
						<Route exact path="/linksapp/" render={() => <Redirect to="/linksapp/new/1" />} />
						<Route path="/linksapp/create" component={CreateLink} />
						<Route path="/linksapp/login" component={Login} />
						<Route path="/linksapp/forgot" component={ForgotPassword} />
						<Route path="/linksapp/search" component={SearchLinks} />
						<Route path="/linksapp/top" component={LinkList} />
						<Route path="/linksapp/new/:page" component={LinkList} />
						<Route path="/linksapp/link/:linkId" component={LinkDetail} />
					</Switch>
				</div>
			</div>
		{/* </div> */}
		</FirebaseContext.Provider>
		</Router>
	)
}

export default App
