import React from "react";

class Anagram extends React.Component {
    //define state object with first and second word variables
    state = { firstWord: "", secondWord: "" };

    //handle on textfileds onchange events
    handleFirstWordChange = event => {
        this.setState({ firstWord: event.target.value });
    };
    handleSecondWordChange = event => {
        this.setState({ secondWord: event.target.value });
    };

    //give back user feedback
    //when it is an anagram
    isAnagramAlert() {
            return alert("We have an anagram! 😊");
        }
        //when it isn't an anagram
    isNotAnagramAlert() {
        return alert("This is not an anagram ☹️");
    }

    //check whether the two words are anagrams
    compare() {
        //make words lowercase, then turn strings into array by splitting them, then sort then join again
        var a = this.state.firstWord
            .toLowerCase()
            .split("")
            .sort()
            .join("");
        var b = this.state.secondWord
            .toLowerCase()
            .split("")
            .sort()
            .join("");

        //check the legth of the strings

        //make sure neither varibale is null
        if (a.length > 0 && b.length > 0) {
            //if they are of different lengths, they are not anagrams
            if (a.length !== b.length) {
                return this.isNotAnagramAlert();
            } else if (a !== b) {
                //if the length matches but the strings don't, they are not anagrams
                return this.isNotAnagramAlert();
            } else if (a === b) {
                //if the strings match, we have an anagram
                return this.isAnagramAlert();
            }
        } else {
            return alert("One or more fields are empty. Cannot proceed.");
        }
    }

    render() {
        return ( <
            div className = "anagram" > { " " } <
            div className = "container" >
            <
            br / > < br / >
            <
            form >
            <
            input type = "text"
            placeholder = "First word"
            value = { this.state.firstWord }
            onChange = { this.handleFirstWordChange } >
            <
            /input>{" "} <
            br / >
            <
            input type = "text"
            placeholder = "Second word"
            value = { this.state.secondWord }
            onChange = { this.handleSecondWordChange } >
            <
            /input>{" "} <
            br / >
            <
            button className = "buttons"
            onClick = {
                () => this.compare()
            } > { " " }
            Check Anagram { " " } <
            /button>{" "} < /
            form > { " " } <
            /div>{" "} < /
            div >
        );
    }
}

export default Anagram;