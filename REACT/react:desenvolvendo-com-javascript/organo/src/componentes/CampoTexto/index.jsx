import './CampoTexto.css';

const CampoTexto = () => {
    return (
        <div className='campo-texto'>
            <label htmlFor="nome">Nome</label>
            <input placeholder='Digite o seu nome' />
        </div>
    )
}

export default CampoTexto