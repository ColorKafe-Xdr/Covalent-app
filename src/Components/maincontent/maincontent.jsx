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
        {thumbnail: CHSAcover, title: "CHSA Vol 25", desc: "Descrição", materia: 'CHSA', query: 25},
        {thumbnail: CHSAcover, title: "CHSA Vol 26", desc: "Descrição", materia: 'CHSA', query: 26},
        {thumbnail: CHSAcover, title: "CHSA Vol 27", desc: "Descrição", materia: 'CHSA', query: 27},
        {thumbnail: CHSAcover, title: "CHSA Vol 28", desc: "Descrição", materia: 'CHSA', query: 28},
        {thumbnail: CHSAcover, title: "CHSA Vol 29", desc: "Descrição", materia: 'CHSA', query: 29},
        {thumbnail: CHSAcover, title: "CHSA Vol 30", desc: "Descrição", materia: 'CHSA', query: 30},
        {thumbnail: CHSAcover, title: "CHSA Vol 31", desc: "Descrição", materia: 'CHSA', query: 31},
        {thumbnail: CHSAcover, title: "CHSA Vol 32", desc: "Descrição", materia: 'CHSA', query: 32},
        {thumbnail: CHSAcover, title: "CHSA Vol 33", desc: "Descrição", materia: 'CHSA', query: 33},
        {thumbnail: CHSAcover, title: "CHSA Vol 34", desc: "Descrição", materia: 'CHSA', query: 34},
        {thumbnail: CHSAcover, title: "CHSA Vol 35", desc: "Descrição", materia: 'CHSA', query: 35},
        {thumbnail: CHSAcover, title: "CHSA Vol 36", desc: "Descrição", materia: 'CHSA', query: 36},
        {thumbnail: CHSAcover, title: "CHSA Vol 25 Cad+", desc: "Descrição", materia: 'CHSA', query: 61},
        {thumbnail: CHSAcover, title: "CHSA Vol 26 Cad+", desc: "Descrição", materia: 'CHSA', query: 62},
        {thumbnail: CHSAcover, title: "CHSA Vol 27 Cad+", desc: "Descrição", materia: 'CHSA', query: 63},
        {thumbnail: CHSAcover, title: "CHSA Vol 28 Cad+", desc: "Descrição", materia: 'CHSA', query: 64},
        {thumbnail: CHSAcover, title: "CHSA Vol 29 Cad+", desc: "Descrição", materia: 'CHSA', query: 65},
        {thumbnail: CHSAcover, title: "CHSA Vol 30 Cad+", desc: "Descrição", materia: 'CHSA', query: 66},
        {thumbnail: CHSAcover, title: "CHSA Vol 31 Cad+", desc: "Descrição", materia: 'CHSA', query: 67},
        {thumbnail: CHSAcover, title: "CHSA Vol 32 Cad+", desc: "Descrição", materia: 'CHSA', query: 68},
        {thumbnail: CHSAcover, title: "CHSA Vol 33 Cad+", desc: "Descrição", materia: 'CHSA', query: 69},
        {thumbnail: CHSAcover, title: "CHSA Vol 34 Cad+", desc: "Descrição", materia: 'CHSA', query: 70},
        {thumbnail: CHSAcover, title: "CHSA Vol 35 Cad+", desc: "Descrição", materia: 'CHSA', query: 71},
        {thumbnail: CHSAcover, title: "CHSA Vol 36 Cad+", desc: "Descrição", materia: 'CHSA', query: 72},
        {thumbnail: CHSAcover, title: "Prep. His. Vol 1", desc: "Descrição", materia: 'CHSA', query: 73},
        {thumbnail: PREPcover, title: "Prep. His. Vol 2", desc: "Descrição", materia: 'CHSA', query: 77},
        {thumbnail: PREPcover, title: "Prep. Geo. Vol 1", desc: "Descrição", materia: 'CHSA', query: 74},
        {thumbnail: PREPcover, title: "Prep. Geo. Vol 2", desc: "Descrição", materia: 'CHSA', query: 78},
        {thumbnail: PREPcover, title: "Prep. Soc. Vol 1", desc: "Descrição", materia: 'CHSA', query: 75},
        {thumbnail: PREPcover, title: "Prep. Soc. Vol 2", desc: "Descrição", materia: 'CHSA', query: 79},
        {thumbnail: PREPcover, title: "Prep. Fil. Vol 1", desc: "Descrição", materia: 'CHSA', query: 76},
        {thumbnail: PREPcover, title: "Prep. Fil. Vol 2", desc: "Descrição", materia: 'CHSA', query: 80},
        {thumbnail: CNTcover, title: "CNT Vol 25", desc: "Descrição", materia: 'CNT', query: 125},
        {thumbnail: CNTcover, title: "CNT Vol 26", desc: "Descrição", materia: 'CNT', query: 126},
        {thumbnail: CNTcover, title: "CNT Vol 27", desc: "Descrição", materia: 'CNT', query: 127},
        {thumbnail: CNTcover, title: "CNT Vol 28", desc: "Descrição", materia: 'CNT', query: 128},
        {thumbnail: CNTcover, title: "CNT Vol 29", desc: "Descrição", materia: 'CNT', query: 129},
        {thumbnail: CNTcover, title: "CNT Vol 30", desc: "Descrição", materia: 'CNT', query: 130},
        {thumbnail: CNTcover, title: "CNT Vol 31", desc: "Descrição", materia: 'CNT', query: 131},
        {thumbnail: CNTcover, title: "CNT Vol 32", desc: "Descrição", materia: 'CNT', query: 132},
        {thumbnail: CNTcover, title: "CNT Vol 33", desc: "Descrição", materia: 'CNT', query: 133},
        {thumbnail: CNTcover, title: "CNT Vol 34", desc: "Descrição", materia: 'CNT', query: 134},
        {thumbnail: CNTcover, title: "CNT Vol 35", desc: "Descrição", materia: 'CNT', query: 135},
        {thumbnail: CNTcover, title: "CNT Vol 36", desc: "Descrição", materia: 'CNT', query: 136},
        {thumbnail: CNTcover, title: "CNT Vol 25 Cad+", desc: "Descrição", materia: 'CNT', query: 161},
        {thumbnail: CNTcover, title: "CNT Vol 26 Cad+", desc: "Descrição", materia: 'CNT', query: 162},
        {thumbnail: CNTcover, title: "CNT Vol 27 Cad+", desc: "Descrição", materia: 'CNT', query: 163},
        {thumbnail: CNTcover, title: "CNT Vol 28 Cad+", desc: "Descrição", materia: 'CNT', query: 164},
        {thumbnail: CNTcover, title: "CNT Vol 29 Cad+", desc: "Descrição", materia: 'CNT', query: 165},
        {thumbnail: CNTcover, title: "CNT Vol 30 Cad+", desc: "Descrição", materia: 'CNT', query: 166},
        {thumbnail: CNTcover, title: "CNT Vol 31 Cad+", desc: "Descrição", materia: 'CNT', query: 167},
        {thumbnail: CNTcover, title: "CNT Vol 32 Cad+", desc: "Descrição", materia: 'CNT', query: 168},
        {thumbnail: CNTcover, title: "CNT Vol 33 Cad+", desc: "Descrição", materia: 'CNT', query: 169},
        {thumbnail: CNTcover, title: "CNT Vol 34 Cad+", desc: "Descrição", materia: 'CNT', query: 170},
        {thumbnail: CNTcover, title: "CNT Vol 35 Cad+", desc: "Descrição", materia: 'CNT', query: 171},
        {thumbnail: CNTcover, title: "CNT Vol 36 Cad+", desc: "Descrição", materia: 'CNT', query: 172},
        {thumbnail: PREPcover, title: "Prepara Bio. Vol 1", desc: "Descrição", materia: 'CNT', query: 173},
        {thumbnail: PREPcover, title: "Prepara Bio. Vol 2", desc: "Descrição", materia: 'CNT', query: 178},
        {thumbnail: PREPcover, title: "Prepara Fís. Vol 1", desc: "Descrição", materia: 'CNT', query: 175},
        {thumbnail: PREPcover, title: "Prepara Fís. Vol 2", desc: "Descrição", materia: 'CNT', query: 176},
        {thumbnail: PREPcover, title: "Prepara Quí. Vol 1", desc: "Descrição", materia: 'CNT', query: 174},
        {thumbnail: PREPcover, title: "Prepara Quí. Vol 2", desc: "Descrição", materia: 'CNT', query: 177},
        {thumbnail: LNGcover, title: "LNG Vol 25", desc: "Descrição", materia: 'LIN', query: 225},
        {thumbnail: LNGcover, title: "LNG Vol 26", desc: "Descrição", materia: 'LIN', query: 226},
        {thumbnail: LNGcover, title: "LNG Vol 27", desc: "Descrição", materia: 'LIN', query: 227},
        {thumbnail: LNGcover, title: "LNG Vol 28", desc: "Descrição", materia: 'LIN', query: 228},
        {thumbnail: LNGcover, title: "LNG Vol 29", desc: "Descrição", materia: 'LIN', query: 229},
        {thumbnail: LNGcover, title: "LNG Vol 30", desc: "Descrição", materia: 'LIN', query: 230},
        {thumbnail: LNGcover, title: "LNG Vol 31", desc: "Descrição", materia: 'LIN', query: 231},
        {thumbnail: LNGcover, title: "LNG Vol 32", desc: "Descrição", materia: 'LIN', query: 232},
        {thumbnail: LNGcover, title: "LNG Vol 33", desc: "Descrição", materia: 'LIN', query: 233},
        {thumbnail: LNGcover, title: "LNG Vol 34", desc: "Descrição", materia: 'LIN', query: 234},
        {thumbnail: LNGcover, title: "LNG Vol 35", desc: "Descrição", materia: 'LIN', query: 235},
        {thumbnail: LNGcover, title: "LNG Vol 36", desc: "Descrição", materia: 'LIN', query: 236},
        {thumbnail: LNGcover, title: "LNG Vol 25 Cad+", desc: "Descrição", materia: 'LIN', query: 261},
        {thumbnail: LNGcover, title: "LNG Vol 26 Cad+", desc: "Descrição", materia: 'LIN', query: 262},
        {thumbnail: LNGcover, title: "LNG Vol 27 Cad+", desc: "Descrição", materia: 'LIN', query: 263},
        {thumbnail: LNGcover, title: "LNG Vol 28 Cad+", desc: "Descrição", materia: 'LIN', query: 264},
        {thumbnail: LNGcover, title: "LNG Vol 29 Cad+", desc: "Descrição", materia: 'LIN', query: 265},
        {thumbnail: LNGcover, title: "LNG Vol 30 Cad+", desc: "Descrição", materia: 'LIN', query: 266},
        {thumbnail: LNGcover, title: "LNG Vol 31 Cad+", desc: "Descrição", materia: 'LIN', query: 267},
        {thumbnail: LNGcover, title: "LNG Vol 32 Cad+", desc: "Descrição", materia: 'LIN', query: 268},
        {thumbnail: LNGcover, title: "LNG Vol 33 Cad+", desc: "Descrição", materia: 'LIN', query: 269},
        {thumbnail: LNGcover, title: "LNG Vol 34 Cad+", desc: "Descrição", materia: 'LIN', query: 270},
        {thumbnail: LNGcover, title: "LNG Vol 35 Cad+", desc: "Descrição", materia: 'LIN', query: 271},
        {thumbnail: LNGcover, title: "LNG Vol 36 Cad+", desc: "Descrição", materia: 'LIN', query: 272},
        {thumbnail: PREPcover, title: "Prepara Lit. Vol 1", desc: "Descrição", materia: 'LIN', query: 273},
        {thumbnail: PREPcover, title: "Prepara Lit. Vol 2", desc: "Descrição", materia: 'LIN', query: 276},
        {thumbnail: PREPcover, title: "Prepara EL. Vol 1", desc: "Descrição", materia: 'LIN', query: 274},
        {thumbnail: PREPcover, title: "Prepara EL. Vol 2", desc: "Descrição", materia: 'LIN', query: 277},
        {thumbnail: PREPcover, title: "Prepara PT. Vol 1", desc: "Descrição", materia: 'LIN', query: 275},
        {thumbnail: PREPcover, title: "Prepara PT. Vol 2", desc: "Descrição", materia: 'LIN', query: 27},
        {thumbnail: PREPcover, title: "Prepara Mat. Vol 1", desc: "Descrição", materia: 'MAT', query: 373},
        {thumbnail: PREPcover, title: "Prepara Mat. Vol 2", desc: "Descrição", materia: 'MAT', query: 374},
        {thumbnail: PREPcover, title: "Prepara Ing. Vol 1", desc: "Descrição", materia: '', query: 401},
        {thumbnail: PREPcover, title: "Prepara Ing. Vol 2", desc: "Descrição", materia: '', query: 402},
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
                <div onClick={() => alert('LNG = Linguagens, MAT = Matemática, CNT = Ciências naturais, CHSA = Ciências humanas. Cad+ = Caderno+, EL = Estudos da linguagem, PT = Produção de texto')}><BiSolidHelpCircle /></div>
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