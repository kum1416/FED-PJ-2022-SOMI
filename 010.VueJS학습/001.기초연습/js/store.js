// 뷰엑스 스토어 - 전역뷰데이터 저장소!

/*************************************************************** 
    [ Vue Store - 뷰엑스 스토어란? ]
    1. 데이터와 데이터상태를 한번에 관리하는 확장 라이브러리다!
    2. 스토어에서 관리되는 데이터는 리액티브데이터이다!
        (reactive data는 양방향 동기화 데이터이다!)
    3. 컴포넌트 구조 상태와 상관없이 사용하는 곳에서 변경한 내용이
        동기화되어 자연스런 업데이트가 이루어진다!😀

    [ 뷰엑스 스토어 기본구조 ]
    1. state (상태) : 변수선언 및 할당구역 
        => 뷰 인스턴스에서 data와 유사
    2. mutations (돌연변이) : 변수의 데이터를 변경하는 메서드구역
        => 뷰 인스턴스에서 methods와 유사
    3. actions (활동) : 비동기 처리 메서드 구역

    [ 뷰엑스 스토어 처리순서 ]
    1. actions -> 2. mutations -> 3. state
    - 흐름 : 먼저 비동기 메서드처리후
            일반 메서드처리 결과를 state변수에 반영함!


    예시코드)
        😀
        new Vuex.store({
            state:{
                변수:값
            },
            mutations:{
                메서드(){}
            },
            actions:{
                메서드(){}
            }
        })



***************************************************************/