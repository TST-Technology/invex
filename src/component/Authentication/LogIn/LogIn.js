import React, { useState } from 'react'

const LogIn = () => {

    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");

    const logInSubmit = (e) => {

        e.preventDefault();
        window.alert(emailId + " Logged In ");
        setEmailId("");
        setPassword("");
    }

    return (
        <div class="main">
        <section class="login_section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="login_form text-lg-center text-left">
                            <a href="javascipt:void(0);" class="d-block"><img src={require("../../Common/Images/invex-b-wealth.png").default} alt="logo" class="img-fluid mb-3"/></a>
                            <span>Login to Dashboard</span>
                            <form class="mt-5 text-start" onSubmit={(e) => logInSubmit(e)}>
                                <div>
                                    <div class="mb-3 form-group">
                                        <label for="exampleInputEmail1" class="form-label">Email ID</label>
                                        <input 
                                            type="email" 
                                            class="form-control" 
                                            placeholder="Enter Email" 
                                            id="exampleInputEmail1" 
                                            aria-describedby="emailHelp" 
                                            value={emailId} 
                                            onChange={(e)=>setEmailId(e.target.value)}
                                        />
                                    </div>
                                    <div class="mb-5 form-group">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input 
                                            type="password" 
                                            class="form-control" 
                                            id="exampleInputPassword1" 
                                            placeholder="Enter password" 
                                            value={password} 
                                            onChange={(e)=>setPassword(e.target.value)}
                                        />
                                        <a href="javascript:void(0)" class="forgot_link text-muted">Forgot Password?</a>
                                        <div class="pwdeye">
                                            <i id="eyeChange" class="bi bi-eye-slash" onclick="passwordEnableOrDisable()"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center donthveac">
                                    <button type="submit" class="btn btn-primary w-100 mb-3" >Login</button>
                                    <span class="text-muted">Don’t have an account?</span> <a href="javascript:void(0)" class="text-primary">Signup</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
    )
}

export default LogIn
