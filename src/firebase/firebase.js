import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/database';

import firebaseConfig from './config'

// Initialize Firebase
class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig)
		app.analytics()
		this.auth = app.auth()
		this.db = app.firestore()
  }
  
	async register( name, email, password ) {
		const newUser = await this.auth.createUserWithEmailAndPassword(
			email,
			password
    )
    const assignUser = {
      uid: newUser.user.uid,
      username: name,
      email: email,
      roleId: this.db.doc('roles/' + 7),
      profile: {
        displayName: name,
        firstName: '',
        lastName: '',
        bioInfo: ''
      },
      created: Date.now()
    }
    firebase.db.collection('users').doc(newUser.user.uid).set(assignUser)
		return await newUser.user.updateProfile({
      displayName: name,
    })
	}

	async login( email, password ) {
		return await this.auth.signInWithEmailAndPassword(
			email,
			password
		)
	}

	async logout() {
		await this.auth.signOut()
	}

	async resetPassword(email) {
		await this.auth.sendPasswordResetEmail(email)
	}
}

const firebase = new Firebase()
export default firebase