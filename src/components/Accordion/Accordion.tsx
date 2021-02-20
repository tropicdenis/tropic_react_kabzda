import React from "react";

/*export type collapsedType = {
    collapsed: boolean
}*/

export type collapsedType = boolean;
type AccordionPropsType = {
    titleValue: string
    onClick: (collapsed: collapsedType) => void
    collapsed: collapsedType
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
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
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {debugger
            props.onClick(!props.collapsed)}
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

export default Accordion