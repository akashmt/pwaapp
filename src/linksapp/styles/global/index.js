import React from 'react'
// import { Normalize } from './Normalize'
// import { HtmlBody } from './HtmlBody'
import { HooksNewsAppStyles } from './HooksNewsAppStyles'

function GlobalStyles(){
  return (
		<React.Fragment>
			{/* <Normalize/> */}
			{/* <HtmlBody/> */}
			<HooksNewsAppStyles/>
		</React.Fragment>
	)
}

export default GlobalStyles