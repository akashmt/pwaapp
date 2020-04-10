import React from 'react'
import styled from 'styled-components'
// Source: https://codepen.io/adrienlochon/pen/EAGBn

export default function StyledNav11() {
	return (
		<StyledDiv11 className="Screen">
<div class="menu" id="menu">
  <h1>MENU!</h1>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contacts</li>
  </ul>
  <a href="#" class="close-menu"></a>
</div>

<p><a class="menu-toggler" href="#menu">&equiv; Menu</a></p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>

		</StyledDiv11>
	)
}

const StyledDiv11 = styled.div`
.menu-toggler {
  text-transform: uppercase;
  border: 2px solid #27ae60;
  border-radius: 5px;
  padding: 5px 10px;
  font-size:16px;
}
.menu-toggler:hover {
  color: #FFF;
  background: #27ae60;
}

.menu {
  position: fixed;
  top: 0;
  left: -30%;
  width: 23%;
  padding: 0 2% 0 5%;
  background: #2c3e50;
  color: #FFF;
  height: 100%;
  -webkit-transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
	-moz-transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
	-ms-transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);	
	-o-transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
	transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.menu:target {
  left: -3%;
  -webkit-box-shadow: 0 0 50px 0 #000;
  box-shadow: 0 0 50px 0 #000;
}

.menu:target .close-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 29%;
  right: 0;
}

.menu h1 {
  font-size: 150%;
  margin: 0.25em 0
}

ul {
  list-style: none;
  margin: 20px 0 20px 0;
  padding: 0;
}
li {
  display: block;
  font-size: 70%;
  padding: 10px;
  margin: 0;
  cursor: pointer;
}
li:hover {
  background: rgba(0,0,0,0.3);
}
`