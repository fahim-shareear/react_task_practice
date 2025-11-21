import { useState } from 'react'
import './App.css'
import Count from './Counts'
import ShowHide from '../../Show_Hide'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count></Count>
      <ShowHide></ShowHide>
    </>
  )
}

export default App
