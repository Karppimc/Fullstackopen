import React from 'react'

const Form = ({ newName, newNumber, onNameChange, onNumberChange, onAddPerson }) => {
  return (
    <form onSubmit={onAddPerson}>
      <div>
        Name: <input value={newName} onChange={onNameChange} />
      </div>
      <div>
        Numb: <input value={newNumber} onChange={onNumberChange} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default Form