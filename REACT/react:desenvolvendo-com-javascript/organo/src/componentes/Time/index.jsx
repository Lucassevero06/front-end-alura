/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import './Time.css'
import Colaborador from '../Colaborador';

const Time = (props) => {

    function

    return (
        // verificando se o array colaboradores tem pelo menos um colaborador
        props.colaboradores.length > 0 && 
        // se for maior que 0, renderiza o time
        <section

            className='time'
            style={{
                backgroundColor: props.corSecundaria
            }}
            >
                <h3 style={{borderColor: props.corPrimaria}}>
                    {props.nome}
                </h3>
                <div className='colaboradores'>
                    {props.colaboradores.map(colaborador => 
                        {
                            return <Colaborador
                                corDeFundo={props.corPrimaria}
                                key={colaborador.nome} 
                                nome={colaborador.nome} 
                                cargo={colaborador.cargo}
                                imagem={colaborador.imagem}
                                aoDeletar={props.aoDeletar}
                            />
                        }  
                    )}
                </div>
                
        </section>
    )
}

export default Time