import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppStyles from './styles/global'

// import StyledBg01 from './components/styledbg/StyledBg01'
import { OffCanvas } from './navigation/offcanvas'
import Header from './containers/Header'
import UserActions from './containers/UserActions'
import Main from './containers/Main'
import LeadList from './components/leads/LeadList'

function App() {
	return (
		<Router>
		<section className="App">
			<AppStyles/>
			<OffCanvas/>
			<Header>
				<h1>Leadsapp</h1>
			</Header>
			<UserActions/>
			<Main>
				<Switch>
					<Route exact path="/layout" component={LeadList} />
				</Switch>
				<LeadList/>
			</Main>

			{/* Modal */}
			{/* <StyledModal02/> */}
			{/* Top */}
			{/* <StyledNav17/> */}
			{/* Bottom */}
			{/* <StyledNav8/> */}
		</section>
		</Router>
	)
}

export default App