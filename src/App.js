'use client';
import "./index.css"
import {useEffect} from "react";
import {AppViewModel} from "./viewModel/AppViewModel";
import {PropsWithChildren} from "react";
import {Header} from "./components/Header";

const Frame: React.FC<PropsWithChildren> = ({children}) => {
    return <div className="flex flex-col items-center justify-center w-full h-full bg-[#1c1c1c]">
        {children}
    </div>;
}

function App() {
    const {initTelegram} = AppViewModel()

    useEffect(() => {
        initTelegram()
    }, [initTelegram]);
    return (
        <div className="App flex relative flex-col items-center justify-center">
            <Frame>
                <Header/>
                <h1 className="text-white font-bold font-sans text-4xl"> AITU Complaints</h1>
                <h1 className="font-medium text-center text-[#555] m-10 font-montserrat "> Я ваш комплаенс-бот
                    AITU.
                    Моя цель — помочь вам решить проблемы и ответить на вопросы. </h1>
                <div className="flex justify-between items-center mb-3.5 gap-4">
                    <button className="p-4 pl-6 pr-6 bg-[#eee] text-xl rounded-xl">Начать</button>
                </div>
            </Frame>
        </div>
    );
}

export default App;
