import React from 'react'
import styled from 'styled-components'
// Source: https://codepen.io/andreykrokhin/pen/mGEqja

export default function StyledNav3() {
	return (
		<StyledDiv3 className="Screen">
			<div class="Navigation-offcanvas">
				<input id="menu__toggle" type="checkbox" />
				<label htmlFor="menu__toggle">
					<span></span>
				</label>
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Contact</a></li>
					<li><a href="#">Social</a></li>
					<li><a href="#">List</a></li>
				</ul>
			</div>
		</StyledDiv3>
	)
}

const StyledDiv3 = styled.div`

.Navigation-offcanvas {
	/* Input-Checkbox */
	input#menu__toggle {
		opacity: 0;
		&:checked ~ {
			label > span {
				transform: rotate(45deg);
				&::before { top: 0; transform: rotate(0); }
				&::after {	top: 0; transform: rotate(90deg); }
			}
			ul { visibility: visible;	left: 0; }
		}
	}
	/* Trigger Icon */
	label {
		z-index: 1; position: fixed;
		display: flex; align-items: center;
		top: 20px; right: 20px;
		width: 26px; height: 26px;
		cursor: pointer;
		> span,
		> span::before,
		> span::after {
			position: absolute;
			display: block;
			width: 100%; height: 4px;
			background-color: #616161;
			transition-duration: .25s;
		}
		> span::before { content: ''; top: -8px; }
		> span::after {	content: ''; top: 8px; }
	}
}

ul {
	position: fixed;
	display: block; 
	margin: 0px 0px 0px 0px; padding: 15px 15px 15px 15px;
	visibility: hidden;
	top: 0; left: -100%;
	width: 300px; height: 100%;
	background-color: #ECEFF1;
	box-shadow: 1px 0px 6px rgba(0, 0, 0, .3);
	transition-duration: .25s;
	list-style: none;
	li {
		display: block;
		padding: 12px 24px 12px 24px;
		color: #333;
		text-decoration: none;
		transition-duration: .25s;
		&:hover {
			background-color: #CFD8DC;
		}
	}
}
`
