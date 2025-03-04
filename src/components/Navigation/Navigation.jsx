import './Navigation.css'

const Navigation = () => {
    return(
        <div className="navbar">
            <nav className='nav'>
                <p style={{position: 'absolute', left: '2em'}}>Home</p>
                <p>SignIn</p>
                <p>Register</p>
            </nav>
        </div>
    )
}

export default Navigation;