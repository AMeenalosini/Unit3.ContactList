import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
       // <div>Selected Contact View</div>
       <SelectedContact
       selectedContactId={selectedContactId}
       setSelectedContactId={setSelectedContactId}
     /> 
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}


