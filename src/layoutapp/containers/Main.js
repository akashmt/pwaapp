import React from 'react'
import styled from 'styled-components'
import { PRIMARY_COLOR, PRIMARY_TINT,
				 SECONDARY_COLOR, LIGHT_COLOR, LIGHT_SHADE } from '../_consts'

export default function Main(props) {
	return (
		<StyledMain>
			{props.children}
		</StyledMain>
	)
}

const StyledMain = styled.main`
	margin: 0px 0px 0px 0px;
	padding:15px 15px 15px 15px;
	/* background-color: ${SECONDARY_COLOR}; */
`
