import React from 'react'
import FirebaseContext from '../../../firebase/context'
import LeadItem from './LeadItem'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

function LeadDetail(props) {
  const { firebase, user } = React.useContext(FirebaseContext)
  const [lead, setLead] = React.useState(null)
  const [commentText, setCommentText] = React.useState("")
  const leadId = props.match.params.leadId
  const leadRef = firebase.db.collection('links').doc(leadId)

  React.useEffect(() => {
    getLead()
  }, [])

  function getLead() {
    leadRef.get().then(doc => {
      setLead({ ...doc.data(), id: doc.id })
    })
  }

  function handleAddComment() {
    if (!user) {
      props.history.push("/leadsapp/login")
    } else {
      leadRef.get().then(doc => {
        if (doc.exists) {
          const previousComments = doc.data().comments
          const comment = {
            postedBy: { id: user.uid, name: user.displayName },
            created: Date.now(),
            text: commentText
          };
          const updatedComments = [...previousComments, comment]
          leadRef.update({ comments: updatedComments })
          setLead(prevState => ({
            ...prevState,
            comments: updatedComments
          }))
          setCommentText("")
        }
      });
    }
  }

  return !lead ? (
    <div>Loading...</div>
  ) : (
    <div>
      <LeadItem showCount={false} lead={lead} />
      <textarea
        onChange={event => setCommentText(event.target.value)}
        value={commentText}
        rows="6"
        cols="60"
      />
      <div>
        <button className="button" onClick={handleAddComment}>
          Add Comment
        </button>
      </div>
      {lead.comments.map((comment, index) => (
        <div key={index}>
          <p className="comment-author">
            {comment.postedBy.name} | {distanceInWordsToNow(comment.created)}
          </p>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
}

export default LeadDetail