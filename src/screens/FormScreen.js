import {useLocation} from "react-router-dom";
import {findCategoryById} from "../Categories";
import {AppViewModel} from "../viewModel/AppViewModel";
import {HintTooltip} from "../components/Tooltip";
import {useMemo} from "react";

export function FormScreen() {
    const {placeholder, userInput, setUserInput} = AppViewModel();
    const location = useLocation();
    const {state} = location;
    const category = useMemo(() => findCategoryById(state.isSub ? state?.id : state?.id), [state]);
    console.log(category)
    return <div className="form flex flex-col items-center justify-center w-full h-full bg-[#1c1c1c]">
        <div className="w-full items-center justify-center float-end flex space-x-2">
            <h3 className="text-white mt-[10%]">{category.name}</h3>
            <HintTooltip hint={category.description}/>
        </div>
        <textarea
            className="text-box h-1/2 border-2 border-[#444] bg-[#444] w-4/5 mt-16 p-3.5 rounded resize-none text-white"
            placeholder={placeholder}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
        />
        <button className={"mt-6 bg-[#444] text-white border-0 rounded mb-3.5"}
                style={{padding: "10px 20px"}}>Отправить
        </button>
    </div>
}