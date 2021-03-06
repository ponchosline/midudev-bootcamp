import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
 

  return(
    <div>
      <h1>
       
      {props.course.name}
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
  const partes = props.part.parts
  return(
    <div>
      <Part part={partes[0].name} exercises={partes[0].exercises} />
      <Part part={partes[1].name} exercises={partes[1].exercises} />
      <Part part={partes[2].name} exercises={partes[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  let sum = 0
   props.part.parts.forEach(valor => { sum = sum + valor.exercises  })
  return(
    <div>
      <p>
      Number of exercises {sum}
      </p>
    </div>
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
      <Header course = {course}/>
      <Coment part= {course} />
      <Total part= {course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
