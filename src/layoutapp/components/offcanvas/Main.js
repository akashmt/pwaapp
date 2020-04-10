import React from 'react'
import { MainContainer } from './styles'

export const Main = (props) => {
	return (
		<MainContainer className="offcanvas-main">
			<div className="content-wrapper">
				{props.children}
			</div>
		</MainContainer>
	)
}