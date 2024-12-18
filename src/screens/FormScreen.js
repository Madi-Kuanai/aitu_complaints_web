import {useLocation, useNavigate} from "react-router-dom";
import {findCategoryById} from "../Categories";
import {AppViewModel} from "../viewModel/AppViewModel";
import {HintTooltip} from "../components/Tooltip";
import {useMemo, useState} from "react";

export function FormScreen() {
    const {placeholder, userInput, setUserInput, onSendComplaints} = AppViewModel();
    const location = useLocation();
    const {state} = location;
    const category = useMemo(() => findCategoryById(state.isSub ? state?.id : state?.id), [state]);
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [isSend, setIsSend] = useState(false);

    const handleSendComplaints = async () => {
        setIsLoading(true);
        try {
            await onSendComplaints();
        } catch (error) {
            console.error("Ошибка отправки:", error);
        } finally {
            setIsLoading(false);
            setIsSend(true);
            setTimeout(() => {
                navigate("/")
            }, 1000);
        }
    };

    return (
        <div className="form flex flex-col items-center justify-center w-full h-full bg-[#1c1c1c]">
            <h6 className="text-white w-full ml-[15%] mt-[8%]" onClick={() => {
                navigate("/")
            }}>←Назад</h6>
            <div className="w-full items-center justify-center float-end flex space-x-2">
                {state.isSub ? <h6 className="text-white mt-[8%]">{category.name}</h6> :
                    <h4 className="text-white mt-[8%]">{category.name}</h4>
                }
                <HintTooltip hint={category.description}/>
            </div>
            <textarea
                className="text-box h-1/2 border-2 border-[#444] bg-[#444] w-4/5 mt-16 p-3.5 rounded resize-none text-white focus:border-white"
                placeholder={placeholder}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button
                className={"mt-6 bg-[#444] text-white border-0 rounded mb-3.5"}
                onClick={handleSendComplaints}
                disabled={isLoading}
                style={{padding: "10px 20px", cursor: isLoading ? "not-allowed" : "pointer"}}
            >
                {isLoading ? "Загрузка..." : isSend ? "Отправлено" : "Отправить"}
            </button>
        </div>
    );
}
