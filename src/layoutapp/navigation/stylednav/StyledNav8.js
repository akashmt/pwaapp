import React from 'react'
import styled from 'styled-components'
// Source: https://codepen.io/marukobase/pen/XVPKbK

export default function StyledNav8() {
	return (
		<StyledDiv8 className="Screen">
<h1>CSS Drawer Menu</h1>
<p><label class="menu-open" for="menu-toggle">Open Menu / Close Menu</label></p>
<input id="menu-toggle" type="checkbox" />
<ul>
  <li><a href="#">menu 1</a></li>
  <li><a href="#">menu 2</a></li>
  <li><a href="#">menu 3</a></li>
  <li><a href="#">menu 4</a></li>
  <li><a href="#">menu 5</a></li>
</ul>
		</StyledDiv8>
	)
}

const StyledDiv8 = styled.div`
h1 {
  margin-top:1em;
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 36px;
  font-weight: 500;
}
p {
  margin-top: 2em;
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  font-weight: 500;
  .menu-open {
    cursor: pointer;
    &:hover {
      color: #999;
    }
  }
}
#menu-toggle {
  display: none;
}
ul {
  position: fixed;
  bottom: 0;
  left:0;
  width: 100%;
  background-color: #000;
  transform: translateY(100%);
  transition: 0.3s;
  li {
    font-family: "Ubuntu", sans-serif;
    font-weight: 300;
    a {
      display: block;
      padding: 1em;
      text-align: center;
      color: #fff;
      text-decoration: none;
      &:hover {
        background-color: #333;
      }
      }
    }
}
#menu-toggle:checked ~ ul {
  transform: translateY(0);
}
`