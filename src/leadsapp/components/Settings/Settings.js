import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import FirebaseContext from "../../../firebase/context"

import SuperAdmin from './SuperAdmin'
import Admin from './Admin'
import SalesManager from './SalesManager'
import AccountManager from './AccountManager'
import AssociateManager from './AssociateManager'
import Associate from './Associate'
import Contact from './Contact'
import UserDetails from './UserDetails'


export default function Settings(props) {

  const { user,firebase } = React.useContext(FirebaseContext)
  
  const [ userRole, setUserRole ] = React.useState({})

  const userRef = firebase.db.collection('users').doc(user.uid)

  
  React.useEffect(() => {
    getUserRole()
  }, [])

  function getUserRole() {
    userRef.get().then(doc => {
      if (doc.data().roleId) {
        doc.data().roleId.get().then(doc => {
          setUserRole({ ...doc.data(), id: doc.id })
        })
      }
    })
  }

  const renderAccessLinks = (param) => {
    switch(param) {
      case 'Super Admin':
        return <>
        <li><Link to="/leadsapp/settings/super-admin">Super Admin Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/admin">Admin Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/sales-manager">Sales Manager Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/account-manager">Account Manager Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/associate-manager">Associate Manager Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/associate">Associate Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/contact">Contact Dashboard</Link></li></>
      case 'Admin':
        return <>
        <li><Link to="/leadsapp/settings/admin">Admin Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/sales-manager">Sales Manager Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/account-manager">Account Manager Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/associate-manager">Associate Manager Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/associate">Associate Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/contact">Contact Dashboard</Link></li></>
      case 'Sales Manager':
        return <>
        <li><Link to="/leadsapp/settings/sales-manager">Sales Manager Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/account-manager">Account Manager Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/associate-manager">Associate Manager Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/associate">Associate Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/contact">Contact Dashboard</Link></li></>
      case 'Account Manager':
        return <>
        <li><Link to="/leadsapp/settings/account-manager">Account Manager Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/associate-manager">Associate Manager Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/associate">Associate Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/contact">Contact Dashboard</Link></li></>
      case 'Associate Manager':
        return <>
        <li><Link to="/leadsapp/settings/associate-manager">Associate Manager Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/associate">Associate Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/contact">Contact Dashboard</Link></li></>
      case 'Associate':
        return <>
        <li><Link to="/leadsapp/settings/associate">Associate Dashboard</Link></li>
        <li><Link to="/leadsapp/settings/contact">Contact Dashboard</Link></li></>
      default:
        return <li><Link to="/leadsapp/settings/contact">Contact Dashboard</Link></li>
    }
  }


  return (
		<StyledSection>
      <h2>Settings</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in leo ac neque fermentum ornare a ut arcu. Nulla at libero justo. Morbi mattis mauris tempor tellus porttitor</p>
      <ul>
        {renderAccessLinks(userRole && userRole.name)}
      </ul>
      <br/><hr/><br/>
      <Switch>
        <Route path="/leadsapp/settings/super-admin" component={SuperAdmin} />
        <Route path="/leadsapp/settings/admin" component={Admin} />
        <Route path="/leadsapp/settings/sales-manager" component={SalesManager} />
        <Route path="/leadsapp/settings/account-manager" component={AccountManager} />
        <Route path="/leadsapp/settings/associate-manager" component={AssociateManager} />
        <Route path="/leadsapp/settings/associate" component={Associate} />
        <Route path="/leadsapp/settings/contact" component={Contact} />
        <Route path="/leadsapp/settings/users/:userId" component={UserDetails} />
      </Switch>
      

		</StyledSection>
	)
}

const StyledSection = styled.section`
	margin: 0px;
	padding: 0px;
	h2 {
		margin-bottom: 30px;
		text-align: center;
		color: #232323;
		
	}
`