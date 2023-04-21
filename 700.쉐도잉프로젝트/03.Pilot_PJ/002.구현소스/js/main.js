// 파일럿 PJ 메인페이지 JS - main.js

// 자동스크롤 기능 함수 가져오기
import autoScroll from "./jquery-autoScroll.js";

// 자동스크롤 호출
autoScroll();

// 메인 페이지 

// 파일럿 PJ 메인 페이지 JS - main.js

/************************************************* 
    [ 메인 페이지 주요 기능 ]

    1. 자동스크롤 기능 구현 (OK)
    + 페이지 도착후 등장액션 구현

    2. 햄버거버튼 전체메뉴 보이기/숨기기(OK)
    + 전체메뉴 배경동영상 보일때만 재생(숨길때 멈춤)

    3. 배너 터치기능 넘기기 (제이쿼리 UI이용)
    + 배너별 타이틀 등장하기
    + 양쪽 이동버튼 플러그인 적용하기

*************************************************/


// 햄버거 버튼 클릭시 전체 메뉴 보이기
$(".ham").click(function(){
    // 햄버거 버튼 클래스변경(토글)
    $(this).toggleClass("on");
    // 전체메뉴보이기
    $(".mbox").fadeToggle(400);

    // 햄버거 버튼에 클래스 on이 있으면 재생/ 없으면 정지
    let isOn = $(this).is(".on");
    console.log(isOn);

    // 배경동영상 재생/멈춤
    if(isOn) $(".bgm").get(0).play();
    else $(".bgm").get(0).pause();
    /// audio,video 요소 선택시 get(순번)
    // 을 사용하는 것은 같은 이름의 클래스를
    // 사용할 경우 순서대로 요소를 담는다!

}); //////////// click ///////////////