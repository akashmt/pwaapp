import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

function AppNavigation() {
	return (
		<StyledNav>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/pwa/">PWA</Link></li>
			</ul>
		</StyledNav>
	)
}

export default AppNavigation

const StyledNav = styled.nav`
	ul {
		display: flex;
		flex-direction: row;
		margin: 0px 0px 0px 0px;
		padding: 0px 0px 0px 0px;
		li {
			margin-right: 15px;
			list-style: none;
			a {
				&:hover { }
			}
		}
	}
`
