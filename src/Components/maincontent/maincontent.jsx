import style from "./maincontent.module.css"
import { BiSearch } from "react-icons/bi";
import Template from "../../assets/react.svg"
import CHSAcover from '../../assets/CHSA-cover.png'
import CNTcover from '../../assets/CNT-cover.png'
import LNGcover from '../../assets/LNG-cover.png'
import PREPcover from '../../assets/PREP-cover.png'
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import { BiSolidHelpCircle } from "react-icons/bi";
import { Link } from "react-router";




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
        {thumbnail: CNTcover, title: "CNT Vol 25", desc: "bom diaa tudo bem vom o senhor", materia: 'CNT', query: 126},
        {thumbnail: CNTcover, title: "CNT Vol 26", desc: "bom diaa tudo bem vom o senhor", materia: 'CNT', query: 127},
        {thumbnail: CNTcover, title: "CNT Vol 27", desc: "bom diaa tudo bem vom o senhor", materia: 'CNT', query: 128},
        {thumbnail: CNTcover, title: "CNT Vol 28", desc: "bom diaa tudo bem vom o senhor", materia: 'CNT', query: 129},
        {thumbnail: CNTcover, title: "CNT Vol 29", desc: "bom diaa tudo bem vom o senhor", materia: 'CNT', query: 130},
        {thumbnail: CNTcover, title: "CNT Vol 30", desc: "bom diaa tudo bem vom o senhor", materia: 'CNT', query: 131},
        {thumbnail: CNTcover, title: "CNT Vol 31", desc: "bom diaa tudo bem vom o senhor", materia: 'CNT', query: 132},
        {thumbnail: CNTcover, title: "CNT Vol 32", desc: "bom diaa tudo bem vom o senhor", materia: 'CNT', query: 133},
        {thumbnail: CNTcover, title: "CNT Vol 33", desc: "bom diaa tudo bem vom o senhor", materia: 'CNT', query: 134},
        {thumbnail: CNTcover, title: "CNT Vol 34", desc: "bom diaa tudo bem vom o senhor", materia: 'CNT', query: 135},
        {thumbnail: CNTcover, title: "CNT Vol 35", desc: "bom diaa tudo bem vom o senhor", materia: 'CNT', query: 136},
        {thumbnail: CNTcover, title: "CNT Vol 36", desc: "bom diaa tudo bem vom o senhor", materia: 'CNT', query: 137},
        {thumbnail: PREPcover, title: "Prepara Bio. Vol 1", desc: "bom diaa tudo bem vom o senhor", materia: 'CNT', query: 175},
        {thumbnail: PREPcover, title: "Prepara Bio. Vol 2", desc: "bom diaa tudo bem vom o senhor", materia: 'CNT', query: 180},
        {thumbnail: PREPcover, title: "Prepara Fís. Vol 1", desc: "bom diaa tudo bem vom o senhor", materia: 'CNT', query: 177},
        {thumbnail: PREPcover, title: "Prepara Fís. Vol 2", desc: "bom diaa tudo bem vom o senhor", materia: 'CNT', query: 178},
        {thumbnail: PREPcover, title: "Prepara Quí. Vol 1", desc: "bom diaa tudo bem vom o senhor", materia: 'CNT', query: 176},
        {thumbnail: PREPcover, title: "Prepara Quí. Vol 2", desc: "bom diaa tudo bem vom o senhor", materia: 'CNT', query: 179},
        {thumbnail: CHSAcover, title: "CHSA Vol 34", desc: "bom dia", materia: 'CHSA', query: 34},
        {thumbnail: CHSAcover, title: "MAT Vol 15", desc: "bom dia", materia: 'MAT', query: 315},
        {thumbnail: LNGcover, title: "LIN Vol 07", desc: "bom dia", materia: 'LIN', query: 107},
        {thumbnail: LNGcover, title: "LIN Vol 07", desc: "bom dia", materia: 'LINa', query: 107},
    ]
/* console.log(Modulos[0].Descricao) */
{/* <BookCards title={x.title} desc={x.desc} thumbnail={x.thumbnail} ></BookCards> */}

let Livros = Modulos.map((x) => x = <BookCards title={x.title} desc={x.desc} thumbnail={x.thumbnail} materia={x.materia} bookid={'/livro?id='+x.query}></BookCards>)
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