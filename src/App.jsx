import About from "./About/About.jsx";
import Services from "./Services/Services.jsx";
import TopBar from "./TopBar/TopBar.jsx";
import Home from "./Home/home.jsx";
import processData from "./utils/processData.js";
import data from "./assets/data.json";
import Skills from "./Skills/Skills.jsx";
import Projects from "./Projects/Projects.jsx";
import Contact from "./Contact/Contact.jsx";

function App() {
    let processedData;
    processedData = processData(data);

    return (
        <div className="App">
            <TopBar/>
            <Home data={processedData}/>
            <About data={processedData}/>
            <Services data={processedData}/>
            <Skills data={processedData}/>
            <Projects data={processedData}/>
            <Contact data={processedData}/>
            <footer>© 2025 Faizan Ahmed. All Rights Reserved.</footer>
        </div>
    )

}

export default App
