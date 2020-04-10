import React from 'react'
import FirebaseContext from '../../../firebase/context'
import useFormValidation from '../Auth/useFormValidation'
import validateCreateLink from '../Auth/validateCreateLink'

const INITIAL_STATE = {
	description: '',
	url: ''
}

function CreateLink(props) {
	const { firebase, user } = React.useContext(FirebaseContext)
	const { handleSubmit, handleChange, values, errors } = useFormValidation(INITIAL_STATE, validateCreateLink, handleCreateLink)

	function handleCreateLink() {
		if ( !user ) {
			props.history.push("/linksapp/login")
		} else {
			const { description, url } = values
			const newLink = {
				description,
				url,
				postedBy: {
					id: user.uid,
					name: user.displayName
				},
				voteCount: 0,
				votes: [],
				comments: [],
				created: Date.now()
			}
			firebase.db.collection('links').add(newLink)
			props.history.push("/linksapp/")
		}
	}

	return (
		<form className="flex flex-column mt3" onSubmit={handleSubmit}>
			<input 
				className={errors.description && "error-input"}
				type="text"
				name="description"
				value={values.description}
				placeholder="A description for your link"
				autoComplete="off"
				onChange={handleChange}
			/>
			{errors.description && <p className="error-text">{errors.description}</p>}

			<input 
				className={errors.url && "error-input"}
				type="url"
				name="url"
				value={values.url}
				placeholder="The URL for the link"
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

export default CreateLink