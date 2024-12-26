import About from "./About/About.jsx";
import Services from "./Services/Services.jsx";
import TopBar from "./TopBar/TopBar.jsx";
import Home from "./Home/home.jsx";
import processData from "./utils/processData.js";
import data from "./assets/data.json";
import DeviceDetector from "./utils/DeviceDetector.jsx";
import {useState} from "react";

function App() {
    let processedData;
    processedData = processData(data);

    const [isSmall, setIsSmall] = useState(false);

    return (
        <div className="App">
            <TopBar isSmall={isSmall}/>
            <Home data={processedData} isSmall={isSmall}/>
            <About data={processedData} isSmall={isSmall}/>
            <Services data={processedData}/>

            <DeviceDetector setIsSmall={setIsSmall}/>
        </div>
    )

}

export default App
