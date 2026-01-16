import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import UseState from "./pages/UseState";
import Props from "./pages/Props";
import List from "./pages/ListRender";
import Mini from "./pages/MiniTask";
import UseEffect from "./pages/UseEffect";
import UseEffectTest from "./pages/UseEffectTest";
import UseEffectCleanup from "./pages/UseEffectCleanup";
import ResendButton from "./pages/ResendButton";
import LoginForm from "./pages/LoginForm";
import UseRefDemo from "./pages/UseRefDemo";

import './App.css'

function App() {
    return (
        <BrowserRouter>

            <nav style={{ gap: "10px" }}>
                <Link to="/">1. Home</Link> |
                <Link to="/state">2. UseState</Link> |
                <Link to="/props">3. Props</Link> |
                <Link to="/list">4. List</Link> |
                <Link to="/task">5. Mini Task</Link> |
                <Link to="/use-effect">6. UseEffect</Link> |
                <Link to="/use-effect-test">7. UseEffectTest</Link> |
                <Link to="/use-effect-cleanup">8. UseEffectCleanup</Link> |
                <Link to="/resend-button">9. Resend Button</Link> |
                <Link to="/login-form">10. Login Form</Link> |
                <Link to="/use-ref-demo">11. UseRefDemo</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/state" element={<UseState />} />
                <Route path="/props" element={<Props />} />
                <Route path="/list" element={<List />} />
                <Route path="/task" element={<Mini />} />
                <Route path="/use-effect" element={<UseEffect />} />
                <Route path="/use-effect-test" element={<UseEffectTest />} />
                <Route path="/use-effect-cleanup" element={<UseEffectCleanup />} />
                <Route path="/resend-button" element={<ResendButton />} />
                <Route path="/login-form" element={<LoginForm />} />
                <Route path="/use-ref-demo" element={<UseRefDemo />} />
            </Routes>

        </BrowserRouter>
    );
}
export default App;
