import React from 'react'

const JoinNowCard = () => {
    return (
        <>
          <section class="newslettersec">
            <div class="container">
                <div class="joinCard">
                    <div class="row">
                        <div class="col-md-4 d-flex align-items-center justify-content-center">
                            <img src={require("../../Common/Images/email.png").default} alt="Email" class="img-fluid " />
                        </div>
                        <div class="col-md-8">
                            <h2 class="main-title text-white">KEEP UPDATED WITH NEW ANALYSIS</h2>
                            <form class="form-group newsletr_form" role="search" method="get" id="" action=""> 
                                <div class="input-group">
                                    <input type="text" value="" name="s" class="form-control" placeholder="Your work email address" autocomplete="off" /> 
                                    <span class="input-group-append">
                                        <input type="submit" value="Join Now" class="btn btn-white" /> 
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
        </>
    )
}

export default JoinNowCard
