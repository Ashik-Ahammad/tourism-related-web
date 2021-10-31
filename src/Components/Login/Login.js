import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    console.log('came from', location.state?.from);


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })

    }

    return (
        <div className="login-form mt-5">
            <div className="mt-5">
                <h2>Login</h2>
                <p>Sign in with Google</p>

                <button onClick={handleGoogleLogin} type="button" class="btn btn-outline-dark">Sign in</button>

            </div>
        </div>


    );
};

export default Login;