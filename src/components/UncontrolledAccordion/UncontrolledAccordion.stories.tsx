import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion stories  ',
    component: UncontrolledAccordion
};

export const MenuModeChanging = () => <UncontrolledAccordion titleValue={"Menu"}/>;

