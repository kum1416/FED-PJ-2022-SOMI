///  메뉴버튼 모듈 - MenuBtn.js
import $ from "jquery";
import "./css/menubtn.css";
import menubtn_data from "./data/menubtn";
import { Link, Outlet } from "react-router-dom";

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    $(() => {

    }); //////// jQB ///////////
} ////////////// jQFn ///////////

// 작은글씨
let stit=[];
// 큰글씨
let btit=[]

menubtn_data.forEach((x,i)=>{
    stit.push(x.tit.split("^")[0])
    btit.push(x.tit.split("^")[1])
})


function MenuBtn(props) {
    return (
        <>
            <section className="menubtn">
                <div>
                    <div className="imbx">
                        <img src={menubtn_data[props.num].isrc} alt="메뉴버튼" />
                    </div>
                    <div className="titbx">
                        <h3>{stit[props.num]}</h3>
                        <h2>{btit[props.num]}</h2>
                    </div>
                    <div className="btnbx">
                        <Link to={menubtn_data[props.num].link}><button>{menubtn_data[props.num].btn}</button></Link>
                    </div>
                </div>
            </section>
            {/* 빈루트를 만들고 JS로드함수포함 */}
            {jqFn()}
        </>
    );
}

export default MenuBtn;