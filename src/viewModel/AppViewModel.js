import {useCallback, useMemo, useState} from "react";
import {sendComplaints} from "../service/TelegramService";

let instance = null;

export function AppViewModel() {
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
    const [userInput, setUserInput] = useState('');
    const [placeholder] = useState('Расскажите подробно...');
    const [loading, setLoading] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const [isError, setIsError] = useState(false);

    const tg = window.Telegram ? window.Telegram.WebApp : null;

    const handleResize = useCallback(() => setViewportHeight(window.innerHeight), []);

    const initTelegram = useCallback(() => {
        window.addEventListener('resize', handleResize);
        if (!window.Telegram) alert('Telegram WebApp API не доступен');
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    const onSendComplaints = useCallback(async (type) => {
        if (userInput.trim() === "") return;
        setLoading(true);
        setIsEnd(false);
        setIsError(false);

        try {
            const webAppQueryId = tg.initDataUnsafe.query_id;
            const response = await sendComplaints(webAppQueryId, userInput, type);
            setLoading(false);
            setIsEnd(true);
            if (response.ok) tg.close();
        } catch (error) {
            setLoading(false);
            setIsEnd(true);
            setIsError(true);
        }
    }, [userInput, tg]);

    const resetLoading = useCallback(() => {
        setLoading(false);
        setIsEnd(false);
        setIsError(false);
    }, []);

    instance = useMemo(() => ({
        viewportHeight,
        initTelegram,
        userInput,
        setUserInput,
        placeholder,
        resetLoading,
        onSendComplaints,
        loading,
        isError,
        isEnd
    }), [
        viewportHeight,
        initTelegram,
        userInput,
        placeholder,
        resetLoading,
        onSendComplaints,
        loading,
        isError,
        isEnd
    ]);
    return instance;
}
