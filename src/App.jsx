import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from '../../testit/src/component/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'
import Footer, {FooterDrop} from "../../testit/src/component/Footer.jsx";
import Copyright from "./Functions/Copyright.jsx";

// install the dependencies with npm install and make sure to have node and npm on the computer. to run the project use npm run dev

// the node_modules folder is not included in the project, you need to install the dependencies with npm install, but you can see the package.json file to see the dependencies
// the node_modules is not necessary when deploying the project, the package.json file is enough to install the dependencies

function App() {
    return (
        <div >
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Router>
            <Footer/>
            <FooterDrop/>
          <Copyright />
        </div>
    )
}

export default App
