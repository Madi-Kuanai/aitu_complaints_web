import React, {PropsWithChildren} from 'react';
import {Header} from "../components/Header";
import {useNavigate} from "react-router-dom";

function HomeScreen() {
    const navigate = useNavigate();

    const goToComplaint = () => {
        navigate('/complaints');
    }
    const Frame: React.FC<PropsWithChildren> = ({children}) => {
        return <div className="flex flex-col items-center justify-center w-full h-full bg-[#1c1c1c]">
            {children}
        </div>;
    }
    return (
        <div className="App flex size-full flex-col items-center justify-center">
            <Frame>
                <Header/>
                <h1 className="text-white font-bold font-sans text-4xl"> AITU Complaints</h1>
                <h1 className="font-medium text-center text-[#555] m-10 font-montserrat "> Я ваш комплаенс-бот
                    AITU.
                    Моя цель — помочь вам решить проблемы и ответить на вопросы. </h1>
                <div className="flex justify-between items-center mb-3.5 gap-4">
                    <button
                        className="p-4 pl-6 pr-6 text-white bg-transparent border-2 text-xl rounded-xl hover:bg-white hover:text-black font-montserrat"
                        onClick={goToComplaint}>Начать
                    </button>
                </div>
            </Frame>
        </div>
    );
}

export default HomeScreen;
