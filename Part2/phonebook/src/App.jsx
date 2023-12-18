import { useState, useEffect } from 'react'
import axios from 'axios'
import phoneService from './services/phonebook'

const Phonebook = (props) => {
  return (
    <div>
      <p>{props.name} {props.phone}</p>
    </div>
  )
}

const Persons = (props)=>{
  return (
    <div>
      {props.filterPhoneValue.map(p => 
        <Phonebook key={p.id} name={p.name} phone={p.number}/>
      )}
    </div>
  )
}

const Filter = (props)=> {
  return (
    <div>
        filter shown with <input onChange={props.onChange}/>
      </div>
  )
}

const PersonForm = (props) => {
    return (
      <form onSubmit={props.addPhone}>
        <div>name: <input id='input-field' value={props.newName} onChange={props.handleInputChange}/></div>
        <div>number: <input id='input-phone' value={props.newPhone} onChange={props.handlePhoneChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
    )

}

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterPhone,setFilterPhone] = useState([])

  useEffect(() => {       
    phoneService.getAll()
    .then(response => {         
      setPersons(response.data) 
      setFilterPhone(response.data)     
    })  
  }, [])

  const addPhone = (event) => {  
    event.preventDefault()
    const inputVal = document.getElementById('input-field').value;

    if (!persons.some(element => element.name === inputVal)){
        const noteObject = {
          name: newName,
          number: newPhone,
      }
      phoneService.create(noteObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setFilterPhone(filterPhone.concat(response.data))
        setNewName('')
        setNewPhone('')  
      
      })


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
      <Filter onChange={filterPhoneBook}/>
      <h3>add a new</h3>
      <PersonForm 
        addPhone={addPhone}
        newName={newName}
        newPhone={newPhone}
        handleInputChange={handleInputChange}
        handlePhoneChange={handlePhoneChange}        
      />
      <h3>Numbers</h3>
      <Persons filterPhoneValue={filterPhone}/>
    </div>
  )
}

export default App