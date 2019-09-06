import React from "react";
import Header from "./components/header";
import Anagram from "./components/Anagram";
import "./App.css";

function App() {
    return ( <
        div className = "App" >
        <
        Header / > { " " } <
        body >
        <
        h1 > Anagram Test < /h1> <Anagram / >
        <
        /body>{" "} <
        /div>
    );
}

export default App;