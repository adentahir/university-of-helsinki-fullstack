import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part part={props.arr[0].name} exercises={props.arr[0].exercises} />
      <Part part={props.arr[1].name} exercises={props.arr[1].exercises} />
      <Part part={props.arr[2].name} exercises={props.arr[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>{props.part} {props.exercises}</div>
  )
}


const Total = ({ arr }) => {
  return (
    <div>Number of exercises {arr[0].exercises + arr[1].exercises + arr[2].exercises}</div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content arr={course.parts} />
      <Total arr={course.parts} />
    </div>
  )
}

export default App