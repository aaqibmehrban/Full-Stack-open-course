import React from 'react';


const Header = (props) =>{
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  )
}


const Content = (props) =>{
  const {parts} = props
  return (
    <div>
      {parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
    </div>
  )
}

const Part = (props) =>{
  return (
    <div>
      <p>{props.part} {props.total_excercises}</p>
    </div>
  )
}

const Course = (props) => {
  const {course} = props
  return (
    <div>
      <Header>{course.name}</Header>
      <Content parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App