import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion, {collapsedType} from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<collapsedType>(false);
    let [on, setOn] = useState<boolean>(false)
    return (
        <div className={"App"}>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/* <UncontrolledAccordion titleValue={"Users"}/>*/}
            <Accordion titleValue={"Menu"}
                       onClick={setAccordionCollapsed}
                       collapsed={accordionCollapsed}/>
                       <OnOff onClick={setOn} onFlag={on}/>
            {/* <Accordion titleValue={"Users"} collapsed={true}/>*/}
           {/* <UncontrolledRating/>*/}
        </div>
    );
}

// time 32.33

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}Kuku</h1>
    )
}

export default App;
