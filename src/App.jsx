import About from "./About/About.jsx";
import Services from "./Services/Services.jsx";
import TopBar from "./TopBar/TopBar.jsx";
import Home from "./Home/home.jsx";
import processData from "./utils/processData.js";
import data from "./assets/data.json";
import Skills from "./Skills/Skills.jsx";

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
        </div>
    )

}

export default App
