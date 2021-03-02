import React, {useState} from 'react';
import {action} from "@storybook/addon-actions/dist";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react"

export default {
    title: 'components/Accordion stories  ',
    component: Accordion,
    argTypes: {
        color: {
            control: "color",
            table: {
                category: "Colors"
            }
        },
        onClick: {
            table: {
                category: "Events"
            }
        },
        titleValue: {
            table: {
                category: "Main"
            }
        },
        collapsed: {
            table: {
                category: "Main"
            }
        }
    }

};

const callback = action("accordion mode change fired")
const onClickCallback = action("some item was clicked")

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

const callbacksProps = {
    onClick: callback
}

export const MenuCollapsedMode2 = Template.bind({});
MenuCollapsedMode2.args = {
    titleValue: "Menu",
    ...callbacksProps,
    collapsed: true
}

export const MenuCollapsedMode1 = Template.bind({});
MenuCollapsedMode1.args = {
    titleValue: "Users",
    ...callbacksProps,
    collapsed: false
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion {...args} onClick={() => setValue(value)}/>;
}
ModeChanging.args = {
    titleValue: "Users"
}

