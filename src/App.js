import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/sidebar/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper.js


function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
