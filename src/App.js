import logo from './logo.svg';
import './App.css';
import Navbar from './features/Header/Navbar';
import { Outlet } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">

        <Navbar/>

        <div>
            <Outlet></Outlet>
        </div>
             
        
    </div>
  );
}

export default App;
