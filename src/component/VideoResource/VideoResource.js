import React from 'react'
import MainVideoContent from './MainVideoContent'
import TopBanner from './TopBanner'

const VideoResource = () => {
    return (
        <div class="main">
            <section class="video_resource_sec">
                <div class="container">
                    <div class="row">
                        <TopBanner />
                        <MainVideoContent />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default VideoResource
