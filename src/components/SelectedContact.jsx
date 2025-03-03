import { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null); // State to store the selected contact's details.

  // useEffect to fetch the contact based on selectedContactId
  useEffect(() => {
    if (selectedContactId) {
      fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
        .then(response => response.json())
        .then(data => {
          setContact(data);
          console.log(data);  // Log the contact data to inspect
        })
        .catch(error => console.error("Error fetching contact:", error));
    }
  }, [selectedContactId]);  // The effect runs when selectedContactId changes.

  // Render the contact details
  if (!contact) {
    return <div>Loading contact details...</div>;
  }

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Address: {contact.address.street}, {contact.address.city}</p>
      <p>Company: {contact.company.name}</p>
      <button onClick={() => setSelectedContactId(null)}>Back to List</button>
    </div>
  );
}
