// 네비게이션 유형6 : 공통 JS - common.js ////

///////// 로드구역 ///////////
window.addEventListener("DOMContentLoaded",loadFn);

// 📢함수만들기
/************************************* 
    함수명: loadFn
    기능: 로딩후 실행함수
*************************************/
function loadFn(){

    console.log("로딩완료!");

    /************************************** 
        GNB메뉴 객체 데이터를 이용한
        HTML태그 만들어 넣기!
    **************************************/
   // 대상: .gnb
   const gnb = document.querySelector(".gnb");
//    console.log(gnb);

    // html코드 담을 변수
    let hcode = "";

    hcode +=

    
    `
    
    <ul>
        `;
        hcode += `<ul>`;
        // 상위메뉴 반복코드 생성
        // mdata객체를 가져와서 반복시킴 -> for in문!
        // console.log(mdata);

        for(let tm in mdata){ // tm은 mdata의 속성명

            hcode+=
            `
        <li>
            <a href="#">${tm}</a>
            <div class="smenu">
                <h2>
                    ${tm}
                </h2>
                <div class="swrap">
                    <dl>
                        <dt>오노마</dt>
                        <dd>에센스</dd>
                        <dd>스킨/토너</dd>
                        <dd>크림</dd>
                        <dd>선크림</dd>
                        <dd>세트</dd>
                    </dl>
    
                </div>
            </div>
        </li>
    </ul>
    
        `;

    } ////////// for in문 //////////////////////

    hcode += "</ul>";



} ////////////// loadFn 함수 //////////