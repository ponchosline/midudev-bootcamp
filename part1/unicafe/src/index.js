import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Boton = (props) => {
  return(
    <div>
      <button onClick={props.onclick}>{props.text}</button>
    </div>
    )
}
const Estadistica = (props) => {
  return(
    <div>
      {props.text} {props.value}
    </div>
  )
}
const Estadisticas = (props) => {
  const todos = props.b+ props.n+props.m
  const prom = todos / 3
  const porc = (props.b*100)/todos
  if (todos===0){
    return (<div>No feedback given</div>)
  }
  return(
  <div>
    <Estadistica text="Bueno" value={props.b} />
    <Estadistica text="Neutral" value={props.n} />
    <Estadistica text="Malo" value={props.m} />
    <Estadistica text="Todos" value={todos} />
    <Estadistica text="Promedio" value={prom} />
    <Estadistica text="Porcentaje positivos" value={(porc + " %")} />
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleClickBueno = () => {
    setGood(good+1)
  }
  const handleClickNeutral = () => {
    setNeutral( neutral+1)
  }
  const handleClickMalo = () => {
    setBad( bad+1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Boton text="Bueno" onclick={handleClickBueno}/>
      <Boton text="Neutro" onclick={handleClickNeutral}/>
      <Boton text="Malo" onclick={handleClickMalo}/>
      <h1>Statistics</h1>
      <Estadisticas b={good} n={neutral} m={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)