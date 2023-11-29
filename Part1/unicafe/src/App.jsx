import { useState } from 'react'


const Header= ({text})=> <h1>{text}</h1>

const Statistics = (props) =>{
  return (
    <div>
    <p>good {props.good} </p>
      <p>neutral {props.neutral} </p>
      <p>bad {props.bad} </p>
      <p>all {props.good+props.bad+props.neutral}</p>
      <p>average {props.averageTotal()}</p>
      <p>positive {props.positiveTotal()} %</p>
    </div>
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
      <button onClick={setGoodValue}>good</button>
      <button onClick={setNeutralValue}>neutral</button>
      <button onClick={setBadValue}>bad</button>
      <Header text='Statistics'></Header>
      <Statistics good={good} bad={bad} neutral={neutral} averageTotal={averageTotal} positiveTotal={positiveTotal}></Statistics>
    </div>
  )
}

export default App