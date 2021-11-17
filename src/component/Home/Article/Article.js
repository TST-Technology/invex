import React from 'react'

const Article = () => {

    const articleData = [
        {
            image:"card1.png",
            title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus egestas fermentum.",
            date:"May 20th 2020"
        },
        {
            image:"card2.png",
            title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus egestas fermentum.",
            date:"May 20th 2020"
        },
        {
            image:"card3.png",
            title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus egestas fermentum.",
            date:"May 20th 2020"
        }
    ]

    return (
        <>
            <section class="article">
                <div class="container">
                    <div class="heading">
                        <h2 class="main-title">Article to understand</h2>
                    </div>
                    <div class="mainCard ">
                        <div class="card mb-3 col-sm-12">
                            <div class="row g-0 d-flex align-item-center justify-content-center">
                                <div class="col-lg-6 col-md-12 col-sm-12 order-lg-12 order-md-1 order-1 articlelefttext">
                                    <div class="card-body">
                                        <h5 class="main-article-title">What stocl to pick and how to pick</h5>
                                        <p class="main-article-desc">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ac vulputate in semper sit vel augue arcu quis. Libero nec enim bibendum eu velit et nam suspendisse. Sit potenti pharetra eu eu nulla vitae proin. Eleifend aliquet suscipit eget felis nisi.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ac vulputate in semper sit vel augue arcu quis. Libero nec enim bibendum eu velit et nam suspendisse. Sit potenti pharetra eu eu nulla vitae proin. Eleifend
                                            aliquet suscipit eget felis nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ac vulputate in semper sit vel augue arcu quis. Libero nec enim bibendum eu velit et nam suspendisse. Sit potenti pharetra
                                            eu eu nulla vitae proin.<br/><br/><br/>
                                        </p>
                                        <div class="card-end">
                                            <h6 class="date text-muted">May 20th 2020</h6>
                                            <a href="/#" class="ms-auto">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-12 order-lg-1 order-md-12 order-12">
                                    <img src={require("../../Common/Images/highlighted_image.png").default} class="rounded-start img-fluid w-100 h-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="threeCards">
                        <div class="row">
                            {
                                articleData.map((artical,index)=>{
                                    return (
                                        <div key={index} class="col-lg-4 col-md-6">
                                            <div class="card articlecard">
                                                <div class="card-image">
                                                    <img class="img-fluid" src={require("../../Common/Images/"+artical.image).default} alt="Card Cap" />
                                                </div>
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        {artical.title}
                                                    </p>
                                                    <div class="card-end">
                                                        <h6 class="date text-muted">{artical.date}</h6>
                                                        <a href="/#" class="ms-auto">Read More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>  
        </>
    )
}

export default Article
