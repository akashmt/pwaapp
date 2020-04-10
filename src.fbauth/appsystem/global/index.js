import React from 'react'
import { Normalize } from './Normalize'
import { HtmlBody } from './HtmlBody'

export function GlobalStyles(){
  return (
		<React.Fragment>
			<Normalize/>
			<HtmlBody/>
		</React.Fragment>
	)
}