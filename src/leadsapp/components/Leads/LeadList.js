import React from 'react'
import styled from 'styled-components'
import { PRIMARY_COLOR, PRIMARY_SHADE, PRIMARY_TINT,
				 SECONDARY_COLOR, SECONDARY_SHADE, SECONDARY_TINT,
				 MEDIUM_COLOR, MEDIUM_SHADE, MEDIUM_TINT,
         LIGHT_COLOR, LIGHT_SHADE } from '../../_consts'

import FirebaseContext from "../../../firebase/context"
import LeadItem from './LeadItem'
import { LEADS_PER_PAGE } from '../../utils/consts'
import axios from 'axios'

export default function LeadList(props) {
  const { user,firebase } = React.useContext(FirebaseContext)
  const [ leads, setLeads ] = React.useState([])
  const [ cursor, setCursor ] = React.useState(null)
  const [ firstCursor, setFirstCursor ] = React.useState(null)
  const [ loading, setLoading ] = React.useState(false)
  const [ isPrev, setIsPrev ] = React.useState(false)
	const isNewPage = props.location.pathname.includes("new")
  const isTopPage = props.location.pathname.includes("top")
  const isMyPage = props.location.pathname.includes("myleads")
	const page = Number(props.match.params.page)
  const leadsRef = firebase.db.collection('links')
  const myleadsRef = firebase.db.collection('links').where('postedBy.id', '==', user.uid)

  
  React.useEffect(() => {
    const unsubscribe = getLeads()
		return () => unsubscribe()
  }, [isMyPage,isTopPage, page])
  
  function getLeads() {
		const hasCursor = Boolean(cursor)
    setLoading(true)
    if (isMyPage) {
      return myleadsRef
      .orderBy('created', 'desc')
			.onSnapshot(handleSnapshot)
		}else if (isTopPage) {
			return leadsRef
			.orderBy('voteCount', 'desc')
			.limit(LEADS_PER_PAGE)
			.onSnapshot(handleSnapshot)
		} else if (page === 1) {
			// Home page (or LinkList Page)
			return leadsRef
				.orderBy('created', 'desc')
				.limit(LEADS_PER_PAGE)
				.onSnapshot(handleSnapshot)
		} else if (hasCursor) {
      if(isPrev) {
        return leadsRef
				.orderBy('created','asc')
				.startAfter(firstCursor.created)
				.limit(LEADS_PER_PAGE)
				.onSnapshot(handleSnapshot) 
      } else {
        return leadsRef
          .orderBy('created', 'desc')
          .startAfter(cursor.created)
          .limit(LEADS_PER_PAGE)
          .onSnapshot(handleSnapshot)
      }
		} else {
			const offset = page * LEADS_PER_PAGE - LEADS_PER_PAGE
			axios.get(`https://us-central1-hooks-news-app-ff990.cloudfunctions.net/linksPagination?offest=${offset}`)
				.then(response => {
					const leads = response.data
					const lastLead = leads[leads.length - 1]
					setLeads(leads)
					setCursor(lastLead)
					setLoading(false)
				})
			return () => {}
		}
  }

  function handleSnapshot(snapshot) {
		const leads = snapshot.docs.map(doc => {
			return { id: doc.id, ...doc.data() }
    })
    const firstlead =  leads[0]
    const lastlead =  leads[leads.length-1]
    
		setLeads(leads)
    setCursor(lastlead)
    setFirstCursor(firstlead)
    setLoading(false)
  }
  
  function visitPreviousPage() {
		if (page > 1) {
      setIsPrev(true)
			props.history.push(`/leadsapp/new/${page - 1}`)
		}
	}

	function visitNextPage() {
		if (page < leads.length) {
      setIsPrev(false)
			props.history.push(`/leadsapp/new/${page + 1}`)
		}
	}

	const pageIndex = page ? (page -1) * LEADS_PER_PAGE + 1 : 1 

	return (
		<StyledSection style={{ opacity: loading ? 0.25 : 1 }}>
      { isTopPage
        ? <h2>Top Leads</h2>
        : ( isMyPage
          ? <h2>My Leads</h2>
          : <h2>New Leads</h2>
        )
      }
     
			{leads.map((link, index) => {
				return ( 
          <LeadItem 	
            key={link.id}
            showCount={true}
            lead={link}
            index={index + pageIndex} /> 
        )
      })}
      {isNewPage && (
				<div className="pagination">
					<div className="pointer mr2" onClick={visitPreviousPage}>Previous</div>
					<div className="pointer" onClick={visitNextPage}>Next</div>
				</div>
			)}
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