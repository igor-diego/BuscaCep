import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BuscaCep } from './components/BuscaCep/BuscaCep'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BuscaCep/>
    </div>
  )
}

export default App
