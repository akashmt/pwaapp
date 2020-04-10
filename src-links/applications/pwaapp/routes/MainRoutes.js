import React from 'react'
import { Switch, Route } from "react-router-dom"
import Main from '../containers/Main'

function MainRoutes() {
	return (
		<Switch>
			<Route path="/pwa/" component={Main} />
		</Switch>
	)
}

export default MainRoutes