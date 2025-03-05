import './App.css'
import { useState } from 'react'
import { useNavigate,  Routes, Route } from 'react-router'
import Navigation from './components/Navigation/Navigation.jsx'
import Homepage from './components/HomePage/HomePage.jsx'
import SignIn from './components/SignIn/SignIn.jsx'
import Register from './components/Register/Register.jsx'
import Landing from './components/Landing/Landing.jsx'

function App() {

  const [signIn, setSignIn] = useState(false);

  const onSignIn = (state) => {
    setSignIn(state);
  }

  return (
    <div className='App'>
      <Navigation signIn={signIn} onSignIn={onSignIn}/>

      <Routes>
        <Route path='/home' element={signIn ? <Homepage/> : <Landing/>}/>
        <Route path='/signin' element={<SignIn onSignIn={onSignIn}/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      
    </div>
  )
}

export default App;
