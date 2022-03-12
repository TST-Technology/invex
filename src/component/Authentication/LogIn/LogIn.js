import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { emailLogIn, socialMediaAuth } from '../../../services/authServices';
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import InvexRoutes from '../../../InvexRoutes';

const LogIn = () => {

    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");

    const logInSubmit = async (e) => {
        e.preventDefault();
        alert(emailId+"logged in");
        // if(emailId==="" || password===""){
        //     toast.error("Please fill all details !");
        // } else {
        //     const formData = {
        //         email:emailId, password
        //     }

        //     const {user, error} = await emailLogIn(formData);

        //     if(error){
        //         console.log(error.code);
        //         switch (error.code) {
        //             case 'auth/user-not-found':
        //                 toast.error(`User not found for ${emailId} !`)
        //                 break;
        //             case 'auth/wrong-password':
        //                 toast.error(`Please Enter Correct Password !`)
        //                 break;
        //             case 'auth/invalid-email':
        //                 toast.error(`Email address ${emailId} is invalid.`);
        //                 break;
        //             case 'auth/operation-not-allowed':
        //                 toast.error(`Error during sign up.`);
        //                 break;
        //             default:
        //                 toast.error(error.message);
        //                 break;
        //         }
        //     }
        //     else{
        //         console.log(user);
        //         setEmailId("");
        //         setPassword("");
        //     }
        // }

    }

    const socialLogin = async (provider) => {
        alert("User Logged In");
        // const {user, error} = await socialMediaAuth(provider);

        // if(error){
        //     console.log(error.code);
        //     toast.error(error.message);
        // }
        // else{
        //     console.log(user);
        //     setEmailId("");
        //     setPassword("");
        // }
    }

    return (
        <div className="main">
            <section className="login_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="login_form text-lg-center text-left">
                                <a href="javascipt:void(0);" className="d-block"><img src={require("../../Common/Images/invex-b-wealth.png").default} alt="logo" className="img-fluid mb-3"/></a>
                                <span>Login to Dashboard</span>
                                <form className="mt-5 text-start" onSubmit={(e) => logInSubmit(e)}>
                                    <div>
                                        <div className="mb-3 form-group">
                                            <label for="exampleInputEmail1" className="form-label">Email ID</label>
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                placeholder="Enter Email" 
                                                id="exampleInputEmail1" 
                                                aria-describedby="emailHelp" 
                                                value={emailId} 
                                                onChange={(e)=>setEmailId(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-5 form-group">
                                            <label for="exampleInputPassword1" className="form-label">Password</label>
                                            <input 
                                                type="password" 
                                                className="form-control" 
                                                id="exampleInputPassword1" 
                                                placeholder="Enter password" 
                                                value={password} 
                                                onChange={(e)=>setPassword(e.target.value)}
                                            />
                                            <a href="javascript:void(0)" className="forgot_link text-muted">Forgot Password?</a>
                                            {/* <div className="pwdeye">
                                                <i id="eyeChange" className="bi bi-eye-slash" onclick="passwordEnableOrDisable()"></i>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="text-center donthveac">
                                        <button type="submit" className="btn btn-primary w-100 mb-3" >Login</button>
                                        <span className="text-muted">Don’t have an account?</span> <Link to={InvexRoutes.SignUp.path} className="text-primary">Signup</Link>
                                    </div>

                                    <hr className="my-4" />

                                    <button 
                                        className="btn btn-lg btn-block btn-primary w-100 mb-2" 
                                        style={{border:"none",backgroundColor:"#dd4b39"}} type="submit"
                                        onClick={() => socialLogin(new GoogleAuthProvider())}
                                    >
                                        <FontAwesomeIcon className='me-1' icon={faGoogle} /> Sign in with google
                                    </button>
                                    <button 
                                        className="btn btn-lg btn-block btn-primary w-100 mb-2" 
                                        style={{border:"none",backgroundColor:"#3b5998"}} 
                                        type="submit"
                                        onClick={() => socialLogin(new FacebookAuthProvider())}
                                    >
                                        <FontAwesomeIcon className='me-1' icon={faFacebookF} /> Sign in with facebook
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <ToastContainer toastClassName="colored-toast"  autoClose={2000} hideProgressBar />
                </div>
            </section>
        </div>
    )
}

export default LogIn
