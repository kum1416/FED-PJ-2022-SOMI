// 카테고리 서브페이지 JS - sub.js

// 메뉴기능함수 가져오기
import menuFn from "./mainjs/menu.js";
// 공통 데이터 가져오기
import comData from "./tempData/data-common.js";


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
    mounted:function(){
        // 제이쿼리코드함수 호출!
        console.log("mounted구역");
        
        // 메뉴기능 호출
        menuFn();

        // 스와이퍼 생성함수 호출
        makeSwiper();
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

var swiper = new Swiper(".mySwiper", { // 변수에다 담는이유😀
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false, 
        // 인터렉션 비활성화 false 
        // -> 인터렉션 활성화! (가만히두면 다시자동넘김)😀
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

} //////// makeSwiper 함수 ///////



