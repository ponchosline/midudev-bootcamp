import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <div>
      <h1>
      {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.part} {props.exercises}
    </div>
  )
}
const Coment = (props) => {
  return(
    <div>
      {props.part} {props.exercises}
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      Number of exercises  {props.total}
     </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Coment part={part1} exercises={exercises1}/>
      <Coment part={part2} exercises={exercises2}/>
      <Coment part={part3} exercises={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

