import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import FirebaseContext from "../../../firebase/context"
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'


export default function SuperAdmin(props) {
  const { firebase } = React.useContext(FirebaseContext)
  const [ usersInfo, setUsersInfo ] = React.useState([])
  const usersRef = firebase.db.collection('users')

  React.useEffect(() => {
    getListedUsers()
  }, [])

  
  function getListedUsers() {
    usersRef
    .get()
      .then(snapshot => {
        const users = snapshot.docs.map(doc => {
          return { ...doc.data() }
        });
        setUsersInfo(users)
      })  
  }

  return (
		<StyledSection>
      <h2>Registered User List</h2>
      <ul>
        {usersInfo && usersInfo.map((userinfo, index) => {
          return ( 
          <li key={index}>
            <h4>User - {userinfo.username}</h4>
            <div><b>Email:</b> {userinfo.email}</div>
            <div><b>DisplayName:</b> {userinfo.profile && userinfo.profile.displayName}</div>
            <div><b>Created:</b> {distanceInWordsToNow(userinfo.created)}</div><br/>
            <Link to={`/leadsapp/settings/users/${userinfo.uid}`}>Edit</Link>
          </li>
          )
        })}
      </ul>

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
  ul {
    li {
      border-bottom: 2px solid black;
      margin-bottom: 30px;
      padding-bottom: 30px;
    }
  }
`