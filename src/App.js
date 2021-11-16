import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Soldiers from "./components/Soldiers";
import Spouses from "./components/Spouses";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import HandleSoldier from "./components/HandleSoldier";
import HandleSpouse from "./components/HandleSpouse";

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
                        <Route path="/add-soldier" element={<HandleSoldier />}/>
                        <Route path="/edit-soldier/:id" element={<HandleSoldier />}/>
                        <Route path="/spouse" element={<Spouses />}/>
                        <Route path="/add-spouse" element={<HandleSpouse />}/>
                        <Route path="/edit-spouse/:id" element={<HandleSpouse />}/>
                    </Routes>
                </div>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
