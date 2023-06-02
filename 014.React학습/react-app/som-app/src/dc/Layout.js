// 메인 레이아웃 컴포넌트
import Logo from "./logo";
import "./css/layout.css";
import { Link } from "react-router-dom";

/************************************************************ 
    [ 리액트 라우터와 연결하여 사용되는 라우터 컴포넌트 ]
    <Link to="/경로명"></Link>
    -> to속성의 경로는 <Route path="/경로명"> 과 일치함!
************************************************************/

const Layout = () => {
    return(
      <>
        {/* 1. 상단영역 */}
        <header className="top">
            {/* 네비게이션 파트 */}
            <nav className="gnb">
                <ul>
                    <li>
                        <Logo />
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/ct">CHARACTERS</Link>
                    </li>
                    <li>
                        <Link to="/co">COMICS</Link>
                    </li>
                    <li>
                        <Link to="/mv">MOVIES & TV</Link>
                    </li>
                    <li>
                        <Link to="/gm">GAMES</Link>
                    </li>
                    <li>
                        <Link to="/nw">NEWS</Link>
                    </li>
                    <li>
                        <Link to="/bd">VIDEO</Link>
                    </li>
                </ul>
            </nav>
        </header>
      </>  
    );
}; ////////// Layout 컴포넌트 ///////