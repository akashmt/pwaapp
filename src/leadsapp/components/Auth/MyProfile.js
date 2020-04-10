import React from 'react'
import FirebaseContext from '../../../firebase/context';


function MyProfile(props) {
  const { firebase, user } = React.useContext(FirebaseContext)
  const [ userInfo, setUserInfo ] = React.useState({})
  const [ userRole, setUserRole ] = React.useState({})
  const userRef = firebase.db.collection('users').doc(user.uid)

  React.useEffect(() => {
    getUserInfo()
  }, [])

  function getUserInfo() {
    userRef.get().then(doc => {
      setUserInfo({ ...doc.data(), id: doc.id })
      if (doc.data().roleId) {
        doc.data().roleId.get().then(doc => {
          setUserRole({ ...doc.data(), id: doc.id })
        })
      }
    })
  }
 
  function handleChange(event) {
		event.persist()
		setUserInfo(previous => ({
      ...previous,
      profile:
			({...previous.profile, [event.target.name]: event.target.value})
		}))
  }

  function handleUpdateProfile(event) {
    event.preventDefault()
    userRef.get().then(doc => {
      if (doc.exists) {
        const profile = {
          displayName: userInfo.profile.displayName,
          firstName: userInfo.profile.firstName,
          lastName: userInfo.profile.lastName,
          bioInfo: userInfo.profile.bioInfo
        };
       
        userRef.update({ profile: profile })
      }
    });
		
	}
 
  
	return (
    <>
    <h2>My Profile</h2>
    {userInfo.profile ?
		<form className="flex flex-column mt3" onSubmit={handleUpdateProfile}>
      <h4>User Info</h4>
      <label>UserName</label>
			<input 
				className=""
				type="text"
				name="username"
				value={userInfo.username}
				autoComplete="off"
        disabled
			/>
      <label>User Email</label>
			<input 
				className=""
				type="email"
				name="email"
        value={userInfo.email}
        disabled
			/>

      <h4>User Profile</h4>
      <label>Display Name</label>
      <input 
				className=""
				type="text"
				name="displayName"
				value={userInfo.profile.displayName}
				placeholder="Display Name"
				autoComplete="off"
				onChange={handleChange}
			/>
      <label>First Name</label>
			<input 
				className=""
				type="text"
				name="firstName"
				value={userInfo.profile.firstName}
				placeholder="First Name"
				autoComplete="off"
				onChange={handleChange}
			/>
      <label>Last Name</label>
		  <input 
				className=""
				type="text"
				name="lastName"
				value={userInfo.profile.lastName}
				placeholder="Last Name"
				autoComplete="off"
				onChange={handleChange}
			/>
       <label>Bio Info</label>
      <textarea
        className=""
        name="bioInfo"
        value={userInfo.profile.bioInfo}
        placeholder="Bio Info"
        autoComplete="off"
        onChange={handleChange}
      />
     

      <h4>User Role</h4>
      <input 
				className=""
				type="text"
				name="roleName"
				value={userRole.name}
				autoComplete="off"
        disabled
			/>

			<button className="button" type="submit">
				Submit
			</button>
		</form>
    : null}
    </>
	)
}

export default MyProfile