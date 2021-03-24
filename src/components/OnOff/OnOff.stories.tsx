import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff stories  ',
    component: OnOff,
} ;

const callback = action("on or off clicked")

export const OnMode= ()=> <OnOff onFlag={true} onClick={callback}/>;
export const OffMode= ()=> <OnOff onFlag={false} onClick={callback}/>;

export const ModeChanging = ()=> {
    const [value, setValue] = useState<boolean>(true)

    return <OnOff onFlag={value} onClick={setValue}/>;
}
