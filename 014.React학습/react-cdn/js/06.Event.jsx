// 06.Event JSX

/************************************************************* 
    [ 리액트 이벤트 ]
    1. 일반 HTML DOM 이벤트와 마찬가지로 사용자이벤트 사용가능함
    2. 이벤트 종류: click, change, mouseover 등 일반이벤트
    3. 이벤트 표기법: 캐믈케이스 - 첫글자소문자 단어마다 대문자
    예) onclick -> onClick
    4. 이벤트 핸들러 : 중괄호 안에 작성(중괄호는 JSX표현식영역)
    예) onclick="getIt()" => onClick={getIt}
*************************************************************/


////////// 전체 이벤트를 적용할 컴포넌트 구성하기 //////////
function EventShow(){


    // 컴포넌트에서 사용하는 내부용 함수는 할당형 함수로 작성함!

    // 1. 소원이 무엇이냐 실행 함수 ///////
    const aladin = (lamp) => { // lamp - 알라딘 주인공 이미지경로!
        console.log("aladin함수:",lamp);
        // 1. #tbox 인 요소의 내부에 h1요소 넣기
        document.querySelector("#tbox").innerHTML +=
        `<h1 class="tit">소원이 무엇이냐?</h1>`;

        // 2. 소원이 무엇이냐 타이틀박스 CSS구성하기
        let tit = document.querySelector(".tit");
        tit.style.cssText = `
            width: 50%;
            padding: 50px 0;
            margin: 0 auto;
            border: 2px solid lime;
            transition: all 2s 1s;
            opacity: 0;
        `;

        setTimeout(()=>{
            tit.style.cssText = `
            width: 50%;
            padding: 50px 0;
            margin: 0 auto;
            border: 2px solid lime;
            transition: all 2s 1s;
            opacity: 1;

            border-radius: 50%;
            transform: translateY(-200px);
            font-size: 40px;
            color: white;
            background-color: rgba(0,0,0,.5);
        `;


        },500); ///////// setTimeout ////////

        // 3. 램프 가져오기 버튼 3초뒤에 보이기
        setTimeout(()=>{
            document.querySelectorAll("button")[0]
            .style.display="inline-block";
        },3000);

        // 4. 별도의 요소인 #ala에 이미지생성 컴포넌트 출력하기!
        ReactDOM.render(<AlaLamp isrc={lamp} />, 
        document.querySelector("#ala"));

    }; //////////// aladin함수 /////////////

    // 2. 램프 가져오기 함수 ///////////////////
    const getIt = () => {
        // 1. 램프 선택 : 컴포넌트 구성요소에 넣음
        let lamp = document.querySelector(".lamp");

        // 2. 램프 이미지 넣기
        lamp.innerHTML = `
        <img src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/3168457870/B.png" alt="램프" />
        `;

        // 3. 램프 초기셋팅 및 애니메이션 설정하기
        lamp.querySelector("img").style.cssText = `
            position: absolute;
            top: 0;
            right: 0;
            width: 200px;
            border-radius: 50%;
            transition: 2s;
        `;

        setTimeout(()=>{
            lamp.querySelector("img").style.cssText = `
            position: absolute;
            top: 310px;
            right: calc(50% - 100px);
            width: 200px;
            border-radius: 50%;
            transform: rotate(720deg);
            transition: 2s ,right 1s 2s;
        `;

        },500);

        // 4. 소원빌기 버튼 3초후 보이기
        setTimeout(()=>{
            document.querySelectorAll("button")[1]
            .style.display="inline-block";
        },3000);


    }; ////////////////// getIt /////////////////

    // 3. 소원빌어 페라리 얻기 함수 ///////////////////
    const getIt2 = (ss) => { // ss - 페라리 이미지 경로
        const ferrari = 
        ReactDOM
        .createRoot(document.getElementById("ferrari"));
        // Ferrari컴포넌트 호출함!
        ferrari.render(<Ferrari isrc={ss} />);
    }; ///////////// getIt2 ////////////////////////


    // 컴포넌트의 return은 가장 아랫쪽에 위치함!
    return(
        <React.Fragment>
            <div id="tbox" style={{textAlign:"center"}}>
                {/* 소원을 말해봐 이미지 출력 : onmouseover 이벤트적용 */}
                <img src="https://images.chosun.com/resizer/SFIqPKffr3HQHoHFOxKvnN-L2YU=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/NVMCI5M33KHBCY4JVHDPWRCBYY.jpg" alt="지니"
                onMouseOver={()=>{
                    aladin("./images/ala4.jpg");
                }}
                />
            </div>
            {/* 램프가 들어갈요소 */}
            <div className="lamp"></div>
            {/* 버튼들 */}
            <button onClick={getIt}>램프가져오기~!</button> <br />
            <button onClick={()=>{
                getIt2("https://www.pngplay.com/wp-content/uploads/13/Ferrari-458-Transparent-PNG.png");
            }}>소원빌기~!!! 페라리주세요~!!!</button>
        </React.Fragment>
    );

} /////////////// EventShow ////////////////////////


////////// 알라딘 램프 이미지 출력 컴포넌트 //////////////
function AlaLamp(props){ // 이미지경로를 props로 받는다!
    return <img src={props.isrc} alt="알라딘 램프" />;
} ////////////// AlaLamp //////////////////////


////////// 페라리 이미지 출력 컴포넌트 //////////////
function Ferrari(props){
    return (
        <img
            id="car"
            src={props.isrc}
            alt="페라리"
            title="클릭하면 시운전해요!"
            onClick={move}
        />
    );
} ////////////// Ferrari //////////////////////

// 일반 함수로 구현! 페라리움직이기! ////////////
let one = 1;
function move() {console.log(one);
    let car = document.getElementById("car");
    car.style.transform = one?"translateX(150%) scale(2)":"translateX(0) scale(1)";
    car.style.transition = "2s ease-in-out";

    // 왔다갔다 1/0값 전환하기
    one?one=0:one=1; // 1이면 0만들고 0이면 1만들어😀
} ///////////// move함수 ///////////////////



////// 최초 컴포넌트 출력하기 /////////////////
ReactDOM.render(<EventShow />,
document.querySelector("#root"));