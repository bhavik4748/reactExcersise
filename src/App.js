import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
        tState: [{ text: '', textLen: 0 }]
    };


    textChangeHandler = (event) => {
        let t = [...this.state.tState];
        t[0].textLen = event.target.value.length;
        t[0].text = event.target.value;
        this.setState({ tStage: t });
        // console.log(t);
    }

    render() {
        return (
            <div className="App" >
                <h2>React Excercise</h2>
                <div>Enter some text:</div>
                <input type="text"
                    onChange={(event) => this.textChangeHandler(event)}
                    value={this.state.tState[0].text}
                ></input>
                <div>Entered Text Length:{this.state.tState[0].textLen}</div>
            </div>
        );
    }
}

export default App;
