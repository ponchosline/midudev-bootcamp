import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votos, setVoto] = useState([])
  
  const handlChangeSelected = () => {
    const rand =  Math.round(Math.random()*5)
    console.log(rand)
    setSelected(rand)
    console.log(votos)
  }
  const handlVoto = () => {
    setVoto(votos.concat(selected))
  }
  
  const getMostVotes = () => {
    if(votos.length > 0)
    {
      let max = 0
      let aux = 0
      let maxvoto = 0
      votos.forEach(voto => {
        aux = votos.filter(votos => votos === voto).length
        if(aux > max)
        {
          max =aux
          maxvoto = voto
        }
      })
      
      return maxvoto
    }
  }
  
  return (
    <div>
        <h1>
        Anecdote of the day
        </h1>
      
        {props.anecdotes[selected]}
      <p>
        Cantidad de votos {votos.filter(votos => votos === selected).length}
      </p>
      <p>
      <button onClick={handlVoto}>Votar</button>
      <button onClick={handlChangeSelected}>Siguiente anecdota</button>
      </p>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[getMostVotes()]}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)