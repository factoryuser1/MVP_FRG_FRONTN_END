import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Soldiers from "./components/Soldiers";
import Spouses from "./components/Spouses";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import AddNewSoldier from "./components/AddNewSoldier";
import AddNewSpouse from "./components/AddNewSpouse";

function App() {

    return (
        <div>
            <Router>
                <Header/>
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<Soldiers />}/>
                        {/*<Route path="/login" element={<Login />}/>*/}
                        <Route path="/soldier" element={<Soldiers />}/>
                        <Route path="/spouse" element={<Spouses />}/>
                        <Route path="/add-soldier" element={<AddNewSoldier />}/>
                        <Route path="/add-spouse" element={<AddNewSpouse />}/>
                    </Routes>
                </div>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
