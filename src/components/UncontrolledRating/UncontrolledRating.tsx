import React, {useState} from "react";


type RatingPropsType = {
   /* value: number*/
}

export function UncontrolledRating(props: RatingPropsType) {

    let [value, setValue] = useState(0)
    return (<div>

            <Star selected={value > 0}/><button onClick={()=>{setValue(value=1)}}>1</button>
            <Star selected={value > 1}/><button onClick={()=>{setValue(value=2)}}>1</button>
            <Star selected={value > 2}/><button onClick={()=>{setValue(value=3)}}>1</button>
            <Star selected={value > 3}/><button onClick={()=>{setValue(value=4)}}>1</button>
            <Star selected={value > 4}/><button onClick={()=>{setValue(value=5)}}>1</button>

        </div>
    );


}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}

