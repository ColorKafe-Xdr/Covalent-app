import logo from "../../assets/react.svg"
import style from './sidebar.module.css'
import ftdlogo from '../../assets/ftd-logo.svg'
import estudalogo from '../../assets/estuda-logo.svg'
import pontuelogo from '../../assets/pontue-logo.svg'

function Sidebar(props) {

    const names = ['Estuda', 'Simulados', 'Pontue' ]
    const links = [ 'https://estuda.com', 'https://simulados.estuda.com/interativo/usuarios', 'https://pontue.com.br']
    let w

    props.activedesactive ? w=style.maincontainer : w=style.maincontainerDes
return(

    <div className={w}>
        <nav>   
            <ul>
                <Navitems ImgSrc={ftdlogo} ItemName={names[1]} Href={links[1]}/>
                <Navitems ImgSrc={estudalogo} ItemName={names[0]} Href={links[0]} desative={true}/>
                <Navitems ImgSrc={pontuelogo} ItemName={names[2]} Href={links[2]} desative={true}/>
            </ul>
        </nav>
    </div>

    );
}


function Navitems(props) {
    let x
    let y = null
    let hyperlink = props.Href
    if (props.desative) {
        x = style.desativado
        y = Clickhandler1
        hyperlink = null
    } else {
        x = style.ativado
    }

        function Clickhandler1() {
        alert('Trabalhando nisso(?) :3')
    }
        return (
        <a href={hyperlink} className={x} onClick={y}>
            <div className={style.sub}>
                <img src={props.ImgSrc} className={style.image} alt="" />
                <li className={style.navitems}>{props.ItemName}</li>
            </div>
        </a>
    );
}
export default Sidebar