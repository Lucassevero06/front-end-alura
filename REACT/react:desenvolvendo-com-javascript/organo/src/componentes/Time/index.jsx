import './Time.css'
import Colaborador from '../Colaborador';

const Time = (props) => {
    return (
        <section
            style={{
                backgroundColor: props.corSecundaria
            }}
            className='time'
            >
                <h3 style={{borderColor: props.corPrimaria}}>
                    {props.nome}
                </h3>
                <div className='colaboradores'>
                    {props.colaboradores.map(colaborador => <Colaborador 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    />)}
                </div>
                
        </section>
    )
}

export default Time