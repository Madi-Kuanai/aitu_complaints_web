'use client';
import "./index.css"
import {useEffect} from "react";
import {AppViewModel} from "./viewModel/AppViewModel";
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {AccordionScreen} from "./screens/AccordionScreen";


function App() {
    const {initTelegram} = AppViewModel()
    useEffect(() => {
        initTelegram()
    }, [initTelegram]);

    return (<Router>
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/complaints" element={<AccordionScreen/>}/>
        </Routes>
    </Router>);
}

export default App;
