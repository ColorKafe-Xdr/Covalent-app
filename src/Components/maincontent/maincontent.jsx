import style from "./maincontent.module.css"
import { BiSearch } from "react-icons/bi";
import Template from "../../assets/react.svg"
import CHSAcover from '../../assets/CHSA-cover.png'
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import { BiSolidHelpCircle } from "react-icons/bi";




function BookCards(props) {
    let valormateria
    if (props.materia == 'CNT') {
        valormateria = {backgroundColor: '#1b2c21',}     
    }
    if (props.materia == 'CHSA') {
        valormateria = {backgroundColor: '#261733',}     
    }
    if (props.materia == 'MAT') {
        valormateria = {backgroundColor: '#17203a',}     
    }
    if (props.materia == 'LIN') {
        valormateria = {backgroundColor: '#331414',}     
    }
    return (
        <a href={props.bookid}>

        <div className={style.libcontainer} style={valormateria}>
            <div className={style.libsub}>
                <img src={props.thumbnail} className={style.thumbnail} alt="" />
                <div className={style.descr}>
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>

                </div>
            </div>
            <div className={style.link}>
                <p>Acessar_</p>
                <BsBoxArrowUpRight />
            </div>
        </div>
        </a>
    );
}

export default function Library() {
    const Modulos = [
        {thumbnail: CHSAcover, title: "CNT Vol 34", desc: "bom diaa tudo bem vom o senhor", materia: 'CNT'},
        {thumbnail: CHSAcover, title: "CHSA Vol 24", desc: "bom dia", materia: 'CHSA'},
        {thumbnail: CHSAcover, title: "MAT Vol 15", desc: "bom dia", materia: 'MAT'},
        {thumbnail: CHSAcover, title: "LIN Vol 07", desc: "bom dia", materia: 'LIN'},
        {thumbnail: CHSAcover, title: "LIN Vol 07", desc: "bom dia", materia: 'LINa'},
    ]
/* console.log(Modulos[0].Descricao) */
{/* <BookCards title={x.title} desc={x.desc} thumbnail={x.thumbnail} ></BookCards> */}

let Livros = Modulos.map((x) => x = <BookCards title={x.title} desc={x.desc} thumbnail={x.thumbnail} materia={x.materia}></BookCards>)
console.log(Livros)

    return (
        <div className={style.container}>
            <h2>Tá procurando o que?</h2>
            <div className={style.subcontainer}>
                <p>Pesquise pelo volume ou componente que deseja!</p>
                <div onClick={() => alert('A nomenclatura de componentes é: LNG -> Linguagens, MAT -> Matemática, CNT -> Ciências naturais, CHSA = Ciências humanas. Para volumes basta apenas inserir o numero.')}><BiSolidHelpCircle /></div>
            </div>
            
            <div className={style.searchbox}>
                <IconContext.Provider value={{size: 20, style: {verticalAlign: 'middle'}}}><BiSearch></BiSearch></IconContext.Provider>
                
                <input type="text" id="search" placeholder="Pesquisa"/>
            </div>
            <div className={style.booklib}>
            {Livros}
            </div>
        </div>
            
    );
}