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
                <div data-aos="zoom-in-down">

                    <img className="img-fluid" src="https://i.ibb.co/grkvRPx/account-concept-illustration-114360-399.jpg" alt="" />
                </div>
                <div data-aos="zoom-out-down"><h5>SIGN UP WITH GOOGLE</h5></div>



                <button onClick={handleGoogleLogin} type="button" class="btn btn-outline-dark rounded-0 btn-lg"><i class="fab fa-google"></i> SIGN IN</button>

            </div>
        </div>


    );
};

export default Login;