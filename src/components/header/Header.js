import "./Header.css";
import logo from "../assets/logo.png";
import dp from "../assets/DP.png";
import arrow from "../assets/Arrow.png";
import line from "../assets/line.png";

const Header = () => {

    return(
        <>
        <div className="headerBox">
            <div className="optionContainer">
              <span className="logoTitle">Lync Drive</span>
            </div>
            <div className="optionContainer" >
                <img src={line} height={40} style={{padding:"0px 20px"}}/>
                <img src={dp} height={20} />
                <span style={{color:"#EEEEEE", padding:"0px 10px"}}>Johnny Doe</span>
                <img src={arrow} height={7} style={{padding:"0px 10px"}}/>
            </div>
        </div>
        </>
    )
    
}

export default Header;