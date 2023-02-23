// 보그 PJ 메인페이지 JS - main.js

/////// 로딩구역 /////////////////
window.addEventListener("DOMContentLoaded", () => {
  /**************************
        리턴함수 셋팅구역
    ***************************/
  // 1. 요소선택 함수 : querySelectarAll()함수
  const q = (x) => {
    // (1) 리턴할요소변수 : rv (return value)
    let rv = document.querySelectorAll(x);

    // (2) 요소개수체크
    let cnt = rv.length;
    cg(cnt + "개");

    // (3) 1개일 경우 첫번째만 선택해서 리턴함
    if (cnt === 1) rv = rv[0];

    // (4) 결과리턴하기
    return rv;
  }; //////////////// q 함수 ////////////

  // 2. 콘솔출력 함수
  const cg = (x) => console.log(x);

  // 3. 등장액션 대상 위치값 리턴함수/////
  const retVal = (ele) => ele.getBoundingClientRect().top;

  // ****************************************

  /***************************************** 
        스트롤 등장액션 기능구현하기
   *****************************************/
  // 대상: .scAct
  const scAct = q(".scAct");

  // 화면높이값의 2/3구하기
  const hv = window.innerHeight/3*2;
  // console.log("2/3높이:",hv);

  ////////////////////////////////
  // 클래스 넣기 함수 만들기 ///////
  ////////////////////////////////
  const showIt = (x) => {
    // x - 등장요소
    // 대상요소의 현재스크롤 위치
    let xval = retVal(x);

    // 구간적용여부 검사하기
    // 0보다 크고 화면의 2/3보다 작은 구간!
    if (xval < hv && xval > 0) {
      // console.log("작동!~~~~");
      // 해당요소에 클래스 넣기!
      x.classList.add("on");
    }
  }; //////////// showIt //////////

  // 스크롤 이벤트 셋팅하기 //////////
  window.addEventListener("scroll", () => {
    // 값확인하기
    cg("박스1:" + retVal(scAct[0]));
  }); //////////// scroll ////////////////
}); //////////////// 로딩구역 //////////////////
