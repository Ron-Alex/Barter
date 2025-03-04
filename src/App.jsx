import './App.css'
import { useState } from 'react'
import Navigation from './components/Navigation/Navigation.jsx'

function App() {

  const [router, setRouter] = useState('signIn')

  return (
    <div className='App'>
      <Navigation/>
    </div>
  )
}

export default App;
