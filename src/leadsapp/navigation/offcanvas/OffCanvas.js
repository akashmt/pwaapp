import React from 'react'
import { Link } from 'react-router-dom'
import { OffCanvasNav } from './styles'

export function OffCanvas() {
  const closeOffCanvas = () => {
    document.getElementById("menu__toggle").checked = false;
  }
  
	return (
		<OffCanvasNav className="OffCanvas-navigation">
			<input id="menu__toggle" type="checkbox" />
			<label htmlFor="menu__toggle">
				<span></span>
			</label>
			<ul>
				<li><Link to="/leadsapp" onClick={closeOffCanvas}>Dashboard</Link></li>
        <li><Link to="/leadsapp/rolebasedleads" onClick={closeOffCanvas}>Role Based Leads</Link></li>
        <li><Link to="/leadsapp/myleads" onClick={closeOffCanvas}>My Leads</Link></li>
        <li><Link to="/leadsapp/top" onClick={closeOffCanvas}>Top Leads</Link></li>
        <li><Link to="/leadsapp/create" onClick={closeOffCanvas}>Create New Lead</Link></li>
				<li><Link to="/leadsapp/search" onClick={closeOffCanvas}>Search</Link></li>
				<li><Link to="/leadsapp/settings" onClick={closeOffCanvas}>Settings</Link></li>
        <li><Link to="/leadsapp/profile" onClick={closeOffCanvas}>My Profile</Link></li>
				<li><Link to="/leadsapp/login" onClick={closeOffCanvas}>Login</Link></li>
			</ul>
		</OffCanvasNav>
	)
}