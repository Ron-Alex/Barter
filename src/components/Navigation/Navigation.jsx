import './Navigation.css'
import { Link, useNavigate } from 'react-router';
const Navigation = ({signIn, onSignIn}) => {
    return(
        <div className="navbar">
            <nav className='nav'>
                {/* <NavLink to ="/home" style={() => ({position: 'absolute', left: '2em'})} end>
                Home
                </NavLink>
                <NavLink to= "/SignIn" className={({isActive}) => isActive ? "text-purple-500" : "text-red-600"}end>Sign In</NavLink>
                <NavLink to= "/Register" end>Register</NavLink> */}

                
                <Link to="/home" className='absolute left-4'> Home </Link>
                
                {signIn ? <Link to={"/home"} onClick={() => onSignIn(false)}>Sign Out</Link> : 
                <>
                <Link to="/signin">Sign In</Link>
                <Link to="/Register">Register</Link>
                </>
                }
                
            </nav>
        </div>
    )
}

export default Navigation;