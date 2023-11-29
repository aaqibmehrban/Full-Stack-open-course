import { useState } from 'react'


const Header= ({text})=> <h1>{text}</h1>

const StatisticsLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}


const Statistics = (props) =>{
  if (props.good!=0 || props.bad!=0 || props.neutral!=0){
    return(
      <div>
        <StatisticsLine text='good' value={props.good}></StatisticsLine>
        <StatisticsLine text='neutral' value={props.neutral}></StatisticsLine>
        <StatisticsLine text='bad' value={props.bad}></StatisticsLine>
        <StatisticsLine text='all' value={props.bad+props.good+props.neutral}></StatisticsLine>
        <StatisticsLine text='average' value={props.averageTotal()}></StatisticsLine>
        <StatisticsLine text='postive' value={props.positiveTotal()}></StatisticsLine>
    </div>
    )

  }
  return (
    <div>No feedback given</div>
  )
  
      
}

const Button =(props)=>{
  return (
      <button onClick={props.setValue}>{props.text}</button>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = ()=>{
    setGood(good + 1);
  }

  
  const setNeutralValue = ()=>{
    setNeutral(neutral + 1);
  }
  const setBadValue = ()=>{
    setBad(bad + 1);
  }

  const averageTotal = ()=>{
    return (good - bad)/(good+neutral+bad);
  }
  const positiveTotal = ()=>{
    return good/(good+neutral+bad)*100;
  }

  return (
    <div>
      <Header text='give Feedback'></Header>
      <Button setValue={setGoodValue} text='good'></Button>
      <Button setValue={setNeutralValue} text='neutral'></Button>
      <Button setValue={setBadValue} text='bad'></Button>
      <Header text='Statistics'></Header>
      <Statistics good={good} bad={bad} neutral={neutral} averageTotal={averageTotal} positiveTotal={positiveTotal}></Statistics>
    </div>
  )
}

export default App