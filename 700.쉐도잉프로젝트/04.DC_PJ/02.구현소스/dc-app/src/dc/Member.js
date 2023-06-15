///  어떤 모듈 - 어떤.js
import React, { useState } from "react";
import $ from "jquery";
import "./css/member.css";
import { Link } from "react-router-dom";

/* 
    [ 후크 : Hook - 왜 필요한가? ]
    1. 목적 - 어떤 특정 데이터가 변경될때
        다른 것을 매칭하여 실시간으로 변경할 필요가 있을 경우
        간단하고 효과적으로 이것을 구현해주는 방법이다!
    2. 구현방법
        1) 상단에 후크를 import 한다 -> useState
        2) useState() 메서드를 사용한다
        코드법: 
            배열변수 = useState(초기값)
        일반형:
            const [변수명,set변수명] = useState(초기값)
            -> set변수명 작성시 변수명 첫글자는 대문자로처리!
            -> set변수명(값) : 메서드 형태로 값을 셋팅한다!(셋터와 비슷함)
        3) 작동원리
            - useState에 쓴 초기값이 배열변수 첫번째에 할당된다
            - 코드에서 set변수명 에 값을 할당하면
            useState가 이것을 체크하여 다른 변경을 
            하도록 메서드를 실행한다!
        4) 사용결과
            - 별도의 메서드 호출없이 후크 상태변수를 사용한 곳이
            자동으로 변경될때마다 다시 갱신되는 것을 확인할 수 있다!
*/

// 제이쿼리 로드구역 함수 /////////
function jqFn() {
    $(() => {}); //////// jQB ///////////
} ////////////// jQFn ///////////

