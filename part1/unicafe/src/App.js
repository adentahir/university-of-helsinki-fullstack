import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Feedback = (props) => {
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={props.good} text='good' />
      <Button handleClick={props.neutral} text='neutral' />
      <Button handleClick={props.bad} text='bad' />
    </div>
  )
}

const Statistics = (props) => {

  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>no feedback given </p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <StatisticsLine text="good" value={props.good} />
      <StatisticsLine text="neutral" value={props.neutral} />
      <StatisticsLine text="bad" value={props.bad} />
      <StatisticsLine text="all" value={props.good + props.bad + props.neutral} />
      <StatisticsLine text="average" value={(props.good - props.bad) / (props.bad + props.good + props.neutral)} />
      <StatisticsLine text="positive" value={props.good / (props.bad + props.good + props.neutral) * 100} symbol="%" />
    </div>
  )
}

const StatisticsLine = (props) => {

  return (
    <tr>
      <td>
        {props.text}
      </td>
      <td>
        {props.value}{props.symbol}
      </td>
    </tr>
  )

}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => { setGood(good + 1) }
  const neutralClick = () => { setNeutral(neutral + 1) }
  const badClick = () => { setBad(bad + 1) }

  return (
    <div>
      <Feedback good={goodClick} neutral={neutralClick} bad={badClick} />
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App

