import React from 'react'

const Testimonial = () => {
    return (
        <>
            <section className="main-div">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="quote-img">
                                <img src={require("../../Common/Images/comma.png").default} className="img-fluid" alt="quote" />
                            </div>
                            <div className="realcusttitle item1">
                                <h2 className="main-title">Real Stories from<br />Real Customers</h2>
                                <span>Get inspired by these stories.</span>
                            </div>
                            <div className="cust-testimonial testimonial-1">
                                <img src={require("../../Common/Images/person1.jpg").default} className="card-img-top" alt="person1" />
                                <div className="card-body">
                                    <img src={require("../../Common/Images/Quote Mark.png").default} alt="quote1" />
                                    <p className="custmsg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien tempus, dictum rhoncus consequat. Quis integer felis libero vitae. Elementum sit euismod arcu vivamus tempor. Ut aliquet ultrices non fusceLorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien tempus, dictum rhoncus consequat. </p>
                                    <h5>Name Here</h5>
                                    <span className="custdesg">Profession</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="cust-testimonial testimonial-2">
                                <img src={require("../../Common/Images/person2.jpg").default} className="card-img-top" alt="person2" />
                                <div className="card-body">
                                    <img src={require("../../Common/Images/Quote Mark.png").default} alt="quote2" />
                                    <p className="custmsg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien tempus, dictum rhoncus consequat. Quis integer felis libero vitae. </p>
                                    <h5>Name Here</h5>
                                    <span className="custdesg">Profession</span>
                                </div>
                            </div>
                            <div className="cust-testimonial testimonial-3">
                                <img src={require("../../Common/Images/person3.jpg").default} className="card-img-top" alt="person3" />
                                <div className="card-body">
                                    <img src={require("../../Common/Images/Quote Mark.png").default} alt="quote3"/>
                                    <p className="custmsg">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    <h5>Name Here</h5>
                                    <span className="custdesg">Profession</span>
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
