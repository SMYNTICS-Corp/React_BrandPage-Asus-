import { useState } from 'react'
import Navigation from './components/Navigation'
import Main_body from './components/Main_body'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Main_body/>
    </>  
  )
}

export default App
