import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from './stories/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Button primary={true} backgroundColor={"#000"} size={"large"} label={`count is ${count}`} onClick={() => setCount((count) => count + 1)}/>
      </header>
    </div>
  )
}

export default App
