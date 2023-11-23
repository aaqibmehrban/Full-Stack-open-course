import React from 'react';

const Header = (props) =>{
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Content = (props) =>{
  return (
    <div>
      <Part part={props.parts[0].name} total_excercises={props.parts[0].exercises}></Part>
      <Part part={props.parts[1].name} total_excercises={props.parts[1].exercises}></Part>
      <Part part={props.parts[2].name} total_excercises={props.parts[2].exercises}></Part>
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


const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App;

