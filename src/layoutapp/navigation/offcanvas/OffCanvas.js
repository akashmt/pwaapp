import React from 'react'
import { Link } from 'react-router-dom'
import { OffCanvasNav } from './styles'

export function OffCanvas() {
	return (
		<OffCanvasNav className="OffCanvas-navigation">
			<input id="menu__toggle" type="checkbox" />
			<label htmlFor="menu__toggle">
				<span></span>
			</label>
			<ul>
				<li><Link to="/layoutapp">Dashboard</Link></li>
				<li><Link to="/layoutapp/new">New Leads</Link></li>
				<li><Link to="/layoutapp/top">Top Leads</Link></li>
				<li><Link to="/layoutapp/search">Search</Link></li>
				<li><Link to="/layoutapp/settings">Settings</Link></li>
				<li><Link to="/layoutapp/logout">Logout</Link></li>
			</ul>
		</OffCanvasNav>
	)
}