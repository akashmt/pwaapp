import React from 'react'
import styled from 'styled-components'
import { PRIMARY_COLOR, PRIMARY_SHADE, PRIMARY_TINT,
				 SECONDARY_COLOR, SECONDARY_SHADE, SECONDARY_TINT,
				 MEDIUM_COLOR, MEDIUM_SHADE, MEDIUM_TINT,
         LIGHT_COLOR, LIGHT_SHADE } from '../../_consts'

import FirebaseContext from "../../../firebase/context"
import LeadItem from './LeadItem'


export default function RoleBasedLeadList(props) {
  const { user,firebase } = React.useContext(FirebaseContext)
  const [ leads, setLeads ] = React.useState([])
  const [ loading, setLoading ] = React.useState(false)
  const [ userRole, setUserRole ] = React.useState({})
  const userRef = firebase.db.collection('users').doc(user.uid)

  
  // Get Login user role info
  React.useEffect(() => {
    getUserRoleInfo()
  }, [])

  function getUserRoleInfo() {
    userRef.get().then(doc => {
      if (doc.data().roleId) {
        doc.data().roleId.get().then(doc => {
          setUserRole({ ...doc.data(), id: doc.id })
        })
      }
    })
  }

  // Get leads based on role
  React.useEffect(() => {
		getRoleBasedLeads()
  }, [userRole])

  function getRoleBasedLeads() {
    setLoading(true)
    if(userRole.id) {
      firebase.db.collection('links').where('postedBy.rid', '>=', Number(userRole.id)).onSnapshot(handleSnapshot)
    }
    return () => {}
  }
  
  function handleSnapshot(snapshot) {
		const leads = snapshot.docs.map(doc => {
			return { id: doc.id, ...doc.data() }
    })
		setLeads(leads)
    setLoading(false)
  }

 
  return (
    <StyledSection style={{ opacity: loading ? 0.25 : 1 }}>
      <h2>Role Based Leads - {userRole.name}</h2>
      {leads.map((link, index) => {
        return ( 
          <LeadItem 	
            key={link.id}
            showCount={true}
            lead={link}
            index={index+1} /> 
        )
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