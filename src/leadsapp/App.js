import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AppStyles from './styles/global'

import { OffCanvas } from './navigation/offcanvas'
import Header from './containers/Header'
import UserActions from './containers/UserActions'
import Main from './containers/Main'

import PrivateRoute from './routes/PrivateRoute'

import Login from './components/Auth/Login'
import ForgotPassword from './components/Auth/ForgotPassword'
import useAuth from './components/Auth/useAuth'
import MyProfile from './components/Auth/MyProfile'

import CreateLead from './components/Leads/CreateLead'
import SearchLeads from './components/Leads/SearchLeads'
import LeadList from './components/Leads/LeadList'
import RoleBasedLeadList from './components/Leads/RoleBasedLeadList'
import LeadDetail from './components/Leads/LeadDetail'


import Settings from './components/Settings/Settings'



import firebase, { FirebaseContext } from '../firebase'

function App() {
  const user = useAuth()
	return (
		<Router>
		<FirebaseContext.Provider value={{ user, firebase }}>
		<section className="App">
			<AppStyles/>
      <OffCanvas/>
      <Header>
				<h1>Leadsapp</h1>
			</Header>
			<UserActions/>
			<Main>
				<Switch>
          <Route exact path="/leadsapp" render={() => <Redirect to="/leadsapp/new/1" />} />
          <Route path="/leadsapp/login" component={Login} />
          <Route path="/leadsapp/forgot" component={ForgotPassword} />
          <PrivateRoute path="/leadsapp/rolebasedleads" component={RoleBasedLeadList} /> 
          <PrivateRoute path="/leadsapp/myleads" component={LeadList} /> 
          <PrivateRoute path="/leadsapp/create" component={CreateLead} />
          <PrivateRoute path="/leadsapp/search" component={SearchLeads} />
          <PrivateRoute path="/leadsapp/top" component={LeadList} />
          <PrivateRoute path="/leadsapp/new/:page" component={LeadList} />
          <PrivateRoute path="/leadsapp/lead/:leadId" component={LeadDetail} />
          <PrivateRoute path="/leadsapp/settings" component={Settings} />
          <PrivateRoute path="/leadsapp/profile" component={MyProfile} /> 
				</Switch>
			</Main>
		</section>
		</FirebaseContext.Provider>
		</Router>
	)
}

export default App
