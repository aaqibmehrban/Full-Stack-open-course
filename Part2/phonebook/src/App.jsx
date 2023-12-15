import { useState } from 'react'

const Phonebook = (props) => {
  return (
    <div>
      <p>{props.name} {props.phone}</p>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
  number: '050-1234567' },
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const addPhone = (event) => {  
    event.preventDefault()
    const inputVal = document.getElementById('input-field').value;

    if (!persons.some(element => element.name === inputVal)){
        const noteObject = {
          name: newName,
          number: newPhone,
      }
      setPersons(persons.concat(noteObject))
      setNewName('')
      setNewPhone('')
    }
    else{
      alert(`${inputVal} is already added to phonebook`)
    }
    
}

  const handleInputChange = (event) => {    
    console.log(event.target.value)    
    setNewName(event.target.value) 
   }
  const handlePhoneChange = (event) => {    
  console.log(event.target.value)    
  setNewPhone(event.target.value) 
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPhone}>
        <div>name: <input id='input-field' value={newName} onChange={handleInputChange}/></div>
        <div>number: <input id='input-phone' value={newPhone} onChange={handlePhoneChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <div>
      {persons.map(p => 
          <Phonebook key={p.name} name={p.name} phone={p.number}/>
        )}
      </div>
    </div>
  )
}

export default App