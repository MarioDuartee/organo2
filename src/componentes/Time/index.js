import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador'
import './time.css'

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
            <input
                // todo input tem q ter valor e o valor é a corSecundaria
                value={time.cor}
                //O evento onChange é utilizado para que
                // seja realizada determinada ação após alguma mudança

                // aqui ele pega o evento que no caso é o click e o arrastar
                // chama a função que foi passada atraves de props mudarCor
                // depois pega o evento.ElemntoQueExecutouOEvento.PegaOValueDoElemento
                // a vigula separa os dois parametros chamado na função la fora
                onChange={evento => mudarCor(evento.target.value, time.id)}
                // tipo do imput
                type="color"
                className='input-cor' />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return (
                        <Colaborador key={indice}
                            colaborador={colaborador}
                            corDeFundo={time.cor}
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    )
                }
                )}
            </div>
        </section>

    )
}

export default Time