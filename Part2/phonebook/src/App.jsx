import { useState } from 'react'

const Phonebook = (props) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPhone = (event) => {  
    event.preventDefault()
    const inputVal = document.getElementById('input-field').value;

    if (!persons.some(element => element.name === inputVal)){
        const noteObject = {
          name: newName,
      }
      setPersons(persons.concat(noteObject))
      setNewName('')
    }
    else{
      alert(`${inputVal} is already added to phonebook`)
    }
    
}

  const handleInputChange = (event) => {    
    console.log(event.target.value)    
    setNewName(event.target.value) 
   }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPhone}>
        <div>
          name: <input id='input-field' value={newName} onChange={handleInputChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
      {persons.map(p => 
          <Phonebook key={p.name} name={p.name} />
        )}
      </div>
    </div>
  )
}

export default App