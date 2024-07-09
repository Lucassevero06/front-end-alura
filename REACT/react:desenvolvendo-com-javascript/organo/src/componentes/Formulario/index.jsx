import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  const aoSalvar = (e) => {
    e.preventDefault()
    console.log("form foi submetido")
  }

  return (
    <section className='formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Crie um Colaborador</h2>
            <CampoTexto obrigatorio={true} label={'Nome'} placeholder={'Digite seu nome'}/>
            <CampoTexto obrigatorio={true} label={'Cargo'} placeholder={'Digite seu cargo'}/>
            <CampoTexto label={'Imagem'} placeholder={'Digite o endereço da imagem'}/>
            <ListaSuspensa label={'Time'} itens={times}/>
            <Botao>
                Criar
            </Botao>
        </form>
    </section>
  )
}

export default Formulario