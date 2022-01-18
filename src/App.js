import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Estado from "./components/Estado"


const nombre = "Cositas😎";
const pintado = true;
const objeto = {
  nombre: "Pablo Atenciano",
  email: "pabloatenciano@gmail.com"
}
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre"];
function App() {
  return (
    <>
      <div className="App-header">Primera app en React🥵</div>
      
      <div className="App-header">
      <Componente nombre= {nombre} pintado = {pintado} meses={meses} objeto = {objeto}/>
      <Estado />
    </div>
    </>
  );
}

export default App;
