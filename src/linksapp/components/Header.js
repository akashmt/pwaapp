import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { FirebaseContext } from '../../firebase'

function Header() {
	const { user, firebase } = React.useContext(FirebaseContext)
	return (
		<div className="header">
			<div className="flex">
				<img className="logo" src="/logo.png" alt="Links News Logo" />
				<NavLink to="/linksapp/" className="header-title">
					Hooks Links
				</NavLink>
				<NavLink to="/linksapp/" className="header-link">
					new
				</NavLink>
				<div className="divider"></div>
				<NavLink to="/linksapp/top" className="header-link">
					top
				</NavLink>
				<div className="divider"></div>
				<NavLink to="/linksapp/search" className="header-link">
					search
				</NavLink>
				{user && (
					<>
						<div className="divider"></div>
						<NavLink to="/linksapp/create" className="header-link">
							submit
						</NavLink>
					</>
				)}
			</div>
			<div className="flex">
				{user ? (
					<>
						<div className="header-name">{user.displayName}</div>
						<div className="divider">|</div>
						<div className="header-button" onClick={() => firebase.logout()}>logout</div>
					</>
				) : (
					<NavLink to="/linksapp/login" className="header-link">login</NavLink>
				)}
			</div>
		</div>
	)
}

export default withRouter(Header)