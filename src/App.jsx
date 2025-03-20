import './App.css'

import { useState } from 'react'
import { Routes, Route } from 'react-router'
import { useAuth0 } from '@auth0/auth0-react'

import Navigation from './components/Navigation/Navigation.jsx'
import Homepage from './components/HomePage/HomePage.jsx'
import SignIn from './components/SignIn/SignIn.jsx'
import Register from './components/Register/Register.jsx'
import Landing from './components/Landing/Landing.jsx'

function App() {

  const [signIn, setSignIn] = useState(false);

  const {isLoading, isAuthenticated, error, user, loginWithRedirect, logout} = useAuth0();

  return (
    <div className='App'>
      <Navigation signIn={signIn} /*onSignIn={onSignIn}*//>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={isAuthenticated ? <Homepage/> : <Landing/>}/>
        <Route path='/signin' element={<SignIn /*onSignIn={onSignIn}*//>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      
    </div>
  )
}

export default App;
