import { useState } from 'react'
import { Card } from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Card title='outro teste' />
    </div>
  )
}

export default App
