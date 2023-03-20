// 보그 PJ - 공통 JS : common.js

// 로드구역 ////////
window.addEventListener("DOMContentLoaded",()=>{
    console.log("공통JS 로딩완료!");

    // 부드러운 스크롤 JS호출!
    startSS();

    // 만약 스크롤바를 직접 드래그할 경우
    // mouseup (즉, 스크롤바를 놓는 경우)
    // 이벤트 발생시 Y축 스크롤바 위치를
    // pos 전역변수에 업데이트 한다!
    window.addEventListener("mouseup",()=>{ //🥗addEventListener 이벤트를 등록해주는애임
        pso = window.scrollY;

    }); ///////////// mouseup /////////////

}); ////////////////// load /////////////////