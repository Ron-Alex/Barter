import { useNavigate } from "react-router";
import { useAuth0 } from '@auth0/auth0-react';


const SignIn = () => {

    const {isAuthenticated, loginWithRedirect} = useAuth0();

    let navigate = useNavigate();

    return(
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
         onClick={() => loginWithRedirect()}>Sign In</button>
    )
}
export default SignIn;