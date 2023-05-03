// 카테고리 서브페이지 JS - sub.js

// 메뉴기능함수 가져오기
import menuFn from "./mainjs/menu.js";
// 공통 데이터 가져오기
import comData from "./tempData/data-common.js";
// 신상정보
import sinsang from "./gdsData/sinsang.js";


//###### 상단영역 메뉴 뷰 템플릿 셋팅하기 #######
// Vue.component(내가지은요소명,{옵션})
Vue.component("top-comp",{
    template:comData.tareaSub,
}); ////////// 상단영역 Vue component //////////

//###### 하단영역 메뉴 뷰 템플릿 셋팅하기 #######
Vue.component("foot-comp",{
    template:comData.barea,
}); ////////// 하단영역 Vue component //////////

//###### 상단영역 뷰 인스턴스 생성하기 ##########
// new Vue({옵션})
new Vue({
    el:"#top",
    data:{},
    // mounted 실행구역: DOM연결후
    mounted:function(){ // 😀마운티드 설명
        // 제이쿼리코드함수 호출!
        console.log("mounted구역");

        // 메뉴기능 호출
        menuFn();

        // 스와이퍼 생성함수 호출
        makeSwiper();

        // 부드러운 스크롤 실행
        startSS();
    },    
    // created 실행구역 : DOM연결전
    created:function(){
        // DOM연결전 데이터 가공작업
        console.log("created구역");
    },    
}); //////// 상단영역 뷰 인스턴스 ////////  

//###### 하단영역 뷰 인스턴스 생성하기 ##########
new Vue({
    el:"#info",
}) //////// 하단영역 뷰 인스턴스 ////////  




// 스와이퍼 플러그인 인스턴스 생성하기 ///
// 스와이퍼 생성함수
function makeSwiper(){

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        // 인터렉션 비활성화 false 
        // -> 인터렉션 활성화! (가만히두면 다시자동넘김)
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // 블릿클릭이동여부
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
} /////////// makeSwiper 함수 ///////////

/********************************************** 
    함수명 : moveList
    기능 : 신상품 리스트박스를 연속하여
            왼쪽방향으로 흘러가게 함!
**********************************************/
// 대상: .flist
const flist = $(".flist");
// 위치값변수
let lpos = 0;
// 재귀호출 상태값변수(1-호출가능/0-호출불가)😀
let call_sts = 1;

function moveList(){

  // 1. 이동위치값(left값) 감소하기
  lpos--;

  console.log("위치값:",lpos);

  // 2. 한계값 초기화하기 + 첫번째 요소 맨뒤로 이동하기!
  if(lpos < -300){ 
    // 위치값 초기화
    lpos = 0;

    // 첫번째 li 맨뒤로 이동!
    flist.append(flist.find("li").first())
  }

  // 3. 이동하기
  flist.css({
    left: lpos + "px"
  })

  // 재귀호출하기(비동기호출-setTimeout)
  setTimeout(moveList, 40); /* 😀자기자신을 불러서 자기가 대답 */


} /////////// moveList 함수 //////////

// 신상품 이동함수 최초호출
moveList();