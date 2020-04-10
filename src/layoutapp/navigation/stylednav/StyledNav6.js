import React from 'react'
import styled from 'styled-components'
// Source: https://codepen.io/layshock/pen/jvEGqW

export default function StyledNav6() {
	return (
		<StyledDiv6 className="Screen">
	  <input type="checkbox" id="drawer-toggle" class="tgl tgl-light" name="drawer-toggle"/>
  <label for="drawer-toggle" class="tgl-btn" id="drawer-toggle-label"></label>
	<nav class="nav-side" id="drawer">
		<ul>
      <li><a href="/domains">Domains</a></li>
      <li><a href="/services">Apps</a></li>
      <li><a href="/domains/domain-name-registration-list-of-extensions">Pricing</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/support">Contact</a></li>
    </ul>
	</nav>
		</StyledDiv6>
	)
}

const StyledDiv6 = styled.div`
* { 
margin: 0; 
padding: 0; 
-webkit-box-sizing: border-box; 
-moz-box-sizing: border-box; 
-o-box-sizing: border-box; 
box-sizing: border-box; 
-webkit-transition: .25s ease-in-out; 
-moz-transition: .25s ease-in-out; 
-o-transition: .25s ease-in-out; 
transition: .25s ease-in-out; 
-webkit-text-size-adjust: none; 
} 

/* Toggle */

.tgl {
  display: none;
}

.tgl + .tgl-btn {
  outline: 0;
  display: block;
  width: 3.5em;
  height: 1.75em;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.tgl + .tgl-btn:after, .tgl + .tgl-btn:before {
  position: relative;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
}
.tgl + .tgl-btn:after {
  left: 50%;
}
.tgl + .tgl-btn:before {
  display: none;
}
.tgl:checked + .tgl-btn:after {
  left: 0;
}

.tgl-light + .tgl-btn {
  background: #dadada;
  border-radius: 2em;
  padding: 2px;
  transition: all .4s ease;
}
.tgl-light + .tgl-btn:after {
  border-radius: 50%;
  background: #fff;
  transition: all .2s ease;
}
.tgl-light:checked + .tgl-btn {
  background: #9FD6AE;
}

/* Drawer Nav */

#drawer-toggle { 
	position: absolute; 
	opacity: 0;
}

#drawer-toggle-label { 
	-webkit-touch-callout: none; 
	-webkit-user-select: none; 
	-khtml-user-select: none; 
	-moz-user-select: none; 
	-ms-user-select: none; 
	user-select: none;
  position: absolute;
  right: .5em;
  top:.5em;
  z-index: 1; 
} 

.nav-side { 
	position: fixed; 
	top: 45px; 
	right: -300px; 
	height: 100%; 
	width: 300px; 
	background: #eaeaea; 
	overflow-x: hidden; 
	overflow-y: scroll; 
	padding: 20px; 
	-webkit-overflow-scrolling: touch; 
}

#drawer-toggle:checked ~ .nav-side { 
	right: 0; 
} 

.nav-side ul { 
	list-style-type:none; 
} 

.nav-side ul a { 
	display:block; 
	padding:10px; 
	color:#000000; 
	text-decoration:none; 
} 

.nav-side ul a:hover { 
	color:#7d7d7d; 
}
`