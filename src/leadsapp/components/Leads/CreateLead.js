import React from 'react'
import FirebaseContext from '../../../firebase/context'
import useFormValidation from '../Auth/useFormValidation'
import validateCreateLead from '../Auth/validateCreateLead'

const INITIAL_STATE = {
	description: '',
	url: ''
}

function CreateLead(props) {
  const { firebase, user } = React.useContext(FirebaseContext)
  const [ userRole, setUserRole ] = React.useState({})
  const { handleSubmit, handleChange, values, errors } = useFormValidation(INITIAL_STATE, validateCreateLead, handleCreateLead)
  const userRef = firebase.db.collection('users').doc(user.uid)

  React.useEffect(() => {
    getUserRole()
  }, [])

  function getUserRole() {
    userRef.get().then(doc => {
      if (doc.data().roleId) {
        doc.data().roleId.get().then(doc => {
          setUserRole({ ...doc.data(), id: doc.id })
        })
      }
    })
  }

	function handleCreateLead() {
		if ( !user ) {
			props.history.push("/leadsapp/login")
		} else {
			const { description, url } = values
			const newLead = {
				description,
				url,
				postedBy: {
					id: user.uid,
          name: user.displayName,
          rid: Number(userRole.id) 
				},
				voteCount: 0,
				votes: [],
				comments: [],
				created: Date.now()
			}
			firebase.db.collection('links').add(newLead)
			props.history.push("/leadsapp/")
		}
	}

	return (
		<form className="flex flex-column mt3" onSubmit={handleSubmit}>
			<input 
				className={errors.description && "error-input"}
				type="text"
				name="description"
				value={values.description}
				placeholder="A description for your lead"
				autoComplete="off"
				onChange={handleChange}
			/>
			{errors.description && <p className="error-text">{errors.description}</p>}

			<input 
				className={errors.url && "error-input"}
				type="url"
				name="url"
				value={values.url}
				placeholder="The URL for the lead"
				autoComplete="off"
				onChange={handleChange}
			/>
			{errors.url && <p className="error-text">{errors.url}</p>}

			<button className="button" type="submit">
				Submit
			</button>
		</form>
	)
}

export default CreateLead