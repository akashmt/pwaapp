import React from 'react'
import styled from 'styled-components'
// Source: https://codepen.io/oxocode/pen/bVXWmy

export default function StyledNav12() {
	return (
		<StyledDiv12 className="Screen">

<nav>
	<div class="offcanvas">
		<input type="checkbox" class="toggle" title="toggle" />
		<span></span>
		<span></span>
		<span></span>

		<ul class="offcanvas__menu">
			<li class="offcanvas__menu-item"><a href="#">Home</a></li>
			<li class="offcanvas__menu-item"><a href="#">Page</a></li>
			<li class="offcanvas__menu-item"><a href="#">Page 2</a></li>
			<li class="offcanvas__menu-item"><a href="#">Page 3</a></li>
			<li class="offcanvas__menu-item"><a href="#">Page 4</a></li>
			<li class="offcanvas__menu-item"><a href="#">Contact</a></li>
		</ul>
	</div>
</nav>

<h1>Test</h1>
		</StyledDiv12>
	)
}

const StyledDiv12 = styled.div`
body {
	margin: 0;
	padding: 0;
	background: #222;
	color: #ccc;
	font-family: "Source Sans Pro", sans-serif;
}

a {
	text-decoration: none;
	color: #222;
	transition: color 0.3s ease;
}

a:hover {
	color: #f36;
}

.offcanvas {
	display: block;
	position: relative;
	top: 50px;
	left: 50px;
	z-index: 1;
	user-select: none;
}

.offcanvas .toggle {
	display: block;
	width: 33px;
	height: 28px;
	position: absolute;
	top: 0;
	left: 0;
	cursor: pointer;
	opacity: 0;
	z-index: 2;
}

// A hamburger.
.offcanvas span {
	display: block;
	width: 33px;
	height: 4px;
	margin-bottom: 5px;
	position: relative;
	background: #ccc;
	border-radius: 3px;
	z-index: 1;
	transform-origin: 4px 0px;
	transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
	background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
	opacity 0.55s ease;
}

.offcanvas span:first-child {
	transform-origin: 0% 0%;
}

.offcanvas span:nth-last-child(2) {
	transform-origin: 0% 100%;
}

// Make our hamburger a crossmark.
.offcanvas .toggle:checked ~ span {
	opacity: 1;
	transform: rotate(45deg) translate(-2px, -1px);
	background: #22;
}

// Hide the hamburger patty.
.offcanvas .toggle:checked ~ span:nth-last-child(3) {
	opacity: 0;
	transform: rotate(0deg) scale(0.2, 0.2);
}

.offcanvas .toggle:checked ~ span:nth-last-child(2) {
	opacity: 1;
	transform: rotate(-45deg) translate(0, -1px);
	background: #f36;
}

.offcanvas__menu {
	position: absolute;
	width: 300px;
	height: auto;
	min-height: 100vh;
	margin: -100px 0 0 -50px;
	padding: 125px 50px 50px;
	background: #fafafa;
	list-style-type: none;
	transform-origin: 0% 0%;
	transform: translate(-100%, 0);
	transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
	.offcanvas__menu-item {
		padding: 10px 0;
		font-size: 1.3rem;
	}
}

.offcanvas .toggle:checked ~ ul {
	transform: scale(1.0, 1.0);
	opacity: 1;
}

`