// import logo from "./logo.svg";
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Layout from './components/Layout';
import About from './pages/About';
import Learn from './pages/Learn';
import Learn2 from './pages/Learn2';
import Learn3 from './pages/Learn3';
import Learn4 from './pages/Learn4';
import Learn4New from './pages/Learn4New';
import Learn4New2 from './pages/Learn4New2';
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/learn" element={<Learn />}></Route>
          <Route path="/learn2" element={<Learn2 />}></Route>
          <Route path="/learn3" element={<Learn3 />}></Route>
          <Route path="/learn4" element={<Learn4 />}></Route>
          <Route path="/learn4New" element={<Learn4New />}></Route>
          <Route path="/learn4New2" element={<Learn4New2 />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
