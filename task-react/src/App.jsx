import { useState } from 'react'
import './App.css'
import Count from './Counts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count></Count>
    </>
  )
}

export default App
