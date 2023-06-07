// DC Video 페이지 컴포넌트
import React from "react"; // 리액트 문법을 쓰고있으니까😀
import isrc from "./ImgSrc";
import VidIntro from "./modules/VidIntro";

const Video = () => {
    return(
        <>
           <h2>Video 페이지</h2>
           <VidIntro />
           {/* <iframe src={isrc.video} /> */}
        </>
    );
}; ////////// Video ///////////

export default Video;