// DC 메인 페이지 컴포넌트
import React from "react"; // 리액트 문법을 쓰고있으니까😀
import Ban from "./Ban";
import MenuBtn from "./MenuBtn";

const Main = () => {
    return(
        <>
            <Ban cat="main" />
            <MenuBtn />
        </>
    );
}; ////////// Main ///////////

export default Main;