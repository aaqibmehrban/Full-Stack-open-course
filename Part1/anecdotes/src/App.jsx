import { useState } from 'react'

const VoteShow =({voteCount}) => <p>has {voteCount} votes</p>

const TopQuote=(props)=>{
  return (
    <div>
      <p>{props.quote}</p>
      <VoteShow voteCount={props.voteCount}></VoteShow>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setMyArray] = useState(new Uint8Array(anecdotes.length));

  const setSelectedValue=() =>{
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const updatePoints = (selected)=>{
    console.log('value of points for array position',selected,'is ',points[selected]);
    const copy=[...points];
    copy[selected]+=1;
    setMyArray(copy);
    console.log('After Update value of points for array position',selected,'is ',points[selected]);
    console.log(points)
  }
  console.log('index value of anecdote',selected)
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <VoteShow voteCount={points[selected]}></VoteShow>
      <button onClick={()=>updatePoints(selected)}>vote</button>
      <button onClick={setSelectedValue}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <TopQuote quote={anecdotes[points.indexOf(Math.max(...points))]} voteCount={Math.max(...points)}></TopQuote>
    </div>
  )
}

export default App