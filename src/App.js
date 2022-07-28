import React, { useState } from "react"
import './App.css';
import contactData from "./contacts.json";

function App() {
  const [showContacts, setShowContacts] = useState([...contactData].splice(0,5));
  const [remainingContacts, setRemainingContacts] = useState([...contactData].splice(5));
  function addRandomContact(showContacts, remainingContacts) {
    const random = Math.round(Math.random()*remainingContacts.length);
    showContacts.push(remainingContacts[random]);
    setShowContacts(showContacts);
    remainingContacts = remainingContacts.filter(contact => contact.name !== remainingContacts[random].name);
    setRemainingContacts(remainingContacts);
  };
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button className="random-btn" onClick={() => addRandomContact(showContacts, remainingContacts)}>Add Random Contact</button>
      <table className="contactTable">
        <tbody>
          <tr className="tableHeaders">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
          {showContacts.map(contact => {
            return (
              <tr className="tableContact" key={contact.name}>
                <th><img src={contact.pictureUrl} alt={contact.name}></img></th>
                <th>{contact.name}</th>
                <th>{contact.popularity.toFixed(2)}</th>
                {contact.wonOscar && <th>🏆</th>}
                {contact.wonEmmy && <th>🏆</th>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default App;
