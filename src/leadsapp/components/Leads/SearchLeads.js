import React from "react"
import LeadItem from "./LeadItem"
import FirebaseContext from "../../../firebase/context"

function SearchLeads() {
  const { firebase } = React.useContext(FirebaseContext)
  const [filteredLeads, setFilteredLeads] = React.useState([])
  const [leads, setLeads] = React.useState([])
  const [filter, setFilter] = React.useState("")

  React.useEffect(() => {
    getInitialLeads()
  }, [])

  function getInitialLeads() {
    firebase.db
      .collection('links')
      .get()
      .then(snapshot => {
        const leads = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
        });
        setLeads(leads)
      })
  }

  function handleSearch(event) {
    event.preventDefault()
    const query = filter.toLowerCase()
    const matchedLeads = leads.filter(lead => {
      return (
        lead.description.toLowerCase().includes(query) ||
        lead.url.toLowerCase().includes(query) ||
        lead.postedBy.name.toLowerCase().includes(query)
      )
    })
    setFilteredLeads(matchedLeads)
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div>
          Search <input onChange={event => setFilter(event.target.value)} />
          <button>OK</button>
        </div>
      </form>
      {filteredLeads.map((filteredLink, index) => (
        <LeadItem
          key={filteredLink.id}
          showCount={false}
          lead={filteredLink}
          index={index}
        />
      ))}
    </div>
  )
}

export default SearchLeads
