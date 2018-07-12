import React from "react";
import { render } from "react-dom";
import "./sass/main.scss"
import 'react-select/dist/react-select.css';
import Multiselect from './components/multiselect';

const App = () => {
  return ( 
      <div id="container">
        <div id="title">
            <h1>Greüzi,</h1>
            <h2>
                I'm Kevin:
                <a href="http://www.isuresults.com/bios/isufs00034586.htm" target="_blank">Athlete</a>, 
                <a href="http://mitadmissions.org/blogs/profile/kshum" target="_blank"> Scholar</a>,
                <a href="http://kevinshum.com/portfolio Engineer." target="_blank"> Engineer</a>. 
            </h2>
        </div>
        <div id="select">
            <Multiselect label="Multiselect" /> 
        </div>
    </div>
  )
};
render( <App/> , document.getElementById("app"));


const App2 = () => {
    return ( 
        <div className="module">
          <div id="title">
              <p>this is the: {value}</p>
          </div>
      </div>
    )
  };