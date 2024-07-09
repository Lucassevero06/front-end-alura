import Banner from './componentes/Banner/Banner.jsx';
import Formulario from './componentes/Formulario';

function App() {

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={colaborador => console.log(colaborador)}
      />
    </div>
  )
}

export default App
