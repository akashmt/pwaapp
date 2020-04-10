import React from 'react'
import styled from 'styled-components'
// Source: https://codepen.io/Bogdan92/pen/ZgoMyy

export default function StyledNav2() {
	return (
		<StyledDiv2 className="Screen">
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="toggle-navigation">
        <div className="inner"></div>
      </label>

      <main className="site-content">
        <nav className="main-navigation">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
        <section className="content">
          <h1>This is an off-canvas menu with pure css</h1>
          <h3>Click the hamburger button</h3>
          <div className="mouse"></div>
        </section>
      </main>
		</StyledDiv2>
	)
}

const StyledDiv2 = styled.div`
background-color: #519D9E;
ul {
	margin: 0;
	padding: 0;
	list-style-type: none;
}

input[type="checkbox"] {
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	&:focus {
		outline: none;
	}
	&:checked ~ .site-content .main-navigation {
		transform: translateX(0);
	}
	&:checked ~ .site-content .content {
		transform: translateX(16rem);
	}
	&:checked ~ .toggle-navigation {
		transform: translateX(16rem);
	}
}
.toggle-navigation {
	cursor: pointer;
	display: inline-block;
	position: absolute;
	top: 1rem;
	left: 1rem;
	padding: 8px 0;
	z-index: 1;
	transform: translateX(0);
	transition: transform 0.3s ease-in;
	.inner {
		background-color: ORANGE;
		box-shadow: 0 8px 0 white, 0 -8px 0 $white;
		border-radius: 3px;
		width: 30px;
		height: 3px;
	}
}

// Menu
.main-navigation {
	background-color: BLACK;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 16rem;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	overflow-y: auto;
	transform: translateX(-16rem);
	transition: transform 0.3s ease-in;
	a {
		color: WHITE;
		display: block;
		padding: 1rem 0.5rem;
		text-align: center;
		transition: background-color 0.3s ease-in-out;
		&:hover {
			background-color: #232323;
		}
	}
}

//Site Content
.site-content {
	overflow: hidden;
}

//Content
.content {
	padding: 1rem;
	transform: translateX(0);
	transition: transform 0.3s ease-in;
	h1 {
		color: WHITE;
		margin: 2rem 0 1rem 0;
		line-height: 1.2;
	}
	h3 {
		color: WHITE;
		font-weight: 400;
		letter-spacing: 1px;
		margin-bottom: 2rem;
	}
	.mouse {
		border-radius: 10px;
		border: 1px solid RED;
		position: relative;
		width: 20px;
		height: 30px;
		animation: slideUpDown 0.5s infinite linear alternate;
		&:before {
			content: "";
			background-color: GREEN;
			position: absolute;
			top: 0.5rem;
			left: 50%;
			transform: translateY(-50%);
			width: 1px;
			height: 0.5rem;
		}
	}
	
	@keyframes slideUpDown {
		from {transform: translateY(-1rem)};
		top {transform: translateY(0)};
	}
}

`
