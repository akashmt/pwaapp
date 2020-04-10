import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../../firebase'

import { PRIMARY_COLOR, PRIMARY_SHADE, PRIMARY_TINT,
				 SECONDARY_COLOR, SECONDARY_SHADE, SECONDARY_TINT,
				 MEDIUM_COLOR, MEDIUM_SHADE, MEDIUM_TINT,
				 LIGHT_COLOR, LIGHT_SHADE,
				 BORDER_RADIUS, BOX_SHADOW } from '../_consts'

export default function UserActions() {
  const { user, firebase } = React.useContext(FirebaseContext)
	return (
		<StyledNav>
      {user ? (
        <React.Fragment>
          <div>
            <img src="https://i.pravatar.cc/30?img=70" alt="profile image" />
            <p>{user.displayName}</p>
          </div>
          <div><p onClick={() => firebase.logout()}>Logout</p></div>
        </React.Fragment>
      ) : (
        <div><p><Link to="/leadsapp/login">Login</Link></p></div>
      )}
		</StyledNav>
	)
}

const StyledNav = styled.nav`
	margin: 0px 0px 0px 0px;
	padding: 10px 15px 10px 15px;
	color: ${PRIMARY_COLOR};
	background-color: ${SECONDARY_COLOR};
	border-bottom: 1px solid ${MEDIUM_COLOR};
	/* box-shadow: ${BOX_SHADOW}; */
	p {
		margin: 0px 0px 0px 0px;
	}
	display: flex;
	flex-direction: row; 
	justify-content: space-between;
	flex-wrap: nowrap;
	align-items: center;
	align-content: center; 
	div {
		display: flex;
		flex-direction: row; 
		justify-content: flex-start;
		flex-wrap: nowrap;
		align-items: center;
		align-content: center; 
		img {
			margin-right: 5px;
			border-radius: 50%;
		}
	}
`