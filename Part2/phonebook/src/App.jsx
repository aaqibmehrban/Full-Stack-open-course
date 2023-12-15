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
    const noteObject = {
      name: newName,
  }
  setPersons(persons.concat(noteObject))
  setNewName('')
}

  const handleInputChange = (event) => {    
    console.log(event.target.value)    
    setNewName(event.target.value) 
   }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onClick={addPhone}>
        <div>
          name: <input value={newName} onChange={handleInputChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <p>
      {persons.map(p => 
          <Phonebook key={p.name} name={p.name} />
        )}
      </p>
    </div>
  )
}

export default App