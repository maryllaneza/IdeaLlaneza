import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
  <div class="container">
    <NavBar />
    <ItemListContainer greeting={'Hola, que tal?'}/>
    <ItemCount stock="5" initial="1" onAdd="onAdd"/>
    </div>
  );
}

export default App;
