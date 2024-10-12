/* eslint-disable react/prop-types */
  import { useState } from 'react'

  const Button = ({ onClick, text }) => {
    return (
      <button onClick={onClick}> {text} </button>
    )
  }

  const Title = ({ title }) => {
    return (
      <h2>{title}</h2>
    );
  };

  const Statistics = ({good, neutral, bad, total, average, positivePercentage}) => {

    const statistics = [
      { label: "Good", value: good },
      { label: "Neutral", value: neutral },
      { label: "Bad", value: bad },
      { label: "All", value: total },
      { label: "Average", value: average },
      { label: "Positive", value: positivePercentage + "%" }
    ];
  

    return (
      <div>
        <Title title="Statistics" />
        <ul>
          {statistics.map((stat, index) => (
            <li key={index}>{stat.label}: {stat.value}</li>
          ))}
        </ul>
      </div>
    );
  };

  const App = () => {

    // guarda los clics de cada botón en su propio estado
    const [good, setGood] = useState(0)
    const [bad, setBad] = useState(0)
    const [neutral, setNeutral] = useState(0)

  // goodPoint = 1;
  // neutralPoint = 0;
  // badPoint = -1;
    
    const handleClickGood = () => setGood(good+1)
    const handleClickNeutral = () => setNeutral(neutral+1)
    const handleClickBad = () => setBad(bad+1)

    const totalFeedback = good + bad + neutral
    const average = totalFeedback > 0 ? ((good * 1) + (neutral * 0) + (bad * -1)) / totalFeedback : 0
    const positivePercentage = totalFeedback > 0 ? (good / totalFeedback) * 100 : 0;

    return (
      <div>
        <Title title="Give Feedback" />
        <Button onClick={handleClickGood} text="Good"/>
        <Button onClick={handleClickNeutral} text="Neutral" />
        <Button onClick={handleClickBad} text="Bad" />

        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad}
          total={totalFeedback} 
          average={average} 
          positivePercentage={positivePercentage}
        /> 
      </div>
    )
  }

  export default App