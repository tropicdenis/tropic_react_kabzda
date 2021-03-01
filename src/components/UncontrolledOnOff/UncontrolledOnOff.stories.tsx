import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff stories  ',
    component: UncontrolledOnOff
} ;

const callback = action("OnOff mode change fired")

export const OnOffModeChanging= ()=> <UncontrolledOnOff  onChange={callback}/>;

