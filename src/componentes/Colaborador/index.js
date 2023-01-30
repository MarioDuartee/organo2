import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"

import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar(){
        aoFavoritar(colaborador.id)
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }
    return (<div className="colaborador">
        <AiFillCloseCircle
            size={25}
            className="deletar"
            //apenas o onclick não é possivel apagar
            // tem que passar uma arrow function
            // sem arrow function o browser entende que a função tem q ser
            // executada assim que carrega e então chama a funçao e executa
            // com uma arrow function o navegador vai esperar o click para poder executar a função
            onClick={() => aoDeletar(colaborador.id)}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favoritar">
                {colaborador.favorito 
                ? <AiFillHeart {...propsfavorito} color='#FF0000'/>
                : <AiOutlineHeart {...propsfavorito}/>}
            </div>
        </div>
    </div>)
}

export default Colaborador

// No vídeo anterior, tivemos que transformar um evento em uma arrow 
// function para poder passar o 'id' do colaborador como parâmetro, 
// mas por que precisamos fazer isto? não posso simplesmente fazer 
// onClick={aoDeletar(id)}?

// No caso acima, o aoDeletar será executado assim que o componente 
// renderizar (pode tentar!) e isto não é o que esperamos! O onClick espera uma função,
//  e ele recebe a execução dessa função, por isto ele executa assim que renderizado!

// Para resolver este problema, temos duas formas mais comuns,
// com a arrow function ou criando uma função no seu componente!
// Para resolver este problema, temos duas formas mais comuns, com a arrow 
// function ou criando uma função no seu componente!




// COM ARROW FUNCTION 
// const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
//     return (
//       <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(colaborador.id)} />

//     )
// }




// Criando uma função
// const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {

//     function deletarColaborador() {
//       aoDeletar(colaborador.id);
//     }

//     return (
//       <AiFillCloseCircle size={25} className="deletar" onClick={deletarColaborador} />

//     )
// }