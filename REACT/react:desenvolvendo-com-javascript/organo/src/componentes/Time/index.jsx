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
                <Colaborador/>
                <Colaborador/>
                <Colaborador/>
                <Colaborador/>
        </section>
    )
}

export default Time