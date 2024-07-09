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

  return (
    <section className='formulario'>
        <form>
            <h2>Crie um Colaborador</h2>
            <CampoTexto label={'Nome'} placeholder={'Digite seu nome'}/>
            <CampoTexto label={'Cargo'} placeholder={'Digite seu cargo'}/>
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