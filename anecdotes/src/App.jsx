//https://fullstackopen.com/es/part1/un_estado_mas_complejo_depurando_aplicaciones_react#ejercicios-1-6-1-14
//1.14*: anecdotes, step 3

/* eslint-disable react/prop-types */

import { useState } from 'react'

const Title = (props) => {
  return(
    <h2>{props.text}</h2>
  )
}

const Button = ({action, text}) => {
  return (
    <button style={{margin: 3, padding: 5}} onClick={action}>{text} </button>
  )
}

const Anecdote = (props) => {
  return (
      <p>{props.anecdote}</p>
  )
}

const Votes = (props) => {
  return (
      <p style={{color: props.color}}>Has {props.points} votes.</p>
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
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  // console.log(`initial votes: ${points}`)
  // console.log(anecdotes[randomAnedoctes]);
  
  const selectRandomAnecdote = () => {
    const randomAnedoctes = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomAnedoctes)
    // console.log(anecdotes[randomAnedoctes])
  }

  const handleVote = () => {
    const copy = [...points];
    copy[selected] += 1; // increase by one the value of selected anecdote 
    setPoints(copy);
    console.log(copy)
  
    // muestra el más votado
    const moreVoted = copy.reduce((a,b)=>Math.max(a,b));
    console.log(`Most voted: ${moreVoted}`)
    // index of most voted
    const indexMoreVoted = copy.indexOf(moreVoted);
    // index anedocte
    console.log(anecdotes[indexMoreVoted])

  }

  const getMostVotedIndex = (points) => {
    const maxVotes = Math.max(...points);
    return points.indexOf(maxVotes);
  };

  return (
    <div>
      <Title text="Anedocte of the Day"/>
      <Anecdote anecdote={anecdotes[selected]}/>
      <Votes color='blue' points={points[selected]}/>
      <Button action={handleVote} text="Vote"   />
      <Button action={selectRandomAnecdote} text="Next anecdote" />
      <Title text="Anecdote with most votes" />
      <Anecdote anecdote={anecdotes[getMostVotedIndex(points)]}/>
      <Votes color='green' points={points[getMostVotedIndex(points)]} />
      
    </div>
  )
}

export default App