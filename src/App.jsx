import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BuscaCep } from './components/BuscaCep/BuscaCep'
import { Section } from './components/Section/Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BuscaCep/>
      <Section/>
    </div>
  )
}

export default App
