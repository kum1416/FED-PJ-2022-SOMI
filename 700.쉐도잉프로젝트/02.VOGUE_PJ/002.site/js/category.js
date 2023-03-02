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
    // (3) 내용 타이틀
    const contit = document.querySelectorAll(".icont h2");
    // (4) 컨텐츠 상위박스(카테고리 클래스 넣기)
    const cont = document.querySelector(".cont");
    // (5) title요소(타이틀 내용에 카테고리명 앞에 추가)
    const titag = document.querySelector("title");

    // console.log(stit,lnb,contit,cont,titag);

    // 2. 메뉴데이타 (sinfo변수) 객체에서 카테고리값 선택하기
    // 📢변수만들기
    const mdata = sinfo[pm];

    console.log(mdata);

    // 3. 대상에 변경 적용하기
    // (1) 카테고리 페이지 타이틀 넣기
    // 대상: .stit -> stit변수
    stit.innerText = mdata["제목"];
    // stit.innerText = mdata.제목;

    // (2) LNB 메뉴 넣기
    // 대상: .lnb -> lnb변수
    // 코드넣기 : 
    // <ul><li><a href="#">메뉴</a></li></ul>
    // mdata["메뉴"] 값이 "없음"이면 lnb를 지우고
    // 아니면 배열값으로 메뉴가 있으므로 배열만큼
    // 위의 ul>li>a 코드를 넣어 준다!

    // 메뉴값 담기
    let mvalue = mdata["메뉴"];

    if(mvalue==="없음"){
        // LNB박스 제거!
        lnb.remove();
    }  ////////// if ///////////
    else{ /// 메뉴가 배열에 있음!
        let temp = "<ul>"; //임시변수

        // 메뉴배열만큼 돌아서 코드생성
        mvalue.forEach((val)=>{ // val은 배열값!
            temp +=`
                <li>
                <a href=#>${val}</a>
                </li>
            `;

        }); ///// forEach ////// 

        temp +="</ul>";

        //LNB qkrtm에 html넣기!
        lnb.innerHTML = temp;

    } ////////// else ///////////
    

    
    // (3) 내용 타이틀 넣기 : 대상 - contit변수
    // -> h2개수만큼 순번대로 mdata["타이틀"][순번]
    // h2를 돌릴때 for of말고 forEach() 메서드로 사용!
    // forEach((요소,순번)=>{코드})
    contit.forEach((ele,idx)=>{
        ele.innerHTML = mdata["타이틀"][idx];
    }); ////////// forEach //////////////


    // (4) 컨텐츠 박스에 pm과 같은 이름의 class넣기
    cont.classList.add(mdata["경로"]);
    // "경로"속성의 값이 실제 클래스명과 일치함!

    // cont.classList.add(pm.replace(" & ","-"));
    // replace(바뀔값,바꿀값)

    // (5) 탭메뉴 출력 title요소 데이터 넣기
    // 기존값을 앞에 "제목"속성값을 넣어준다!
    // 대상: title요소 -> titag 변수
    titag.innerText = mdata["제목"] + titag.innerText;




} //////////////// loadFn 함수 //////// 📢선언적함수는 ;이 없음!
