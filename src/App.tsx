import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Home from './pages/home';
import Commands from "./pages/commands";


function App() {

  return (
   <div className="App">
    <Router>
      <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/commands" element={<Commands/>}/>
      </Routes>
    </Router>
    </div>

  )
}

export default App;
