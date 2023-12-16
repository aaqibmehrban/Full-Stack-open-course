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
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterPhone,setFilterPhone] = useState(persons)

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


  const filterPhoneBook = (event) =>{
    setFilterPhone(persons.filter((element)=>element.name.toLowerCase().includes(event.target.value.toLowerCase()))  )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={filterPhoneBook}/>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPhone}>
        <div>name: <input id='input-field' value={newName} onChange={handleInputChange}/></div>
        <div>number: <input id='input-phone' value={newPhone} onChange={handlePhoneChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <div>
      {filterPhone.map(p => 
          <Phonebook key={p.name} name={p.name} phone={p.number}/>
        )}
      </div>
    </div>
  )
}

export default App