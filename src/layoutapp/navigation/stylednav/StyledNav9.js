import React from 'react'
import styled from 'styled-components'
// Source: https://codepen.io/navinnavi19/pen/byever

export default function StyledNav9() {

	handleToggle(e) {
		const hamburger = document.querySelector(".hamburger");
		const menu = document.querySelector(".menu");
		
		hamburger.addEventListener("click", (e) => {
			hamburger.classList.toggle("open");
			menu.classList.toggle("open");
		})
	}

	return (
		<StyledDiv9 className="Screen">
<nav class="menu">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
<button class="hamburger" onClick={() => handleToggle}>
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</button>
		</StyledDiv9>
	)
}

const StyledDiv9 = styled.div`

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: -100vh;
  width: 100vw;
}

.menu li {
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 20vw; 
  transition: transform 0.3s ease-in-out;
}

.menu.open li {
  transform: translateY(100vh);
}

.menu.open li:nth-child(2) {
  transition-delay: 0.05s;
}

.menu.open li:nth-child(3) {
  transition-delay: 0.1s;
}

.menu.open li:nth-child(4) {
  transition-delay: 0.15s;
}

.menu.open li:nth-child(5) {
  transition-delay: 0.2s;
}

@media (max-width: 768px) {
  .menu ul {
    flex-direction: column;
    top: 0;
    left: -100vw;
  }
  
  .menu li {
    width: 100vw;
    height: 20vh;
  }
  
  .menu.open li {
    transform: translateX(100vw);
  }
}

.menu li a {
  font-size: 20px;
  background: -webkit-linear-gradient(315deg, #20bf55 0%, #01baef 74%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2.5px;
}

/* Hamburger */

.hamburger {
  border: none;
  background-color: #fff;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: fixed;
  top: 20px;
  right: 20px;
}

.hamburger:focus {
  outline: none;
}

.line {
  width: 20px;
  height: 3px;
  background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);

  display: block;
  margin: 4px auto;
  transition: all 0.1s ease-in-out;
}

.hamburger.open .line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open .line:nth-child(2) {
  opacity: 0;
}

.hamburger.open .line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}


`