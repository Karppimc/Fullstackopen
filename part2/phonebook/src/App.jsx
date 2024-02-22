import { useState } from 'react'
import {useState, useEffect} from 'react'
import Person from './components/Person'
import SearchFilter from './components/SearchFilter'
import Form from './components/Form'
import List from './components/List'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [numbers, setNumbers] = useState([
    { number: '040-1234567' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchPerson, setSearchPerson] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personExists = persons.find(person => person.name === newName)
    if (personExists) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        id: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchPerson = (event) => {
    console.log(event.target.value)
    setSearchPerson(event.target.value)
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchPerson.toLowerCase()))

  const clearSearch = () => {
    setSearchTerm('')
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter searchTerm={searchPerson} onSearchChange={handleSearchPerson} onClearSearch={clearSearch} />
      <h2>Add a new</h2>
      <Form newName={newName} newNumber={newNumber} onNameChange={handleNameChange} onNumberChange={handleNumberChange} onAddPerson={addPerson} />
      <h2>Numbers</h2>
      <List persons={filteredPersons} />
    </div>
  )
}

export default App