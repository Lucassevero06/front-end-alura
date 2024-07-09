import { useState } from 'react';
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
  // hooks
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  

  const aoSalvar = (e) => {
    e.preventDefault()
    console.log("form foi submetido => ", nome, cargo, imagem, time)
  }


  return (
    <section className='formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Crie um Colaborador</h2>
            <CampoTexto
                obrigatorio={true} 
                label={'Nome'} 
                placeholder={'Digite seu nome'}
                valor={nome}
                aoAlterado={valor => setNome(valor)}
              />
            <CampoTexto 
                obrigatorio={true} 
                label={'Cargo'} 
                placeholder={'Digite seu cargo'}
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
              />
            <CampoTexto 
                label={'Imagem'} 
                placeholder={'Digite o endereço da imagem'}
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
              />
            <ListaSuspensa
                label={'Time'} 
                itens={times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
              />
            <Botao>
                Criar
            </Botao>
        </form>
    </section>
  )
}

export default Formulario