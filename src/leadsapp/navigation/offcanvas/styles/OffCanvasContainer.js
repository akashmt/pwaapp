import styled from 'styled-components'
import { PRIMARY_COLOR, PRIMARY_SHADE, PRIMARY_TINT,
				 SECONDARY_COLOR, SECONDARY_SHADE, SECONDARY_TINT,
 				 LIGHT_COLOR, LIGHT_SHADE,
				 BORDER_RADIUS } from '../../../_consts'

export const OffCanvasNav = styled.nav`
	padding-bottom: 20px;
	background: ${PRIMARY_COLOR};
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
		top: 20px; right: 35px;
		width: 26px; height: 26px;
		cursor: pointer;
		> span,
		> span::before,
		> span::after {
			position: absolute;
			display: block;
			width: 100%; height: 4px;
			background-color: ${LIGHT_COLOR};
			transition-duration: .25s;
		}
		> span::before { content: ''; top: -8px; }
		> span::after {	content: ''; top: 8px; }
	}

	/* UL- Whole BG / LI- Menu Items */
	ul {
		position: fixed;
		display: block; 
		margin: 0px 0px 0px 0px; padding: 80px 15px 15px 15px;
		visibility: hidden;
		top: 0; left: -100%;
		width: 100%; height: 100%;
		background-color: ${PRIMARY_COLOR};
		box-shadow: 1px 0px 6px rgba(0, 0, 0, .3);
		transition-duration: .25s;
		list-style: none;
		li {
			display: block;
				margin-bottom: 30px;
				padding: 12px 24px 12px 24px;
			text-decoration: none;
			transition-duration: .25s;
			background-color: ${SECONDARY_TINT};
			border: 0px solid ${PRIMARY_COLOR};
			border-radius: ${BORDER_RADIUS};
			&:hover {
				background-color: ${PRIMARY_TINT};
			}
			a {
				/* margin-bottom: 30px;
				padding: 12px 24px 12px 24px; */
				font-weight: bold;
				color: ${PRIMARY_COLOR};
				&:hover { color: ${LIGHT_COLOR}; } 
			}
		}
	}

`