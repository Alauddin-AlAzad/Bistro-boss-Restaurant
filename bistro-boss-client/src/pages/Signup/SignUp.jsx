import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import authenticationImg from '../../assets/others/authentication2.png';
import authenticationBg from '../../assets/others/authentication.png';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import toast from "react-hot-toast";

const SignUp = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                toast.success("Account created successfully!");
                reset();
                navigate(from, { replace: true });
            })

    }
    // const handleSignUp = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(name, email, password);
    // };

    const handleSignUpGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                toast.success("Signed in with Google successfully!");
                navigate(from, { replace: true });
            })
    }

    return (

        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div
                className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-cover bg-center"
                style={{ backgroundImage: `url(${authenticationBg})` }}
            >

                <div className="w-full max-w-5xl shadow-2xl border border-gray-200 p-8 md:p-14">
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">


                        <div className="w-full lg:w-1/2 max-w-sm mx-auto">
                            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Sign Up</h2>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        {...register("name", { required: true })}
                                        placeholder="Type here"

                                        className="w-full bg-white border border-gray-300 px-4 py-3 rounded-md outline-none text-sm text-gray-700 placeholder-gray-400"
                                    />
                                    {errors.name && <span className="text-xs text-red-500 font-medium mt-1">
                                        name is required
                                    </span>}
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        {...register("email", { required: true })}

                                        placeholder="Type here"

                                        className="w-full bg-white border border-gray-300 px-4 py-3 rounded-md outline-none text-sm text-gray-700 placeholder-gray-400"
                                    />
                                    {errors.email && <span className="text-xs text-red-500 font-medium mt-1">
                                        email is required
                                    </span>}
                                </div>


                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold text-gray-700">Password</label>
                                    <input
                                        type="password"
                                        name="password"

                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|:;"'<>,.?/~`])/

                                        })}
                                        placeholder="Enter your password"

                                        className="w-full bg-white border border-gray-300 px-4 py-3 rounded-md outline-none text-sm text-gray-700 placeholder-gray-400"
                                    />
                                    {/* {errors.password && <span className="text-xs text-red-500 font-medium mt-1">
                                    password is required
                                </span>} */}
                                    {errors.password?.type === 'minLength' && <span className="text-xs text-red-500 font-medium mt-1">
                                        password must be 6 characters
                                    </span>}
                                    {errors.password?.type === 'maxLength' && <span className="text-xs text-red-500 font-medium mt-1">
                                        password must be less than 20 characters
                                    </span>}
                                    {errors.password?.type === 'pattern' && <span className="text-xs text-red-500 font-medium mt-1">
                                        password must have one uppercase,one number and one special characters
                                    </span>}

                                </div>


                                <div className="pt-2">
                                    <input className="w-full bg-[#D1A054] hover:bg-[#b88942] text-white font-semibold py-3 rounded-md transition duration-200 cursor-pointer" type="submit" value="Sign Up" />
                                </div>
                            </form>


                            <div className="text-center mt-5">
                                <p className="text-xs md:text-sm font-medium text-[#D1A054]">
                                    Already registered? <Link to="/login" className="font-bold hover:underline">Go to log in</Link>
                                </p>
                                <p className="text-xs text-gray-500 mt-3 font-medium">Or sign up with</p>
                            </div>


                            <div className="flex justify-center items-center gap-4 mt-3">
                                <button type="button" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition cursor-pointer">
                                    <FaFacebookF size={14} />
                                </button>
                                <button onClick={handleSignUpGoogle} type="button" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition cursor-pointer">
                                    <FaGoogle size={14} />
                                </button>
                                <button type="button" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition cursor-pointer">
                                    <FaGithub size={14} />
                                </button>
                            </div>

                        </div>


                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img
                                src={authenticationImg}
                                alt="Authentication illustration"
                                className="w-full max-w-sm md:max-w-md object-contain"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;