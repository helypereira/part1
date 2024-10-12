/* eslint-disable react/prop-types */
  import { useState } from 'react'

  const Button = ({ onClick, text }) => {
    return (
      <button onClick={onClick}> {text} </button>
    )
  }

  const Title = (props) =>{
    return (
      <div>
        <h2>{props.title}</h2>
      </div>
    )
  }

  const Result = ({text, result}) => {
    return (
      <p>{text} {result}</p>
    )
  }


  const App = () => {

    // guarda los clics de cada botón en su propio estado
    const [good, setGood] = useState(0)
    const [bad, setBad] = useState(0)
    const [neutral, setNeutral] = useState(0)


    const handleClickGood = () => setGood(good+1)
    const handleClickNeutral = () => setNeutral(neutral+1)
    const handleClickBad = () => setBad(bad+1)

    return (
      <div>
        <Title title="Give Feedback" />
        <Button onClick={handleClickGood} text="Good"/>
        <Button onClick={handleClickNeutral} text="Neutral" />
        <Button onClick={handleClickBad} text="Bad" />
        <Title title="Statistics" />
        <Result text="Good" result={good} />
        <Result text="Neutral" result={neutral} />
        <Result text="Bad" result={bad} />
      </div>
    )
  }

  export default App