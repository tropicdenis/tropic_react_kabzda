import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion stories  ',
    component: Accordion
} ;

const callback = action("accordion mode change fired")

export const MenuCollapsedMode= ()=> <Accordion  titleValue={"Menu"} onClick={callback} collapsed={true}/>;
export const UnCollapsedMode= ()=> <Accordion  titleValue={"Users"} onClick={callback} collapsed={false}/>;

export const ModeChanging = ()=> {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"} onClick={()=>setValue(!value)} collapsed={value}/>;
}
