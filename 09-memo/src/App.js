import logo from './logo.svg';
import './App.css';
import { Gestion } from './components/Gestion'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Gestion/>
      </header>
    </div>
  );
}

export default App;

/*
No deberiamos dejar metodos fuera de hooks como useEffect para lograr
que se ejecuten las veces necesarias en funcion de cambios de estados
de nuestros componentes, en este caso:
los console.log de gestion y empleados se ejecutaban varias veces aunque
no fuera necesario por estar declarados fuera de los useEffect
*/