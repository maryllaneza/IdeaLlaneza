import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
  <div class="container">
    <NavBar />
    <ItemListContainer/>
    </div>
  );
}

export default App;
