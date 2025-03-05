import { useMatch, useNavigate } from "react-router";


const SignIn = ({onSignIn}) => {

    let navigate = useNavigate();

    const handleSignIn = () => {
        onSignIn(true);
        navigate('/home');
    }

    return(
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
         onClick={handleSignIn}>Sign In</button>
    )
}
export default SignIn;