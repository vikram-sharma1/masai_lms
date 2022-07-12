import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AllRoutes from './routes/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AllRoutes />
    </>
  )
}

export default App
