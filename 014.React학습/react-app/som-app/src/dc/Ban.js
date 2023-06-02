// 배너 컴포넌트 - Ban.js
// 배너CSS
import "./css/ban.css";
// 배너 데이터
import ban_data from "./data/banner";
// 제이쿼리
import $ from "jquery";

$(()=>{ /////////// jQB ///////////

    // 1. 버튼 클릭시 이동기능구현
    $(".abtn").click(function(){
        // 버튼구분하기
        let isB = $(this).is(".rb"); // 오른쪽이야? 물어보는거
        console.log("오른쪽?",isB);

    }); ////////// click ///////////

}); /////////// jQB ///////////


// 반복리스트 코드 생성용 컴포넌트 ///////
function MakeList(props) { 
    // rec - 개별레코드값(객체형식)
    return (
        <li>
            <img className="banimg" src={props.rec["src"]} alt="배너" />
            <section className="bantit">
                <h3>{props.rec["tit1"]}</h3>
                <h2>{props.rec["tit2"]}</h2>
                <p>{props.rec["cont"]}</p>
                <button>{props.rec["btn"]}</button>
            </section>
        </li>
    );
} //////////// MakeList //////////////////

// 배너출력용 컴포넌트 /////////
function Ban(props) {
    // props.cat 은 배너데이터 구분속성명
    const sel_data = ban_data[props.cat];
    // sel_data에 담긴값은 data/banner.js의 객체의 배열값

    return (
        <div className="banner">
            {/* 이동 슬라이드 */}
            <ul className="slider">
                {
                    sel_data.map((x,i)=> 
                    <MakeList rec={x} key={i} />)
                }
            </ul>
            {/* 이동버튼 + 슬라이드 블릿 : 슬라이드가 2개이상 */}
            {
                // 조건식 && 코드 : 조건식이 true일때 코드출력
                sel_data.length > 1 &&
                <> 
                <button className="abtn lb">＜</button>
                <button className="abtn rb">＞</button>
                </>
            }

        </div>
    );
} /////////// Ban 컴포넌트 /////////////

export default Ban;