import React from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import { PRIMARY_COLOR, PRIMARY_SHADE, PRIMARY_TINT,
	SECONDARY_COLOR, SECONDARY_SHADE, SECONDARY_TINT,
	DARK_COLOR, DARK_SHADE, DARK_TINT,
	MEDIUM_COLOR, MEDIUM_SHADE, MEDIUM_TINT,
	LIGHT_COLOR, LIGHT_SHADE, 
  BORDER_RADIUS, BOX_SHADOW } from '../../_consts'
  
import { getDomain } from '../../utils'
import distanceInWordsToNow from "date-fns/distance_in_words_to_now"
import FirebaseContext from '../../../firebase/context'

function LeadItem( { lead, index, showCount, history } ) {

  const { firebase, user } = React.useContext(FirebaseContext)
  function handleVote() {
		if ( !user ) {
			history.push("/leadsapp/login")
		} else {
			const voteRef = firebase.db.collection('links').doc(lead.id)
			voteRef.get().then(doc => {
				if ( doc.exists ) {
					const previousVotes = doc.data().votes
					const vote = { votedBy: { id: user.uid, name: user.displayName } }
					const updatedVotes = [ ...previousVotes, vote ]
					const voteCount = updatedVotes.length
					voteRef.update({ votes: updatedVotes, voteCount })
				}
			})
		}
	}

	function handleDeleteLink() {
		const linkRef = firebase.db.collection('links').doc(lead.id)
		linkRef.delete().then(() => {
			console.log(`Document with ID ${lead.id} deleted`)
		}).catch(err => {
			console.log("Error deleting document: ", err)
		})
	}

	const postedByAuthUser = user && user.uid === lead.postedBy.id

	return (
		<StyledArticle className="Lead-item">
      {showCount && 
			<section className="position">{index}</section>
      }
			<section className="details">
				<h3>{lead.description}</h3>
				<p><a href={lead.url} target="_blank" rel="noopener noreferrer">{getDomain(lead.url)}</a></p>
				<div className="posted">
					<span>Posted by {lead.postedBy.name}</span>
					<time>{distanceInWordsToNow(lead.created)}</time>
				</div> 
				<div className="interactions">
					<span onClick={handleVote}><i>⇧</i> {lead.voteCount} votes</span>
          <Link to={`/leadsapp/lead/${lead.id}`}>
						{lead.comments.length > 0
							? `${lead.comments.length} comments`
							: "discuss"
						}
					</Link>
					{postedByAuthUser && (
						<>
							{" | "}
							<span className="delete-button" onClick={handleDeleteLink}>delete</span>
						</>
					)}
				</div>
			</section>
		</StyledArticle>
	)
}

export default withRouter(LeadItem)

const StyledArticle = styled.article`
	display: flex;
	flex-direction: row; 
	justify-content: flex-start;
	flex-wrap: nowrap;
	align-items: flex-start;
	align-content: flex-start;
	margin: 0px 0px 30px 0px;
	padding: 10px;
	background-color: ${LIGHT_COLOR};
	box-shadow: ${BOX_SHADOW};
	border-radius: ${BORDER_RADIUS};
	section.position {
		display: inline-block;
		margin-right: 10px;
		/* font-size: 1.4em; */
		width: 1.6em; 
		line-height: 1.6em;
		font-weight: bold;
		text-align: center;
		color: ${LIGHT_COLOR};
		background-color: ${PRIMARY_COLOR};
		-webkit-border-radius: 0.8em;
			 -moz-border-radius: 0.8em;
						border-radius: 0.8em;
	}
	section.details {	
		width: 100%;
		h3, p { 
			margin: 0px 0px 5px 0px;
		}
		h3 { 
			font-size: 1.1em;
			color: ${DARK_TINT};
		}
		p {  
			a { }
		}
		div.posted { 
			margin: 0px 0px 5px 0px !important;
			color: ${MEDIUM_SHADE};
			span {
				display: block;
				margin-bottom: 3px;
				font-size: .9em;
			}
			time { 
				display: block;
				font-style: italic;
				font-size: .8em;
				text-indent: 0px;
			}
		}
		div.interactions {
			display: flex;
			flex-direction: row; 
			justify-content: space-between;
			flex-wrap: nowrap;
			align-items: center;
			align-content: center;
			span {
				i { margin-right: 5px; color: ${PRIMARY_TINT}; }
				display: inline;
				margin-right: 15px;
			}
			a { 
				display: inline;
				padding: 0px 6px 1px 6px;
				color: ${LIGHT_COLOR};
				font-weight: bold;
				font-size: .8em;
				background-color: ${PRIMARY_COLOR};
				border-radius: ${BORDER_RADIUS};
			}
		}
	}
`