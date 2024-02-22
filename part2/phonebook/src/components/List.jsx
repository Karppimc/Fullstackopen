import React from 'react'
import Note from './Person'

const List = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => (
        <Note key={person.name} note={person} />
      ))}
    </ul>
  )
}

export default List