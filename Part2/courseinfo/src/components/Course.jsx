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


export default Course