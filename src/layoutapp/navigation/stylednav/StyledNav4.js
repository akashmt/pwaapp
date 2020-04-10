import React from 'react'
import styled from 'styled-components'
// Source: https://codepen.io/ian-regueiro/pen/rEJxVM

export default function StyledNav4() {
	return (
		<StyledDiv4 className="Screen">
<div class="menu-wrap">
  <input type="checkbox" class="toggler" />
  <div class="hamburger"><div></div></div>
  <div class="menu">
  <div>
    <div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    </div>
  </div>
</div>
<header class="showcase">
  <div class="container showcase-inner">
    <h1>Welcome</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maxime quae deleniti voluptatum sint facilis tempore animi a error ipsa?</p>
      <a href="#" class="btn">Read More</a>
  </div>
</header>
		</StyledDiv4>
	)
}

const StyledDiv4 = styled.div`


.container {
  max-width: 960px;
  margin: auto;
  overflow: hidden;
  padding: 0 3rem;
}
.showcase {
  background-color: rgba(13, 110, 139, 0.75);
  color: #fff;
  height: 100vh;
  position: relative;
}
.showcase:before {
  content: "";
  background: url(http://worldlandforms.com/landforms/wp-content/uploads/2015/03/Beach.jpg)
    no-repeat center center/cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.showcase .showcase-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
}
.showcase h1 {
  font-size: 4rem;
}
.showcase p {
  font-size: 1.3rem;
}
.btn {
  display: inline-block;
  border: none;
  background-color: rgba(13, 110, 139, 0.75);
  color: #fff;
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
  transition: opacity 1s ease-in;
}
.btn:hover {
  opacity: 0.7;
}

/*MENU CSS STARTS HERE*/
/*MENU CSS STARTS HERE*/
/*MENU CSS STARTS HERE*/
/*MENU CSS STARTS HERE*/

.menu-wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
.menu-wrap .toggler {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;
  width: 50px;
  height: 50px;
  opacity: 0;
}
.menu-wrap .hamburger {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 60px;
  height: 60px;
  padding: 1rem;
  background: rgba(13, 110, 139, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
/*Hamburger line*/
.menu-wrap .hamburger > div {
  position: relative;
  width: 100%;
  height: 2px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}
/*Top and bottom lines*/
.menu-wrap .hamburger > div:before,
.menu-wrap .hamburger > div:after {
  content: "";
  position: absolute;
  z-index: 1;
  top: -10px;
  width: 100%;
  height: 2px;
  background: inherit;
}
/*Moves line down*/
.menu-wrap .hamburger > div:after {
  top: 10px;
}
/* Toggler animate */
.menu-wrap .toggler:checked + .hamburger > div {
  transform: rotate(135deg);
}
/* Turn lines into X */
.menu-wrap .toggler:checked + .hamburger > div:before,
.menu-wrap .toggler:checked + .hamburger > div:after {
  top: 0;
  transform: rotate(90deg);
}
/* Rotate on hover when checked */
.menu-wrap .toggler:checked:hover + .hamburger > div {
  transform: rotate(225deg);
}
/* Show Menu */
.menu-wrap .toggler:checked ~ .menu{
  visibility: visible;
}
.menu-wrap .toggler:checked ~ .menu > div{
  transform: scale(1);
  transition-duration: 0.75s;
}
.menu-wrap .toggler:checked ~ .menu > div > div{
  opacity: 1;
  transition: opacity .4s ease;
}
.menu-wrap .menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  overflow: hidden;
  display: flex; 
  align-items: center;
  justify-content: center;
}
.menu-wrap .menu > div{
  background: rgba(24, 39, 51, 0.85);
  border-radius: 50%;
  width: 200vw;
  height: 200vw;
  display:flex;
  flex: none;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  transition: all .4s ease;
}

.menu-wrap .menu > div > div{
  text-align: center;
  max-width: 90vw;
  max-height: 100vh;
  opacity: 0;
  transition: opacity .4s ease;
}

.menu-wrap .menu > div > div > ul > li{
  list-style: none;
  color: #fff;
  font-size: 1.5rem;
  padding: 1rem;
}
.menu-wrap .menu > div > div > ul > li > a{
  color: inherit;
  text-decoration: none;
  transition: color .4s ease;
}


`
