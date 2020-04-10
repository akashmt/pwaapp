import { createGlobalStyle } from 'styled-components'

export const HtmlBody = createGlobalStyle`
	/* body { color: ${props => (props.redColor ? 'red' : 'black')}; } */

	html { box-sizing: border-box; }

	*, *::before, *::after {
		margin: 0rem;
		padding: 0rem;
		box-sizing: inherit;
	}

	html, body {
		margin: 0rem;
		padding: 0rem;
		position: relative;
		height: 100%;
		width: 100%;
		overflow-x: hidden;
	}
`