/* eslint-disable react/prop-types */
import { useState } from 'react';

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}> {text} </button>
  );
};

const Title = ({ title }) => {
  return (
    <h2>{title}</h2>
  );
};

const Statistics = ({ good, neutral, bad, total, average, positivePercentage }) => {

  if(good === 0 & neutral === 0 & bad=== 0 ){
    return <p>No feedback given</p>
  }
  return (
    <div>
      <Title title="Statistics" />
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>All: {total}</li>
        <li>Average: {average.toFixed(2)}</li>
        <li>Percentage: {positivePercentage.toFixed(2)}%</li>
      </ul>
    </div>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  
  const handleClickGood = () => setGood(good + 1);
  const handleClickNeutral = () => setNeutral(neutral + 1);
  const handleClickBad = () => setBad(bad + 1);

  const totalFeedback = good + bad + neutral;
  const average = totalFeedback > 0 && (good - bad) / totalFeedback;
  const positivePercentage = totalFeedback > 0 && (good / totalFeedback) * 100;

  return (
    <div>
      <Title title="Give Feedback" />
      <Button onClick={handleClickGood} text="Good" />
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
  );
};

export default App;