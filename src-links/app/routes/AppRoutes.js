import React from 'react'
import { Switch, Route } from "react-router-dom"
import Home from '../../applications/pagesapp/Home'
import PWAapp from '../../applications/pwaapp/PWAapp'

function AppRoutes() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/pwa/" component={PWAapp} />
		</Switch>
	)
}

export default AppRoutes