function Member() {
    // 요구사항 : 각 입력항목에 맞는 유효성검사를 입력하는 순간!
    //            실시간으로 체크하여 결과를 화면에 리턴한다!

    // [ 후크 useState 메서드 셋팅하기 ]
    // [ 1. 입력요소 후크변수 ]
    // 1. 아이디변수
    const [userId, setUserId] = useState("");
    // 2. 비밀번호변수
    const [pwd, setPwd] = useState("");
    // 3. 비밀번호확인변수
    const [chkPwd, setChkPwd] = useState("");
    // 4. 사용자이름변수
    const [userName, setUserName] = useState("");
    // 5. 이메일변수
    const [email, setEmail] = useState("");

    // [ 2. 에러상태값 후크변수 ]
    // -> 에러상태값변수 : 초기값은 에러 아님상태(false)
    // 1. 아이디에러변수
    const [userIdError, setUserIdError] = useState(false);
    // 2. 비밀번호에러변수
    const [pwdError, setPwdError] = useState(false);
    // 3. 비밀번호확인에러변수
    const [chkPwdError, setChkPwdError] = useState(false);
    // 4. 사용자이름에러변수
    const [userNameError, setUserNameError] = useState(false);
    // 5. 이메일에러변수
    const [emailError, setEmailError] = useState(false);

    // [ 아이디관련 메시지 프리셋 ]
    const msgId = [
        "User ID must contain a minimum of 5 characters",
        "This ID is already in use!",
        "That's a great ID!",
    ];
    // 후크변수 메시지
    const [idMsg, setIdMsg] = useState(msgId[0]);

    // [ 로컬쓰 클리어 ] //////////
    const clearData = () => {
        localStorage.clear();
        console.log("로컬쓰 클리어!");
    }; /////////// clearData /////////////

    // [ 로컬쓰 초기체크셋팅! ] 😀없으면 만들어! ///////
    const initData = () => {

            // 만약 로컬스 "mem-data"가 null이면 만들어준다!
            if (localStorage.getItem("mem-data") === null) {
                localStorage.setItem(
                    "mem-data",
                    `
                    [
                        {
                            "idx": "1",
                            "uid":"tomtom",
                            "pwd":"1111",
                            "unm":"Tom",
                            "eml":"tom@gmail.com"
                        }
                    ]
                `
                );
            }
    }; //////////// initData ////////////

    // [ 3. 유효성 검사 메서드 ]
    // 1. 아이디 유효성 검사
    const changeUserId = (e) => {
        // e - 이벤트전달변수
        // 1. 아이디 유효성 검사식(따옴표싸지 말것!)
        const valid = /^[A-Za-z0-9+]{5,}$/;

        // 2. 입력값 확인 : e.target -> 이벤트가 발생한 요소
        console.log(e.target.value);

        // 3. 에러아님 상태 if문
        // 조건: 유효성 검사결과가 true인가? 에러상태! false(에러아님)
        // 정규식.test() -> 정규식 검사결과 리턴 메서드
        // 결과: true이면 에러상태값 false / false이면 에러상태값 true
        if (valid.test(e.target.value)) {
            // 로컬쓰 데이터 체크 함수호출
            initData();

            // 아이디 형식에는 맞지만 사용중인 아이디인지 검사하기
            let memData = localStorage.getItem("mem-data");
            console.log("로컬쓰:", memData);
            // 로컬쓰 null아닌경우
            if (memData) {
                // 로컬쓰에 기존 아이디중 있는지 확인하기
                // 문자형데이터를 객체형 데이터로 변환(배열형!)
                memData = JSON.parse(memData);
                console.log("검사:", memData);

                // 기존아이디가 있으면 상태값 false로 업데이트
                let isOK = true;

                // 검사돌기!
                memData.forEach((v) => {
                    // 기존의 아이디와 같은 경우!
                    if (v["uid"] === e.target.value) {
                        console.log(v["uid"]);
                        // 메시지변경
                        setIdMsg(msgId[1]);
                        // 아이디에러상태값 업데이트
                        setUserIdError(true);
                        // 존재여부 업데이트
                        isOK = false;
                    } ////// if /////
                }); ///////// forEach //////////////
                
                // 기존아이디가 없으면 들어감!
                if(isOK){
                    console.log("바깥");
                    // 메시지변경(처음메시지로 변경)
                    setIdMsg(msgId[0]);              
                    // 아이디에러상태값 업데이트
                    setUserIdError(false);

                } /////////// if : isOK /////////


            } ///////// if ////////////////////
            else {
                console.log("DB가 없어욧!!!");
            } ////////// else /////////////////

            // setUserIdError(false); // 에러아님상태!
        } ////// if ///////////
        else setUserIdError(true); // 에러상태임!

        // 4. 실제 useerId 후크변수값이 업데이트 되어야 화면에 출력됨!
        setUserId(e.target.value);
    }; /////////////// changeUserId ////////////////

    // 2. 비밀번호 유효성 검사
    const changePwd = (e) => {
        // e - 이벤트전달변수
        // 1. 유효성 검사식(따옴표싸지 말것!)
        const valid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        // 2. 입력값 확인 : e.target -> 이벤트가 발생한 요소
        console.log(e.target.value);

        // 3. 에러아님 상태 if문
        // 조건: 유효성 검사결과가 true인가? 에러상태! false(에러아님)
        // 정규식.test() -> 정규식 검사결과 리턴 메서드
        // 결과: true이면 에러상태값 false / false이면 에러상태값 true
        if (valid.test(e.target.value)) setPwdError(false); // 에러아님상태!
        else setPwdError(true); // 에러상태임!

        // 4. 실제 useerId 후크변수값이 업데이트 되어야 화면에 출력됨!
        setPwd(e.target.value);
    }; ///////////// changePwd ///////////////////

    // 3. 비밀번호 확인 유효성검사
    const changeChkPwd = (e) => {
        // 1. 위에 입력한 비밀번호와 일치여부
        if (pwd === e.target.value) setChkPwdError(false); // 에러아님!
        else setChkPwdError(true); // 에러임!

        // 2. 입력값 반영하기
        setChkPwd(e.target.value);
    }; ////////////// changeChkPwd /////////////////

    // 4. 사용자이름 유효성검사
    const changeUserName = (e) => {
        // 1. 빈값 체크
        if (e.target.value !== "") setUserNameError(false);
        else setUserNameError(true);

        // 2. 입력값 반영하기
        setUserName(e.target.value);
    }; ////////////// changeUserName /////////////////

    // 5. 이메일 유효성검사 ///////////////////////
    const changeEmail = (e) => {
        // 1.이메일 정규식 셋팅
        const valid =
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        // 1. 이메일유효성 검사체크
        if (valid.test(e.target.value)) setEmailError(false);
        else setEmailError(true);

        // 2. 입력값 반영하기
        setEmail(e.target.value);
    }; ////////////// changeEmail /////////////////

    // 6. 전체 유효성 검사 함수 /////////////
    const totalValid = () => {
        // 모든 입력창 검사(빈값일 경우 모두 에러를 후크변수에 전달!)
        if (!userId) setUserIdError(true);
        if (!pwd) setPwdError(true);
        if (!chkPwd) setChkPwdError(true);
        if (!userName) setUserNameError(true);
        if (!email) setEmailError(true);

        // 통과조건:
        // 1. 빈값이 아님
        // 2. 에러 후크 변수가 모두 false
        // 위의 2가지 만족시 treu값 리턴
        if (
            userId &&
            pwd &&
            chkPwd &&
            userName &&
            email &&
            !userIdError &&
            !pwdError &&
            !chkPwdError &&
            !userNameError &&
            !emailError
        )
            return true;
        else return false; // 하나라도 에러면  false값 리턴!
    }; ////////////// totalValid ////////////////

    // 7. 서브밋 기능함수 ///////////////
    const onSubmit = (e) => {
        // 기본 서브밋기능 막기!
        e.preventDefault();
        // localStorage.clear();
        console.log("서브밋!");

        // 유효성검사 전체 통과시 ////
        if (totalValid()) {
            // alert("처리페이지로 이동!");

            

            // 로컬스 변수할당
            let memData = localStorage.getItem("mem-data");

            console.log(memData);

            // 로컬스 객체로 변환하기
            memData = JSON.parse(memData);

            console.log(memData);

            // 새로운 데이터구성
            let newObj = {
                idx: memData.length + 1,
                uid: userId,
                pwd: pwd,
                unm: userName,
                eml: email,
            };

            // 데이터 추가하기 : 배열에 데이터 추가임 -> push()
            memData.push(newObj);

            // 추가후 확인
            console.log(memData);

            // 로컬쓰에 반영하기
            localStorage.setItem("mem-data", JSON.stringify(memData));

            // 로컬쓰 확인
            console.log(localStorage.getItem("mem-data"));
        } /// if ////
        // 불통과시 ////////////////
        else {
            // alert("입력을 수정하세요!");
        } /// else /////
    }; ///////////// onSubmit ////////////////

    return (
        <div className="outbx">
            {/* 모듈코드 */}
            <section className="membx">
                <h2 onClick={clearData}>Join Us</h2>
                <form method="post" action="process.php">
                    <ul>
                        <li>
                            {/* 1.아이디 */}
                            <label>ID : </label>
                            <input
                                type="text"
                                maxLength="20"
                                placeholder="Please enter your ID"
                                value={userId}
                                onChange={changeUserId}
                            />
                            {
                                // 에러일 경우 메시지 보여주기
                                // 조건문 && 요소 -> 조건이 true이면 요소출력
                                // 훅크 데이터 idMsg로 변경출력!
                                userIdError && (
                                    <div className="msg">
                                        <small style={{ color: "red", fontSize: "10px" }}>
                                            {idMsg}
                                        </small>
                                    </div>
                                )
                            }

                            {
                                // "훌륭한 아이디네요"일 경우!
                                // 아이디에러가 false일때 출력!
                                // 고정데이터 배열 msgId 세번째값 출력
                                // 조건추가 : userId가 입력전일때는 안보임
                                // userId가 입력전엔 false를 리턴함!
                                !userIdError && userId && (
                                    <div className="msg">
                                        <small style={{ color: "green", fontSize: "10px" }}>
                                            {msgId[2]}
                                        </small>
                                    </div>
                                )

                                // value={userId} 값은 setUserId를 통해서만
                                // 업데이트되어 실제화면에 반영된다!

                                // onChange={changeUserId}
                                // -> change이벤트 발생시 changeUserId 함수호출!
                            }
                        </li>
                        <li>
                            {/* 2.비밀번호 */}
                            <label>Password : </label>
                            <input
                                type="password"
                                maxLength="20"
                                placeholder="Please enter your Password"
                                value={pwd}
                                onChange={changePwd}
                            />
                            {
                                // 에러일 경우 메시지 보여주기
                                // 조건문 && 요소 -> 조건이 true이면 요소출력
                                pwdError && (
                                    <div className="msg">
                                        <small style={{ color: "red", fontSize: "10px" }}>
                                            Password must be at least 8 characters long and must
                                            contain at least one letter and one number each.
                                        </small>
                                    </div>
                                )
                            }
                        </li>
                        <li>
                            {/* 3.비밀번호확인 */}
                            <label>Confirm password : </label>
                            <input
                                type="password"
                                maxLength="20"
                                placeholder="Please enter your Confirm Password"
                                value={chkPwd}
                                onChange={changeChkPwd}
                            />
                            {
                                // 에러일 경우 메시지 보여주기
                                // 조건문 && 요소 -> 조건이 true이면 요소출력
                                chkPwdError && (
                                    <div className="msg">
                                        <small style={{ color: "red", fontSize: "10px" }}>
                                            Password verification does not match
                                        </small>
                                    </div>
                                )
                            }
                        </li>
                        <li>
                            {/* 4.이름 */}
                            <label>User Name : </label>
                            <input
                                type="text"
                                maxLength="20"
                                placeholder="Please enter your Name"
                                value={userName}
                                onChange={changeUserName}
                            />
                            {
                                // 에러일 경우 메시지 보여주기
                                // 조건문 && 요소 -> 조건이 true이면 요소출력
                                userNameError && (
                                    <div className="msg">
                                        <small style={{ color: "red", fontSize: "10px" }}>
                                            This is a required entry
                                        </small>
                                    </div>
                                )
                            }
                        </li>
                        <li>
                            {/* 5.이메일 */}
                            <label>Email : </label>
                            <input
                                type="text"
                                maxLength="50"
                                placeholder="Please enter your Email"
                                value={email}
                                onChange={changeEmail}
                            />
                            {
                                // 에러일 경우 메시지 보여주기
                                // 조건문 && 요소 -> 조건이 true이면 요소출력
                                emailError && (
                                    <div className="msg">
                                        <small style={{ color: "red", fontSize: "10px" }}>
                                            Please enter a valid email format
                                        </small>
                                    </div>
                                )
                            }
                        </li>
                        <li style={{ overflow: "hidden" }}>
                            {/* 6.버튼 */}
                            <button className="sbtn" onClick={onSubmit}>
                                Submit
                            </button>
                            {/* input submit버튼이 아니어도 form요소
                            내부의 button은 submit기능이 있다! */}
                        </li>
                        <li>
                            {/* 7.로그인페이지링크 */}
                            Are you already a member?
                            <Link to="/login"> Log In </Link>
                        </li>
                    </ul>
                </form>
            </section>

            {/* 빈루트를 만들고 JS로드함수포함 */}
            {jqFn()}
        </div>
    );
}

export default Member;