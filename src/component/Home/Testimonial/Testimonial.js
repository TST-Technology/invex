import React from 'react'

const Testimonial = () => {
    return (
        <>
            <section class="main-div">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="quote-img">
                                <img src={require("../../Common/Images/comma.png").default} class="img-fluid" alt="quote" />
                            </div>
                            <div class="realcusttitle item1">
                                <h2 class="main-title">Real Stories from<br />Real Customers</h2>
                                <span>Get inspired by these stories.</span>
                            </div>
                            <div class="cust-testimonial testimonial-1">
                                <img src={require("../../Common/Images/person1.jpg").default} class="card-img-top" alt="person1" />
                                <div class="card-body">
                                    <img src={require("../../Common/Images/Quote Mark.png").default} alt="quote1" />
                                    <p class="custmsg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien tempus, dictum rhoncus consequat. Quis integer felis libero vitae. Elementum sit euismod arcu vivamus tempor. Ut aliquet ultrices non fusceLorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien tempus, dictum rhoncus consequat. </p>
                                    <h5>Name Here</h5>
                                    <span class="custdesg">Profession</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="cust-testimonial testimonial-2">
                                <img src={require("../../Common/Images/person2.jpg").default} class="card-img-top" alt="person2" />
                                <div class="card-body">
                                    <img src={require("../../Common/Images/Quote Mark.png").default} alt="quote2" />
                                    <p class="custmsg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien tempus, dictum rhoncus consequat. Quis integer felis libero vitae. </p>
                                    <h5>Name Here</h5>
                                    <span class="custdesg">Profession</span>
                                </div>
                            </div>
                            <div class="cust-testimonial testimonial-3">
                                <img src={require("../../Common/Images/person3.jpg").default} class="card-img-top" alt="person3" />
                                <div class="card-body">
                                    <img src={require("../../Common/Images/Quote Mark.png").default} alt="quote3"/>
                                    <p class="custmsg">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    <h5>Name Here</h5>
                                    <span class="custdesg">Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
