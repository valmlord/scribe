import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ScribeLogo from '/scribe-logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={ScribeLogo} className="logo" alt="Scribe logo" />
        </a>
        <a href="https://reacta.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Scribe + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Scribe and React logos to learn more
      </p>
    </>
  )
}

export default App
