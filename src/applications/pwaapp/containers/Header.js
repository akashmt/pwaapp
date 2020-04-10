import React from 'react'
import styled from 'styled-components'

function Header() {
	return (
		<StyledHeader>
			<h1>PWA Art Videos</h1>
		</StyledHeader>
	)
}

export default Header

const StyledHeader = styled.header`
	margin: 0px 0px 0px 0px;
	padding: 15px 15px 15px 15px;
	text-align: center;
	color: white;
	background: #232323;
	h1 {

	}
`