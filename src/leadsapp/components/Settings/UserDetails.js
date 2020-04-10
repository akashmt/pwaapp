import React from 'react'
import FirebaseContext from '../../../firebase/context';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'


function UserDetails(props) {
  const { firebase, user } = React.useContext(FirebaseContext)
  const [ userInfo, setUserInfo ] = React.useState({})
  const [ userRole, setUserRole ] = React.useState({})
  const [roleType, setRoleType] = React.useState("")
  const userId = props.match.params.userId
  const userRef = firebase.db.collection('users').doc(userId)

  React.useEffect(() => {
    getUserInfo()
  }, [])


  function getUserInfo() {
    userRef.get().then(doc => {
      setUserInfo({ ...doc.data(), id: doc.id })
      if (doc.data().roleId) {
        getRoleInfo(doc.data().roleId)
      }
    })
  }

  function getRoleInfo(roleId) {
    roleId.get().then(doc => {
      setUserRole({ ...doc.data(), id: doc.id })
    })
  }

  function handleRole() {
    userRef.get().then(doc => {
      if (doc.exists) {
        const role = firebase.db.doc('roles/' + Number(roleType));
        userRef.update({ roleId: role })
        setUserInfo(prevState => ({
          ...prevState,
          roleId: role
        }))
        getRoleInfo(role)
      }
    });
  }

	return !userInfo ? (
    <div>Loading...</div>
  ) : (
    <div>

      <h4>User - {userInfo.username}</h4>
      <div><b>Email:</b> {userInfo.email}</div>
      <div><b>DisplayName:</b> {userInfo.profile && userInfo.profile.displayName}</div>
      <div><b>Role:</b> {userRole.name}</div>
      <div><b>Created:</b> {distanceInWordsToNow(userInfo.created)}</div><br/>

      <h4>Update User Role</h4>
      <select onChange={event => setRoleType(event.target.value)}>
        <option value="">Select Role</option>
        <option value="1">Super Admin</option>
        <option value="2">Admin</option>
        <option value="3">Sales Manager</option>
        <option value="4">Account Manager</option>
        <option value="5">Associate Manager</option>
        <option value="6">Associate</option>
        <option value="7">Contact</option>
      </select>
      <br/><br/>
      <div>
        <button className="button" onClick={handleRole}>
          Update Role
        </button>
      </div>

    </div>
  );
}

export default UserDetails