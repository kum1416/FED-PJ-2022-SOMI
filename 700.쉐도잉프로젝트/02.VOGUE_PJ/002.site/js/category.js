// 보그 PJ 카테고리 페이지 JS - category.js

/////// 로딩구역 ////////////////////
window.addEventListener("DOMContentLoaded",loadFn);

//////// 로드함수 /////////////////
function loadFn(){

    console.log("로딩완료!");

    // 1. 변경 대상 선정 /////////////////////////
    // (1) 서브타이틀
    const stit = document.querySelector(".stit");
    // (2) 서브메뉴
    const lnb = document.querySelector(".lnb");
    // (3) 컨텐츠 상위박스(카테고리 클래스 넣기)
    const cont = document.querySelector(".cont");
    // (4) title요소(타이틀 내용에 카테고리명 앞에 추가)
    const titag = document.querySelector("title");

    console.log(stit,lnb,cont,titag);


} //////////////// loadFn 함수 //////// 📢선언적함수는 ;이 없음!
