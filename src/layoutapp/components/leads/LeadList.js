import React from 'react'
import styled from 'styled-components'
import { PRIMARY_COLOR, PRIMARY_SHADE, PRIMARY_TINT,
				 SECONDARY_COLOR, SECONDARY_SHADE, SECONDARY_TINT,
				 MEDIUM_COLOR, MEDIUM_SHADE, MEDIUM_TINT,
				 LIGHT_COLOR, LIGHT_SHADE } from '../../_consts'
import LeadItem from './LeadItem'

const leads = [
	{ id: 1, company: 'Bug Busters', url: 'http://www.bugbusters.com' },
	{ id: 2, company: 'Stat Laredo', url: 'http://www.statlaredo.com' },
	{ id: 3, company: 'Laredo Federal Credit Union', url: 'http://www.laredofcu.org' }
]

export default function LinkList(props) {
	return (
		<StyledSection>
			<h2>New Leads</h2>
			{leads.map((lead, index) => {
				return ( <LeadItem lead={lead} /> )
			})}
		</StyledSection>
	)
}

const StyledSection = styled.section`
	margin: 0px;
	padding: 0px;
	/* background: white; */
	/* border: ${SECONDARY_SHADE}; */
	h2 {
		margin-bottom: 30px;
		text-align: center;
		color: #232323;
		/* color: ${MEDIUM_COLOR}; */
	}
`