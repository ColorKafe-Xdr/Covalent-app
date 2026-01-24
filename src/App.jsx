import styleapp from "./App.module.css"
import styletopbar from "./Topbar.module.css"
import logo from "./assets/react.svg"
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { IconContext } from "react-icons";
import { useState } from "react";
import Sidebar from "./Components/sidebar/sidebar";
import Dark from "./assets/ModeSwitch-Dark.svg"
import Light from "./assets/ModeSwitch-Light.svg"
import Library from "./Components/maincontent/maincontent.jsx"

function Navbutton(props) {

    return (
        <button className={styletopbar.navbar} onClick={props.clicado}>
                <IconContext.Provider value={{ size:20}}>
                    <div className={styletopbar.icon}>
                        {props.fechadoaberto}
                    </div>
                </IconContext.Provider>
            </button>
    );
}

function Modebutton(props) {
    let x
    props.modo ? x=Dark : x=Light
    return (
        <button onClick={props.ClickHandler} className={styletopbar.lightdark}>
        <img src={x} alt="" style={{maxWidth: 32}}/>
        </button>
    );
}

function Topbar(props) {
    let [mudamodo, Setmudamodo] = useState(false)

    function Change() {
        if (mudamodo) {
            console.log(false)
        } else {
            console.log(true)
        }
        Setmudamodo(!mudamodo)
    }

        return(
        <div className={styletopbar.container}>
            <div className={styletopbar.subcontainer}>
                <Navbutton fechadoaberto={props.fechadoaberto} clicado={props.navbuttonclicado}/>
                <img src={logo} alt="" className={styletopbar.logo}/>
            </div>
            <Modebutton modo={mudamodo} ClickHandler={Change}></Modebutton>
        </div>
    );
}


function App() {

    let [value, setvalue] = useState(<CgMenu />)
    let [state, setstate] = useState(true)

    function Clickswitch() {
        if (state) {
            setvalue(<CgClose />)
        } else {
            setvalue(<CgMenu />)
        }
        setstate(!state)
    }


  return (
    <>
      <div className={styleapp.topbar}>
        <Topbar fechadoaberto={value} navbuttonclicado={Clickswitch}></Topbar>
      </div>
      <div className={styleapp.Sidebar}>
        <Sidebar activedesactive={!state}></Sidebar>
      </div>
      <div>
        <Library></Library>
      </div>
    </>
);

}

export default App