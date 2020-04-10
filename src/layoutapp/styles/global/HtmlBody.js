import { createGlobalStyle  }  from 'styled-components';
import { SECONDARY_COLOR } from '../../_consts'

export const HtmlBody = createGlobalStyle `

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

	body {
		background-color: ${SECONDARY_COLOR};
	}

	.app-submenu-popup {
		z-index: 9999 !important;
	}

	.rc-slider-tooltip {
		z-index: 9999 !important;
	}
`