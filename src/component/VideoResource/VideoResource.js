import React from 'react'
import MainVideoContent from './MainVideoContent'
import TopBanner from './TopBanner'

const VideoResource = () => {
    return (
        <div className="main">
            <section className="video_resource_sec">
                <div className="container">
                    <div className="row">
                        <TopBanner />
                        <MainVideoContent />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default VideoResource
