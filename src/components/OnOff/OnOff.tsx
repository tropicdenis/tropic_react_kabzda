import React, {useState} from 'react';

type OnOffPropsType = {
    onClick: (on:boolean) => void
    onFlag: boolean
}

export function OnOff(props: OnOffPropsType) {



    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inLine-block",
        padding: "2px",
        backgroundColor: props.onFlag ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inLine-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.onFlag ? "white" : "red"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inLine-block",
        marginLeft: "5px",
        backgroundColor: props.onFlag ? "green" : "red"
    };

    return (
        <div>
            <div style={onStyle} onClick = {()=> {props.onClick(true)}}>On</div>
            <div style={offStyle} onClick={()=> {props.onClick(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}
