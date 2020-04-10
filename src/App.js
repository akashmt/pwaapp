import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LeadsApp from './leadsapp/App'
import LinksApp from './linksapp/App'
import LayoutApp from './layoutapp/App'
import HomePage from './HomePage'

function App() {
	return (
		<Router>
		<div className="App">
			<Switch>
				<Route exact path="/" render={HomePage} />
				<Route path="/leadsapp" component={LeadsApp} />
				<Route path="/linksapp" component={LinksApp} />
				<Route path="/layoutapp" component={LayoutApp} />
			</Switch>
		</div>
		</Router>
	)
}

export default App
