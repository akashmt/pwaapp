import React from 'react'
import styled from 'styled-components'
// Source: https://codepen.io/Terryl_Brown/pen/ZYMzrJ/

export default function StyledNav14() {
	return (
		<StyledDiv14 className="Screen">

		<input type="checkbox" id="nav-toggle" />
    <label class="nav-toggle" for="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
    </label>

    <nav class="offcanvas-menu">
      <h4>Navigation</h4>
        <ul class="nav-list">
            <li class="nav-list__item"><a href="#">Home</a></li>
            <li class="nav-list__item"><a href="#">About</a></li>
            <li class="nav-list__item"><a href="#">Services</a></li>
            <li class="nav-list__item"><a href="#">Blog</a></li>
            <li class="nav-list__item"><a href="#">Contact</a></li>
        </ul>
    </nav>

<div id="content-wrap">
    <div class="wrapper">

    <h1>Test Text</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate urna nulla, sit amet consequat dui eleifend non. Vestibulum dapibus interdum felis. Sed pellentesque placerat est non tristique. Sed lacinia tempor tortor et cursus. Fusce facilisis iaculis mi sit amet fermentum. Quisque consectetur nisl a libero porttitor tempus. Nunc feugiat consequat est, id interdum eros tincidunt eget. Phasellus condimentum ante ac tristique placerat. Proin sollicitudin nibh eget enim ultricies condimentum. Donec tristique ultrices laoreet. Donec et lacinia leo, non sodales massa. Nam libero elit, convallis et ornare sit amet, efficitur vel dolor. Suspendisse potenti.</p>
    <p>Praesent tristique nunc in vestibulum finibus. Nullam orci leo, iaculis at nulla vitae, finibus imperdiet felis. Proin et arcu semper, imperdiet elit viverra, pretium velit. Donec sagittis eros tincidunt laoreet blandit. Duis eu nulla a tortor eleifend eleifend sed sed eros. Praesent scelerisque sapien vitae dui rutrum sagittis. Nullam blandit eros eu auctor accumsan. Fusce enim mauris, ultricies et metus dapibus, lobortis imperdiet erat. Nunc id diam elit. Nullam non tellus ut quam convallis scelerisque.</p>
    </div>
</div>
		</StyledDiv14>
	)
}

const StyledDiv14 = styled.div`
.offcanvas-menu {
    width: 250px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    margin-right: -250px;
    background: #222;
    padding: 15px;
    /* Inset Box Shadow */
    -webkit-box-shadow: inset 8px 0px 17px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: inset 8px 0px 17px 0px rgba(0,0,0,0.75);
    box-shadow: inset 8px 0px 17px 0px rgba(0,0,0,0.75);
    /* Transition */
    transition: margin .3s;
}

.offcanvas-menu h4 {
  margin-left: 10px;
  color: #666;
  border-bottom: 1px solid #333;
  padding: 15px 0;
}

.nav-list__item {
    padding: 10px;
}

/* Checkbox */
input[type=checkbox] {
    position: fixed;
    left: -9999px;
    opacity: 0;
}

/* Nav Toggle */
.nav-toggle {
    display: block;
    position: fixed;
    top: 10px;
    right: 10px;
    height: 50px;
    width: 60px;
    background: #222;
    padding: 10px;
    cursor: pointer;
    z-index: 99;
}

.nav-toggle:hover {border: none;}

.nav-toggle span {
    position: relative;
    display: block;
    height: 2px;
    width: 40px;
    background: #fff;
    transition: all .3s;
    
}
.nav-toggle span:nth-of-type(2) {top: 12px;}
.nav-toggle span:nth-of-type(3) {top: 24px;}

/* Toggle Nav Transition */
input[type=checkbox]:checked ~ .nav-toggle span:nth-of-type(2) {display: none;}

input[type=checkbox]:checked ~ .nav-toggle span:nth-of-type(1) {
    top: 12px;
    transform: rotate(45deg);
}

input[type=checkbox]:checked ~ .nav-toggle span:nth-of-type(3) {
    top: 12px;
    margin-top: -2px;
    transform: rotate(-45deg);
}

input[type=checkbox]:checked ~ #content-wrap {
    margin-left: -250px;
}    

input[type=checkbox]:checked ~ .offcanvas-menu {
    margin-right: 0px;
}    

/* Content Wrap */
#content-wrap {
    position: relative;
    width: 100%;
    background: #333;
    overflow: auto;
    min-height: 100%;
    transition: margin .3s;
}

.wrapper {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 15px;
}
`