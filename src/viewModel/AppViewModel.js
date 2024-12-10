import {useCallback, useState} from "react";

export function AppViewModel() {
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
    const [userInput, setUserInput] = useState('');
    const [placeholder] = useState('Расскажите подробно...');

    const handleResize = () => setViewportHeight(window.innerHeight);

    const initTelegram = useCallback(() => {
        window.addEventListener('resize', handleResize);
        if (!window.Telegram) alert('Telegram WebApp API не доступен');
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        viewportHeight, initTelegram, userInput, setUserInput, placeholder
    }
}