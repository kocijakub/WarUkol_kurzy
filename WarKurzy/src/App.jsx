import { useState } from 'react'
import './App.css'
import {Nav} from "./Components/Nav.jsx";
import {CardList} from "./Components/CardList.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
        <CardList/>
    </>
  )
}

export default App
