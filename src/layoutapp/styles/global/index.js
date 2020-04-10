import React from 'react'
import { Normalize } from './Normalize'
import { HtmlBody } from './HtmlBody'
import { Typography } from './Typography'
import { Anchors } from './Anchors'
import { Buttons } from './Buttons'
import { FormInputs } from './FormInputs'

function GlobalStyles(){
  return (
		<React.Fragment>
			<Normalize/>
			<HtmlBody/>
			<Typography/>
			<Anchors/>
			<Buttons/>
			<FormInputs/>
		</React.Fragment>
	)
}

export default GlobalStyles