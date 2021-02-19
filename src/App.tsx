import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);

    return (
        <div className={"App"}>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/* <UncontrolledAccordion titleValue={"Users"}/>*/}
            {/*  <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Users"} collapsed={true}/>*/}
              <UncontrolledRating />
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
