import { useState } from 'react'
import './App.css'

function App() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <>
      <div className="hello-container" onClick={handleClick}>
        <h1 className="hello-text">
          <span>H</span>
          <span>e</span>
          <span>l</span>
          <span>l</span>
          <span>o</span>
        </h1>
      </div>
      <div className="decoration">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </>
  )
}

export default App
