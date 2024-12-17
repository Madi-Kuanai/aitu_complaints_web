import React from "react";
import {Tooltip} from "react-tooltip";
import {BsExclamationCircle} from "react-icons/bs";

export const HintTooltip = (props) => (
    <div className="flex items-center">
        <BsExclamationCircle data-tooltip-content={props.hint} data-tooltip-id="hint" className="text-[#888] mr-2.5"/>
        <Tooltip place="bottom-end" id="hint" type="dark" className="float-left w-75 p-3"/>
    </div>
);
