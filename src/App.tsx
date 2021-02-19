import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import {Rating} from './components/Rating/Rating';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';

function App() {
    return (
        <div className={"App"}>
            <OnOff />

            <UncontrolledAccordion titleValue={"Menu"}/>
           {/* <UncontrolledAccordion titleValue={"Users"}/>*/}
          {/*  <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Users"} collapsed={true}/>*/}
            <UncontrolledRating />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
