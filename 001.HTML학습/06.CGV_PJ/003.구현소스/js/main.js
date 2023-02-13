// CGV PJ 메인 페이지 JS - main.js

// 요소선택함수 //////// -> **📢내가만든것
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// 로드구역 ////////////////////////
window.addEventListener("DOMContentLoaded", () => {
  console.log("로딩완료!");

  /***************************************** 
        [ 포스터 메뉴 클릭시 클래스주기 ]
        - 포스터 메뉴 클릭시 해당 li에
        클래스 "on"을 주고 나머지 li는
        "on"을 모두 지워서 선택된 li만
        일어서있는 CSS가 적용되게 한다!
    *****************************************/
  // 1. 대상선정 : .mlist ul>li
  // -> 이벤트+변경대상 일치
  const mlist = qsa(".mlist ul>li");
  // console.log(mlist);

  // 2. 클릭이벤트 함수 설정하기
  // for of사용! -> 배열/컬렉션 일때 사용!
  for (let x of mlist) {
    // x 각 li요소
    x.onclick = () => {
      // 1. li에 클래스 초기화!
      mlist.forEach((ele) => ele.classList.remove("on"));
      // forEach((요소,순번,객체)=>{코드})

      // 2. 클릭된 li에 클래스 "on" 넣기
      x.classList.add("on"); // **📢각각이라서 몇번째라고 설정해줄 필요 없음
      // classList 객체사용!
      // add()메서드 사용!
    }; ///////////// click함수 ////////
  } ///////////////////// for of ///////////

  /********************************************** 
        [ 극장가는 길 구글맵 보기 기능 ]
        - 극장가는길 박스 클릭시 구글맵 등장
        - 구글맵박스의 닫기버튼 클릭시 구글맵 퇴장
        -> 방법: CSS셋팅된 클래스 "on" 넣기/빼기
    **********************************************/
  // 1. 대상선정
  // 1-1. 이벤트 대상 : .anibx -> 애니메이션 버튼박스
  const anibx = qs(".anibx");

  // 1-2. 이벤트 대상 : .cbtn
  const cbtn = qs(".cbtn");

  // 1-3. 변경 대상 : .gmap -> 구글맵박스
  const gmap = qs(".gmap");

  //    console.log(anibx,gmap);

  // 2. 맵버튼에 클릭 이벤트 설정하기
  // -> 클릭시 구글맵박스에 클래스 넣기
  anibx.onclick = () => gmap.classList.add("on");
  ///////////// click 함수 ////////
  
  // 3. 닫기버튼에 클릭 이벤트 설정하기
  // -> 클릭시 구글맵박스에 클래스 넣기
  cbtn.onclick = () => gmap.classList.remove("on");
  ///////////// click 함수 ////////
  
  }); ///////////////// 로드 구역 ///////////////////
