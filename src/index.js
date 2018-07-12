import React from "react";
import { render } from "react-dom";
import "./sass/main.scss"
import 'react-select/dist/react-select.css';
import Multiselect from './components/multiselect';
import { HomeLinkHeaders } from "./components/text";

const App = () => {
    return (
        <div id="container">
            <h1 id="subtitle">
                KEVIN SHUM
            </h1>
            <div id="title">
                {HomeLinkHeaders}
            </div>
            <div id="select">
                <Multiselect label="Multiselect" />
            </div>
        </div>
    )
};
render(<App />, document.getElementById("app"));
// render( <HomeLinkHeaders/>, document.getElementById("title"));

const App2 = () => {
    return (
        <div className="module">
            <div id="title">
                <p>this is the: {value}</p>
            </div>
        </div>
    )
};