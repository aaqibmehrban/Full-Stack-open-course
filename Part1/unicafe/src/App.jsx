import { useState } from 'react'


const Header= ({text})=> <h1>{text}</h1>


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


  return (
    <div>
      <Header text='give Feedback'></Header>
      <button onClick={setGoodValue}>good</button>
      <button onClick={setNeutralValue}>neutral</button>
      <button onClick={setBadValue}>bad</button>
      <Header text='Statistics'></Header>
      <p>good {good} </p>
      <p>neutral {neutral} </p>
      <p>bad {bad} </p>
      
    </div>
  )
}

export default App