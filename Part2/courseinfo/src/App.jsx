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
      {parts.map(part => <Part key={part.id} name={part.name} total={part.exercises}></Part>)}
    </div>
  )
}

const Part = (props) =>{
  return (
    <div>
      <p>{props.name} {props.total}</p>
    </div>
  )
}

const Total = (props) => {
  const {parts} = props
  return (
    <div>
      <h3>total of {parts.reduce((s,p) => s+p.exercises,0)} exercises</h3>
    </div>
  )
}

const Course = (props) => {
  const {course} = props
  return (
    <div>
      <Header>{course.name}</Header>
      <Content parts={course.parts} />
      <Total parts={course.parts}></Total>
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <div>
    {courses.map(course => <Course key={course.id} course={course}></Course>)}
  </div>
  
}

export default App