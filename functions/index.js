const functions = require('firebase-functions');
// const { LINKS_PER_PAGE } = require('../src/utils')
// ** Cant deploy to firebase becuase is require, must hard code
const LINKS_PER_PAGE = 5;

const admin = require("firebase-admin")
admin.initializeApp({
	credential: admin.credential.applicationDefault(),
	databaseURL: "https://hooks-news-app-ff990.firebaseio.com"
})
const db = admin.firestore()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/linksPagination?offest=20
//
exports.linksPagination = functions.https.onRequest((request, response) => {
  request.set('Access-Control-Allow-Origin', '*');
  request.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
  request.set('Access-Control-Allow-Headers', '*');

	response.set('Access-Control-Allow-Origin', "*")
	let linksRef = db.collection('links')
	const offset = Number(request.query.offset)
	linksRef
		.orderBy('created', 'desc')
		.limit(LINKS_PER_PAGE)
		.offset(offset)
		.get()
		.then(snapshot => {
			const links = snapshot.docs.map(doc => {
				return { id: doc.id, ...doc.data() }
			})
			response.json(links)
		})
})
