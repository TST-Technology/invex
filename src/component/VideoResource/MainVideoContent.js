import React from 'react'

const MainVideoContent = () => {

    const videoData = [
        {
            vid : "video_thumb-1.png",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            vid : "video_thumb-2.png",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            vid : "video_thumb-3.png",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            vid : "video_thumb-4.png",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            vid : "video_thumb-5.png",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            vid : "video_thumb-6.png",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            vid : "video_thumb-7.png",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            vid : "video_thumb-8.png",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
    ]

    return (
        <>
            {
                videoData.map((data,index)=>{
                    return(
                        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div class="video_block">
                                <div class="video_thumb">
                                    <img src={(require("../Common/Images/"+data.vid).default)} alt="video" class="img-fluid" />
                                    <div class="play_btn">
                                        <a href="javascript:void(0);"><img src={require("../Common/Images/play-btn.png").default} class="img-fluid" alt="play" /></a>
                                    </div>
                                </div>
                                <div class="video_desc">
                                    <p>{data.title}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default MainVideoContent
