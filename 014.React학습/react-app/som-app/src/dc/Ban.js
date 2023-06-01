// 배너 컴포넌트 - Ban.js
import "./css/ban.css";

function Ban() {

    const ban_data = [
        {CAL
            "src":"./images/dcm21.jpg",
            "tit1":"GOTHAM GAZETTE",
            "tit2":"WORLDS TRAVELE",
            "cont":`Barry who? The Flash isn't the only DC hero this summer who's been
            traveling through the multiverse.`,
            "btn":"New Places, Familiar Faces",
        },
        {
            
            "src":"./images/dcm21.jpg",
            "tit1":"GOTHAM GAZETTE",
            "tit2":"WORLDS TRAVELE",
            "cont":`Barry who? The Flash isn't the only DC hero this summer who's been
            traveling through the multiverse.`,
            "btn":"New Places, Familiar Faces",
        },
        {}
    ];


    return (
        <div className="banner">
            <ul className="slider">
                <li>
                    <img className="banimg" src={ban_data[0]["src"]}
                    alt="배너" />
                    <section className="bantit">
                        <h3>${ban_data[0]["tit1"]}</h3>
                        <h2>${ban_data[0]["tit2"]}</h2>
                        <p>
                           ${ban_data[0]["cont"]} 
                        </p>
                        <button>${ban_data[0]["btn"]}</button>
                    </section>
                </li>
            </ul>
        </div>
    );
} /////////// Ban 컴포넌트 /////////////

export default Ban;