import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

import { emailSignUp, socialMediaAuth } from '../../../services/authServices';

const SignUp = () => {

    const [emailId, setEmailId] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const signUpSubmit = async (e) => {
        e.preventDefault();
        alert(emailId+ " Signed Up !");
        // if(name==="" || emailId==="" || mobile==="" || password===""){
        //     toast.error("Please fill all details !");
        // } else {
        //     const formData = {
        //         name, mobile, password, email:emailId
        //     }
    
        //     const {user, error} = await emailSignUp(formData);
    
        //     if(error){
        //         switch (error.code) {
        //             case 'auth/email-already-in-use':
        //                 toast.error(`Email address ${emailId} already in use.`);
        //                 break;
        //             case 'auth/invalid-email':
        //                 toast.error(`Email address ${emailId} is invalid.`);
        //                 break;
        //             case 'auth/operation-not-allowed':
        //                 toast.error(`Error during sign up.`);
        //                 break;
        //             case 'auth/weak-password':
        //                 toast.error('Password is not strong enough.');
        //                 // Add additional characters including special characters and numbers.
        //                 break;
        //             default:
        //                 toast.error(error.message);
        //                 break;
        //         }
        //     }
        //     else{
        //         console.log(user);
        //         setName("");
        //         setMobile("");
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
                                <span>SignUp to Dashboard</span>
                                <form className="mt-5 text-start" style={{height:"fit-content"}} onSubmit={(e) => signUpSubmit(e)}>
                                    <div>
                                        <div className="mb-3 form-group">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Enter Name" 
                                                id="name" 
                                                aria-describedby="emailHelp" 
                                                value={name} 
                                                onChange={(e)=>setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3 form-group">
                                            <label htmlFor="mobile" className="form-label">Mobile No</label>
                                            <input 
                                                type="text"
                                                maxLength={10}
                                                className="form-control" 
                                                placeholder="Enter Mobile No" 
                                                id="mobile" 
                                                aria-describedby="emailHelp" 
                                                value={mobile} 
                                                onChange={(e)=>setMobile(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3 form-group">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email ID</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Enter Email" 
                                                id="exampleInputEmail1" 
                                                aria-describedby="emailHelp"
                                                value={emailId} 
                                                onChange={(e)=>setEmailId(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-5 form-group">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
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
                                        <button type="submit" className="btn btn-primary w-100 mb-3" >SignUp</button>
                                    </div>

                                    <hr className="my-4" />

                                    <button 
                                        className="btn btn-lg btn-block btn-primary w-100 mb-2" 
                                        style={{border:"none",backgroundColor:"#dd4b39"}} 
                                        type="submit"
                                        onClick={() => socialLogin(new GoogleAuthProvider())}
                                    >
                                        <FontAwesomeIcon className='me-1' icon={faGoogle} /> Sign up with google
                                    </button>
                                    <button 
                                        className="btn btn-lg btn-block btn-primary w-100 mb-2" 
                                        style={{border:"none",backgroundColor:"#3b5998"}} 
                                        type="submit"
                                        onClick={() => socialLogin(new FacebookAuthProvider())}
                                    >
                                        <FontAwesomeIcon className='me-1' icon={faFacebookF} /> Sign up with facebook
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <ToastContainer toastClassName="colored-toast"  autoClose={3000} hideProgressBar />
                </div>
            </section>
        </div>
    )
}

export default SignUp
