import React from 'react'
import styled from 'styled-components'


export default function Contact(props) {
  
  return (
		<StyledSection>
      <h2>Contact</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in leo ac neque fermentum ornare a ut arcu. Nulla at libero justo. Morbi mattis mauris tempor tellus porttitor</p>
		</StyledSection>
	)
}

const StyledSection = styled.section`
	margin: 0px;
	padding: 0px;
	h2 {
		margin-bottom: 30px;
		text-align: center;
		color: #232323;
		
	}
`