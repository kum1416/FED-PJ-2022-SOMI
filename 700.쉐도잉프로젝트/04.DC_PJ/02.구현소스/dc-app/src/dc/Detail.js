// 상세페이지 컴포넌트 - Detail.js

import { useLocation } from "react-router-dom";


// 라우터 파라미터값 받아서 데이터 처리!

function Detail(props){
    // 라우터 전달값을 받기위한 useLocation 생성하기!
    const loc = useLocation(); //😀
    // 보내 속성명을 변수에 할당하기
    // state.속성명 : 내가 라우터를 통해 보낸 속성값 받기
    // 1. 캐릭터이름
    const cname = loc.state.cname;
    // 2. 캐릭터설명 - '^'문자로 잘라 배열로 데이터로 변경!
    let cdesc = loc.state.cdesc; // 😀재할당 해야되서 let
    cdesc = cdesc.split('^');
    // 3. 캐릭터명세
    const facts = loc.state.facts;


    return(
        <>        
            <h2>{cname}</h2>
            <div className="cdesc">
                {
                    cdesc.map(v=><p>{v}</p>)
                }
            </div>
            <div className="facts">
                <h3>CHARACTER FACTS</h3>
                {facts}
            </div>
        </>
    )
}; //////////// Detail ////////////////

export default Detail;