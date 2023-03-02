// 보그 PJ 링크시스템 JS - linksys.js

/////// 로딩구역 ////////////////////
window.addEventListener("DOMContentLoaded",linkFn);

//////// 링크시스템 로드함수 /////////////////
function linkFn(){

    console.log("링크 로딩완료!");

    // 1. 링크 대상 선정 : 
    // (1) GNS : .gnb a
    const gnb = document.querySelectorAll(".gnb a");
    // console.log(gnb);
    // (2) 로고 : .logo a
    const logo = document.querySelector(".logo a");

    // 2. 클릭 이벤트 설정하기
    // (1) GNB 클릭설정 /////////
    for(let x of gnb){ //📢gnb만큼 돌아!
        x.onclick = (e) => { //📢무조건 하나의 이벤트를 보냄(?)
            // 클릭이동기능 막기
                e.preventDefault(); //📢a태그 튀는 현상 막아줌

            // (1) 클릭된 a요소 텍스트 읽기
            let atxt = x.innerText.toLowerCase().trim(); //📢mdata랑 맞추려고 소문자로 만들어줌
            // toLowerCase() -> 소문자변환 📢내장함수
            // 참고) toUpperCase() -> 대문자변환
            // trim() -> 앞뒤공백제거


            console.log(atxt);

            // (2) 서브 페이지 이동하기
            location.href = "category.html?cat=" //📢받는데서 다시 변환한다(?)
            +encodeURIComponent(atxt); //📢특수문자처리

        } /////// click //////
    } ///////// for of ////////////

    // (2) 로고 클릭설정
    logo.onclick = (e) => {
        e.preventDefault();

        // 홈으로 이동하기
        location.href = "index.html";

    }; //////////// click //////////


} //////////////// linkFn 함수 //////// 📢선언적함수는 ;이 없음!
