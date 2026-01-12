import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import UseState from "./pages/UseState";
import Props from "./pages/Props.jsx";
import List from "./pages/ListRender.jsx";
import Mini from "./pages/MiniTask.jsx";
import UseEffect from "./pages/UseEffect.jsx";
import UserEffectTest from "./pages/UseEffectTest.jsx";

import './App.css'

function App() {
    return (
        <BrowserRouter>
            <nav style={{ display: "flex", gap: "10px" }}>
                <Link to="/">Home</Link> |
                <Link to="/state">UseState</Link> |
                <Link to="/props">Props</Link> |
                <Link to="/list">List</Link> |
                <Link to="/task">Mini Task</Link> |
                <Link to="/use-effect">UseEffect</Link> |
                <Link to="/user-effect-test">UserEffectTest</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/state" element={<UseState />} />
                <Route path="/props" element={<Props />} />
                <Route path="/list" element={<List />} />
                <Route path="/task" element={<Mini />} />
                <Route path="/use-effect" element={<UseEffect />} />
                <Route path="/user-effect-test" element={<UserEffectTest />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
