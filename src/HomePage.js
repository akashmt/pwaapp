import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function HomePage() {
	return (
		<StyledDiv>
			<ul>
				<li><Link to="/linksapp">LinksApp</Link></li>
				<li><Link to="/leadsapp">LeadsApp</Link></li>
				<li><Link to="/layoutapp">LayoutApp</Link></li>
			</ul>
		</StyledDiv>
	)
}

export default HomePage

const StyledDiv = styled.div`
	ul {
		li {
			margin-bottom: 30px;
		}
	}
`