import React from "react";



export type collapsedType = boolean;
export type AccordionPropsType = {
    titleValue: string
    /**
     * Function that are called when element pressed
     * @param collapsed
     */

    onClick: (collapsed: collapsedType) => void
    collapsed: collapsedType
    /**
     * optional color of header text
     */
    color?: string
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            color={props.color}
                            onClick={props.onClick}
                            collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

export type AccordionTitlePropsType = {
    title: string
    onClick: (collapsed: collapsedType) => void
    collapsed: collapsedType
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3
            style={{color: props.color ? props.color : "black"}}
            onClick={() => {
                props.onClick(!props.collapsed)
            }
            }>---{props.title}---</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
