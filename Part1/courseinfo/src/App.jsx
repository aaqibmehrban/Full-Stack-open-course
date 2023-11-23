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
      <p>{props.part} {props.total_excercises}</p>
    </div>
  )
}


const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header header={course}/>
      <Content
        part={part1} total_excercises={exercises1}
      />
      <Content
        part={part2} total_excercises={exercises2}
      />
      <Content
        part={part3} total_excercises={exercises3}
      />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}></Total>
    </div>
  )
}

export default App;

