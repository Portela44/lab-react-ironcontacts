import React, {useState} from "react"
import './App.css';
import contacts from "./contacts.json";


function App() {
  const {contactArr, setContacts} = useState([contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]); 
  
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table className="contactTable">
        <tbody>
          <tr className="tableHeaders">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
          <tr className="tableContact">
            <th><img src={contacts[0].pictureUrl} alt={contacts[0].name}></img></th>
            <th>{contacts[0].name}</th>
            <th>{contacts[0].popularity.toFixed(2)}</th>
            {contacts[0].wonOscar && <th>🏆</th>}
            {contacts[0].wonEmmy && <th>🏆</th>}
          </tr>
          <tr className="tableContact">
            <th><img src={contacts[1].pictureUrl} alt={contacts[1].name}></img></th>
            <th>{contacts[1].name}</th>
            <th>{contacts[1].popularity.toFixed(2)}</th>
            {contacts[1].wonOscar && <th>🏆</th>}
            {contacts[1].wonEmmy && <th>🏆</th>}
          </tr>
          <tr className="tableContact">
            <th><img src={contacts[2].pictureUrl} alt={contacts[2].name}></img></th>
            <th>{contacts[2].name}</th>
            <th>{contacts[2].popularity.toFixed(2)}</th>
            {contacts[2].wonOscar && <th>🏆</th>}
            {contacts[2].wonEmmy && <th>🏆</th>}
          </tr>
          <tr className="tableContact">
            <th><img src={contacts[3].pictureUrl} alt={contacts[3].name}></img></th>
            <th>{contacts[3].name}</th>
            <th>{contacts[3].popularity.toFixed(2)}</th>
            {contacts[3].wonOscar && <th>🏆</th>}
            {contacts[3].wonEmmy && <th>🏆</th>}
          </tr>
          <tr className="tableContact">
            <th><img src={contacts[4].pictureUrl} alt={contacts[4].name}></img></th>
            <th>{contacts[4].name}</th>
            <th>{(contacts[4].popularity).toFixed(2)}</th>
            {contacts[4].wonOscar && <th>🏆</th>}
            {contacts[4].wonEmmy && <th>🏆</th>}
          </tr>
        </tbody>
      </table>       
    </div>
  );
}

export default App;
