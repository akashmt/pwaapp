import React from 'react'
import styled from 'styled-components'
// Source: https://codepen.io/SitePoint/pen/uIemr/

export default function StyledNav15() {
	return (
		<StyledDiv15 className="Screen">
<ul class="navigation">
	<li class="nav-item"><a href="#">Home</a></li>
	<li class="nav-item"><a href="#">Portfolio</a></li>
	<li class="nav-item"><a href="#">About</a></li>
	<li class="nav-item"><a href="#">Blog</a></li>
	<li class="nav-item"><a href="#">Contact</a></li>
</ul>

<input type="checkbox" id="nav-trigger" class="nav-trigger" />
<label for="nav-trigger"></label>

<div class="site-wrap">
	
  <h1>Pure CSS Off-Screen Menu</h1>
  <h3>Finally, an off-screen menu that doesn't require a bunch of Javascript to work. </h3>
  
  <p>This concept relies on the <code>:checked</code> pseudo-selector as well as the general sibling <code>~</code> selector, so it has decent browser support.</p>
  <p><strong>Browsers supported:</strong> IE9+, Firefox 3.5+, Chrome any, Safari 3.2+, Opera 9.5+</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi vero nisi eos sed qui natus, ut eius reprehenderit error nesciunt veniam aliquam nulla itaque labore obcaecati molestiae eveniet, perferendis provident amet perspiciatis expedita accusantium! Eveniet, quos voluptas et, labore natus, saepe unde est nulla sit eaque tempore debitis accusantium. Recusandae.</p>
  <p>Dolorem aliquam a libero reiciendis obcaecati doloribus ipsa eos laudantium, dicta in! Odit iure ut ratione, dolorum cupiditate perferendis voluptatum sapiente, dignissimos sunt necessitatibus, reprehenderit consequatur dolorem. Aliquam veniam quaerat, pariatur deserunt reiciendis vero vitae, repellat omnis sequi dolor nesciunt. Nihil similique alias impedit, obcaecati eligendi delectus voluptatum! Ipsum, vel.</p>
  <p>Sint, perspiciatis nemo aut, rerum excepturi deleniti modi quos nihil corporis eum, maiores soluta labore, consectetur eligendi nesciunt. Placeat, incidunt! Illum placeat eligendi, veritatis consectetur eum! Dolor obcaecati minima ab placeat voluptatem neque modi doloribus, magnam qui voluptate eaque in. Nulla expedita hic porro architecto facere officiis vitae numquam, dolor!</p>
  <p>Perferendis quis ea incidunt ducimus nisi voluptate natus. Repellat asperiores quod rerum rem quos blanditiis enim modi, veniam voluptas a facilis! Velit cum omnis, voluptatum eum inventore! Corrupti, suscipit, neque distinctio expedita est laboriosam cum aliquid minus tempora quaerat officia possimus unde vel deleniti eaque fugit accusamus iusto dolorum natus.</p>

</div>
		</StyledDiv15>
	)
}

const StyledDiv15 = styled.div`
.navigation {
  /* critical sizing and position styles */
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  
  /* non-critical appearance styles */
  list-style: none;
  background: #111;
}

/* Navigation Menu - List items */
.nav-item {
  /* non-critical appearance styles */
  width: 200px;
  border-top: 1px solid #111;
  border-bottom: 1px solid #000;
}

.nav-item a {
  /* non-critical appearance styles */
  display: block;
  padding: 1em;
  background: linear-gradient(135deg, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
  color: white;
  font-size: 1.2em;
  text-decoration: none;
  transition: color 0.2s, background 0.5s;
}

.nav-item a:hover {
  color: #c74438;
  background: linear-gradient(135deg, rgba(0,0,0,0) 0%,rgba(75,20,20,0.65) 100%);
}

/* Site Wrapper - Everything that isn't navigation */
.site-wrap {
  /* Critical position and size styles */
  min-height: 100%;
  min-width: 100%;
  background-color: white; /* Needs a background or else the nav will show through */
  position: relative;
  top: 0;
  bottom: 100%;
  left: 0;
  z-index: 1;
  
  /* non-critical apperance styles */
  padding: 4em;
  background-image: linear-gradient(135deg, rgb(254,255,255) 0%,rgb(221,241,249) 35%,rgb(160,216,239) 100%);
  background-size: 200%;
}

/* Nav Trigger */
.nav-trigger {
  /* critical styles - hide the checkbox input */
  position: absolute;
  clip: rect(0, 0, 0, 0);
}

label[for="nav-trigger"] {
  /* critical positioning styles */
  position: fixed;
  left: 15px; top: 15px;
  z-index: 2;
  
  /* non-critical apperance styles */
  height: 30px;
  width: 30px;
  cursor: pointer;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' width='30px' height='30px' viewBox='0 0 30 30' enable-background='new 0 0 30 30' xml:space='preserve'><rect width='30' height='6'/><rect y='24' width='30' height='6'/><rect y='12' width='30' height='6'/></svg>");
  background-size: contain;
}

/* Make the Magic Happen */
.nav-trigger + label, .site-wrap {
  transition: left 0.2s;
}

.nav-trigger:checked + label {
  left: 215px;
}

.nav-trigger:checked ~ .site-wrap {
  left: 200px;
  box-shadow: 0 0 5px 5px rgba(0,0,0,0.5);
}

body {
	/* Without this, the body has excess horizontal scroll when the menu is open */
  overflow-x: hidden;
}

/* Additional non-critical styles */

h1, h3, p {
  max-width: 600px;
  margin: 0 auto 1em;
}

code {
	padding: 2px;
	background: #ddd;
}

/* Micro reset */
*,*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;}
html, body { height: 100%; width: 100%; font-family: Helvetica, Arial, sans-serif; }
`