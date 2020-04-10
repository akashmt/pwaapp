import React from 'react'
import styled from 'styled-components'
// Source: https://codepen.io/surjithctly/pen/pLDwe

export default function StyledNav17() {
	return (
		<StyledDiv17 className="Screen">
<input type="checkbox" name="toggle" id="toggle" />
<label for="toggle"></label>

<div class="container">
	<h1>Pure CSS3 Slide Down Toggle Demo</h1>
	<h2> Click the Open button to see hidden mesage.</h2>
</div>
<div class="message">
		<h1> hello, I'm a hidden message. You found it.</h1>
		<h2>Now Click the Heart button in the bottom to support CSS3</h2>
</div>
		</StyledDiv17>
	)
}

const StyledDiv17 = styled.div`

.message {
background:#181818;
color:#FFF;
position: absolute;
top: -250px;
left: 0;
width: 100%;
height: 250px;
padding: 20px;
transition: top 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
overflow: hidden;
box-sizing: border-box;
  
}

.message h1 {
  color:#FFF;
}

#toggle {
  position:absolute;
  appearance:none;
  cursor:pointer;
  left:-100%;
  top:-100%;
}

#toggle + label {
  position:absolute;
  cursor:pointer;
  padding:10px;
  background: #26ae90;
width: 100px;
border-radius: 3px;
padding: 8px 10px;
color: #FFF;
line-height:20px;
font-size:12px;
text-align:center;
-webkit-font-smoothing: antialiased;
cursor: pointer;
  margin:20px 50px;
  transition:all 500ms ease;
}
#toggle + label:after {
  content:"Open" 
}

.container {
transition: margin 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
  padding:5em 3em;
}

#toggle:checked ~ .message {
  top: 0;
}

#toggle:checked ~ .container {
  margin-top: 250px;
}

#toggle:checked + label {
  background:#dd6149;
}

#toggle:checked + label:after {
  content:"Close"
}


`