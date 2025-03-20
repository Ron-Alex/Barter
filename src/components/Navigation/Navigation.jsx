import './Navigation.css'
import { Link, useNavigate, NavLink } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';
const Navigation = ({signIn, onSignIn}) => {

    const {isAuthenticated, loginWithRedirect} = useAuth0();

    return(
        <div className="navbar">
            <nav className='nav'>
                {/* <NavLink to ="/home" style={() => ({position: 'absolute', left: '2em'})} end>
                Home
                </NavLink>
                <NavLink to= "/SignIn" className={({isActive}) => isActive ? "text-purple-500" : "text-red-600"}end>Sign In</NavLink>
                <NavLink to= "/Register" end>Register</NavLink> */}

                
                <Link to="/home" className='absolute left-4'> Home </Link>
                
                {isAuthenticated && (
                    <Link to="/home">Sign Out</Link>
                )}
                {!isAuthenticated && (
                    <>
                    <Link to="/signin">Sign In</Link>
                    <Link to="/register">Register</Link>
                    </>
                )}
                
            </nav>
        </div>
    )
}

export default Navigation;