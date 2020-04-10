import { createGlobalStyle  }  from 'styled-components';
import { PRIMARY_COLOR, PRIMARY_TINT } from '../../_consts'

export const Anchors = createGlobalStyle `
	a {
		color: ${PRIMARY_COLOR};
			-webkit-transition: color 0.2s ease-in-out;
			-moz-transition: color 0.2s ease-in-out;
			-o-transition: color 0.2s ease-in-out;
			-ms-transition: color 0.2s ease-in-out;
		text-decoration: none;
		a:active  { }
		&:visited { color: ${PRIMARY_COLOR}; }
		&:hover,
		&:focus,
		&:active  { color: ${PRIMARY_TINT};  }
		&:hover,
		a:active  { outline: 0; }
		&:hover   { }
		&:focus   { outline: thin dotted; }
	}
`;