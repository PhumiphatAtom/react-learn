// import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/about" element={<p>About</p>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
