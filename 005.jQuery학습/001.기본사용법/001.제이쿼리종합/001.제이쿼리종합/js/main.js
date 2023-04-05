// 미니언즈 좀비 탈출 애니 구현 JS - main.js
$(() => {
    /////////// jQB ///////////////////

    // 로딩확인
    console.log("로딩완료!");

    /*********************************** 
        [ 요구사항정리 ]
        1. 버튼을 클릭하여 미니언즈가
        순서대로 특정위치로 이동하며
        메시지를 보여준다
        2. 각 위치별 좀비를 등장시킨다
        3. 맨윗층에서 탈출할때 헬기를 사용한다

        [ 변경대상 ]
        1. 주인공 미니언즈
        2. 좀비 미니언즈들
        3. 주사기
        4. 헬기

        [ 이벤트와 이벤트대상  ]
        1. 이벤트 : 클릭이벤트
        2. 이벤트대상 : 버튼들
        3. 기능구분 : 버튼글자(지시사항)

    ***********************************/

    // 0. 주인공들 변수에 할당!
    // (1) 미니언즈
    const mi = $(".mi");

    // (2) 건물 li
    const bd = $(".building li");

    // (3) 버튼들
    const btns = $(".btns button");

    // (4) 메시지박스
    const msg = $(".msg");

    // (5) 좀비, 주사기 요소 변수처리
    let mz1 = `<img src="./images/mz1.png" alt="좀비1" class="mz">`;
    let mz2 = `<img src="./images/mz2.png" alt="좀비2" class="mz">`;
    let zom = `<img src="./images/zom.png" alt="좀비들" class="mz">`;
    let inj = `<img src="./images/inj.png" alt="주사기" class="inj">`;

    // console.log(mi,bd,btns,msg);

    // 1. 건물 각 방에 번호넣기 + 좀비/주사기 넣기
    // 대상: .building li ->  bd변수
    // 사용제이쿼리 메서드:
    // (1) each((순서,요소)=>{}) : 요소의 개수만큼 순서대로 돌아줌!
    // (2) append(요소) : 요소내부에 자식요소 추가(이동)

    bd.each((idx, ele) => {
        // console.log(idx,ele);
        // 1. 각 방에 숫자로 순번넣기
        $(ele).text(idx);

        // 2. 좀비/주사기 넣기
        switch (idx) {
            case 9:
                $(ele).append(mz1);
                break;
            case 7:
                $(ele).append(mz2);
                break;
            case 1:
                $(ele).append(zom);
                break;
            case 2:
                $(ele).append(inj);
                break;
        } ////// switch case //////
    }); /////////// each ///////////

    // 좀비는 모두 숨기기
    $(".mz").hide();
    // 시간없는 hide()는 display:none처리함!

    // 2. 버튼셋팅하기 ////////////////
    // 대상: .btns buttons -> btns변수
    btns.hide().first().show();

    // 3. 공통함수 : actMini() /////////
    // 전달변수 3개
    // (1) ele - 클릭된 버튼요소(선택요소)
    // (2) seq - 이동할 li방순번
    // (3) fn - 이동후 실행할 코드(콜백함수)
    const actMini = (ele,seq,fn) => { // 내가 변수를만든것
        // 1. 클릭된 버튼 사라지기
        $(ele).slideUp(300);

        // 2. 메시지 없애기 : .msg -> msg변수
        msg.fadeOut(300);

        // 3. 위치값 알아내기
        // 위치: li 몇번방 -> bd변수에 있는 모든 li 중 몇번
        let room = bd.eq(seq);
        // 위치값 배열변수
        let pos = [];

        // top위치값
        pos[0] = room.offset().top;
        // left위치값 : 방에서 중앙이동(+li가로크기절반-미니언즈가로크기절반)
        pos[1] = room.offset().left + room.width()/2 - mi.width()/2;

        // 제이쿼리 위치값 정보 메서드 : offset() -> 하위속성:top,left
        // 제이쿼리 가로,세로 크기정보 메서드 : width(), height()

        console.log(room,pos);

        // 4. 미니언즈 이동하기
        // 대상: .mi -> mi변수
        mi.animate({
            top: pos[0]+"px",
            left:pos[1]+"px"
        },800,"easeOutElastic",
        fn // -> 전달된 콜백함수
        ); ////// animate /////
    }; ////////// actMini함수 ///////////

    // 4. "들어가기" 버튼 클릭시
    btns.first()
    .click(function(){
        // 이동후 콜백함수 /////
        let fn = () => { // 콜백함수
            // 메시지 넣고 나타나기
            msg.html("와~!아늑하다!<br>옆방으로 가보자!")
            .fadeIn(300);

            // 다음버튼 보이기
            $(this).next().delay(500).slideDown(300);
            // this키워드 -> 화살표함수를 사용하여 싸고있는
            // 요소인 클릭된 버튼을 가리킴!
            console.log(this);
        }; ////////////// fn함수 ///////////

        // 공통함수 호출! : this는 클릭된 버튼
        actMini(this,8,fn);

    }) /// "들어가기" 버튼끝 ////
    //// 5. "옆방으로" 버튼 클릭시 ////
    .next()
    .click(function(){
        let fn = () => {// 콜백함수

            // 좀비 나타나기(2초후)
            bd.eq(9).find(".mz")
            .delay(2000)
            .fadeIn(400,()=>{ // 콜백함수

                // 메시지 넣고 나타나기
                msg.html("악!;;;좀비!!<br>어서피하자!")
                .css({left:"-144%"})
                .fadeIn(300);
    
                // 다음버튼 보이기
                $(this).next().delay(500).slideDown(300);
                // this키워드 -> 화살표함수를 사용하여 싸고있는
                // 요소인 클릭된 버튼을 가리킴!

            }); //// fadeIn ////////



        }; ////////////// fn함수 ///////////


        // 공통함수 호출! : this는 클릭된 버튼
        actMini(this,9,fn);

    }) ///// "옆방으로" 버튼끝 /////



}); /////////////// jQB ////////////////////