import Banner from './componentes/Banner/Banner.jsx';
import CampoTexto from './componentes/CampoTexto';

function App() {

  return (
    <div className="App">

      <Banner />
      <CampoTexto label={'Nome'} placeholder={'Insira seu nome'}/>
      <CampoTexto label={'Cargo'} placeholder={'Insira seu cargo'}/>
      <CampoTexto label={'Imagem'} placeholder={'Informe o endereço da imagem'}/>
    </div>
  )
}

export default App
