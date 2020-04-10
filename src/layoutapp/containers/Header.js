import React from 'react'
import styled from 'styled-components'
import { PRIMARY_COLOR, LIGHT_COLOR } from '../_consts'

export default function Header(props) {
	return (
		<StyledHeader>
			{props.children}
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	margin: 0px 0px 0px 0px;
	padding: 0px 15px 15px 15px;
	background-color: ${PRIMARY_COLOR};
	h1 {
		font-size: 1.4em;
		color: ${LIGHT_COLOR};
	}
`
