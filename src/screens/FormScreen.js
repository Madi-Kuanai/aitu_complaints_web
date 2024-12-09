import {useLocation} from "react-router-dom";
import {findCategoryById} from "../Categories";

export function FormScreen() {
    const location = useLocation();
    const {state} = location;
    console.log(state)
    return <div className="form flex flex-col items-center justify-center w-full h-full bg-[#1c1c1c]">

        <h2 className="text-white mt-[10%]">{findCategoryById(state.isSub ? state?.id : state?.id).name}</h2>
        <h1>В разработке</h1>
    </div>
}