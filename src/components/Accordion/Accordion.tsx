import React from "react";

type ItemType = {
    title: string
    value: any
}

export type collapsedType = boolean;

export type AccordionPropsType = {
    titleValue: string
    /**
     * Function that are called when element pressed
     * @param collapsed
     */

    onChange: (collapsed: collapsedType) => void
    collapsed: collapsedType
    /**
     * optional color of header text
     */
    color?: string
    items: ItemType[] //Array<string>
    onClick: (value: any) => void
}

function AccordionM(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            color={props.color}
                            onChange={props.onChange}
                            collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
}
export const Accordion = React.memo(AccordionM)

export type AccordionTitlePropsType = {
    title: string
    onChange: (collapsed: collapsedType) => void
    collapsed: collapsedType
    color?: string
}

function AccordionTitleM(props: AccordionTitlePropsType) {
    return (
        <h3
            style={{color: props.color ? props.color : "black"}}
            onClick={() => {
                props.onChange(!props.collapsed)
            }
            }>---{props.title}---</h3>
    )
}

const AccordionTitle = React.memo(AccordionTitleM)

export type AccordionBodyPropsType = {
    items: ItemType[] //Array<string>
    onClick: (value: any) => void
}

function AccordionBodyM(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) =>
                <li onClick = {()=> {props.onClick(i.value)}} key = {index}>{i.title}</li>)}
        </ul>
    )
}

const AccordionBody = React.memo(AccordionBodyM)

