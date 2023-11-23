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
      <Part part={props.part_list[0]} total_excercises={props.excercise_list[0]}></Part>
      <Part part={props.part_list[1]} total_excercises={props.excercise_list[1]}></Part>
      <Part part={props.part_list[2]} total_excercises={props.excercise_list[2]}></Part>
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
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header header={course}/>
      <Content
        part_list={[part1['name'],part2['name'],part3['name']]} excercise_list={[part1['exercises'],part2['exercises'],part3['exercises']]}
      />
      <Total exercises1={part1['exercises']} exercises2={part2['exercises']} exercises3={part3['exercises']}></Total>
    </div>
  )
}

export default App;

