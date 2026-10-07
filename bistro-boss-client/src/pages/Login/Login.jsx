import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import authenticationImg from '../../assets/others/authentication2.png';
import authenticationBg from '../../assets/others/authentication.png';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';

import toast from 'react-hot-toast';
const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const [captchaError, setCaptchaError] = useState('');
    const { signIn,signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()

    const form = location.state?.form?.pathname || "/"
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const targetForm = e.target;
        const email = targetForm.email.value;
        const password = targetForm.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Successfully logged in!');
                navigate(form, { replace: true })
            })

    };


    const handleReloadCaptcha = () => {
        loadCaptchaEnginge(6);
        setDisabled(true);
        setCaptchaError('');
    };


    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;

        if (!user_captcha_value) {
            setCaptchaError('');
            setDisabled(true);
            return;
        }

        if (validateCaptcha(user_captcha_value) === true) {
            setDisabled(false);
            setCaptchaError('');
        } else {
            setDisabled(true);
            setCaptchaError('Captcha does not match! Try again.');
        }
    };
    const handleSignUpGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                toast.success("Signed in with Google successfully!");
                navigate(form, { replace: true });
            })
    }

    return (

        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div
                className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-cover bg-center"
                style={{ backgroundImage: `url(${authenticationBg})` }}
            >

                <div className="w-full max-w-5xl shadow-2xl border border-gray-200 p-8 md:p-14 ">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 ">


                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img
                                src={authenticationImg}
                                alt="Authentication illustration"
                                className="w-full max-w-sm md:max-w-md object-contain"
                            />
                        </div>


                        <div className="w-full lg:w-1/2 max-w-sm mx-auto ">
                            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Login</h2>

                            <form onSubmit={handleLogin} className="space-y-4 ">

                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Type here"
                                        className="w-full bg-white border border-gray-300 px-4 py-3 rounded-md outline-none text-sm text-gray-700 placeholder-gray-400"
                                    />
                                </div>


                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        required
                                        placeholder="Enter your password"
                                        className="w-full bg-white border border-gray-300 px-4 py-3 rounded-md outline-none text-sm text-gray-700 placeholder-gray-400"
                                    />
                                </div>


                                <div className="w-full bg-white border border-gray-300 rounded-md py-2.5 px-3 flex items-center">
                                    <LoadCanvasTemplateNoReload />
                                </div>

                                <div className="pt-0.5">
                                    <button
                                        type="button"
                                        onClick={handleReloadCaptcha}
                                        className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
                                    >
                                        Reload Captcha
                                    </button>
                                </div>


                                <div className="flex flex-col space-y-1">
                                    <input
                                        type="text"
                                        name="captcha"
                                        onBlur={handleValidateCaptcha}
                                        onChange={(e) => {
                                            if (e.target.value.length === 6) {
                                                handleValidateCaptcha(e);
                                            }
                                        }}
                                        placeholder="Type here"
                                        className="w-full bg-white border border-gray-300 px-4 py-3 rounded-md outline-none text-sm text-gray-700 placeholder-gray-400"
                                    />
                                    {captchaError && (
                                        <span className="text-xs text-red-500 font-medium">
                                            {captchaError}
                                        </span>
                                    )}
                                </div>


                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={disabled}
                                        className="w-full bg-[#D1A054] hover:bg-[#b88942] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-md transition duration-200 cursor-pointer"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </form>


                            <div className="text-center mt-5">
                                <p className="text-xs md:text-sm font-medium text-[#D1A054]">
                                    New here? <Link to="/signup" className="font-bold hover:underline">Create a New Account</Link>
                                </p>
                                <p className="text-xs text-gray-500 mt-3 font-medium">Or sign in with</p>
                            </div>


                            <div className="flex justify-center items-center gap-4 mt-3">
                                <button type="button" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition">
                                    <FaFacebookF size={14} />
                                </button>
                                <button onClick={handleSignUpGoogle} type="button" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition">
                                    <FaGoogle size={14} />
                                </button>
                                <button type="button" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition">
                                    <FaGithub size={14} />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;