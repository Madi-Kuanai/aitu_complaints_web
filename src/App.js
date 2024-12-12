'use client';
import "./index.css"
import {useEffect} from "react";
import {AppViewModel} from "./viewModel/AppViewModel";
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {AccordionScreen} from "./screens/AccordionScreen";
import {FormScreen} from "./screens/FormScreen";


function App() {
    const {initTelegram} = AppViewModel()
    useEffect(() => {
        initTelegram()
    }, [initTelegram]);
    return (<Router>
        <Routes>
            <Route path="/" element={<AccordionScreen/>}/>
            <Route path="/form" element={<FormScreen/>}/>
        </Routes>
    </Router>);
}

export default App;
