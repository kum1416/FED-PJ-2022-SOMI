// DC 메인 페이지 컴포넌트
import React from "react"; // 리액트 문법을 쓰고있으니까😀
import Ban from "./Ban";
import MenuBtn from "./MenuBtn";
import menubtn_data from "./data/menubtn";

const Main = () => {
    return(
        <>
            <Ban cat="main" />
            
            {
                menubtn_data.map((x,i) =><MenuBtn num={i} key={i} />)
            }
        </>
    );
}; ////////// Main ///////////

export default Main;