const Course = ({ course }) => {
    console.log('hey!', course)
    const totalExercises = course.parts.reduce((sum, course) => sum + course.exercises, 0)
      return (
        <div>
        <h1>Web development curriculum</h1>
          <h1>{course.name}</h1>
          <ul>
          {course.parts.map(note => <li key={note.id}>{note.name}  {note.exercises}</li>)}
          </ul>
          <b>Total exercises: {totalExercises}</b>
        </div>
      )
    }

    export default Course