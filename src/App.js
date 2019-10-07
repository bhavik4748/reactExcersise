import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

    state = {
        tState: [{ text: '', textLen: 0 }]
    };


    textChangeHandler = (event) => {
        let t = [...this.state.tState];
        t[0].textLen = event.target.value.length;
        t[0].text = event.target.value;
        this.setState({ tState: t });

    }

    deletePersonHandler = (index) => {
        // console.log(index);
        const t = [...this.state.tState];
        let t1 = t[0].text.split('');
        t1.splice(index, 1);
        t[0].text = t1.join('');
        t[0].textLen = t[0].text.length;
        this.setState({ tState: t });
    }

    render() {
        let charArray = null;
        //  let temp = null;
        charArray = (
            <div>
                {
                    this.state.tState[0].text.split('').map((t, index) => {
                        return <Char
                            char={t}
                            click={() => this.deletePersonHandler(index)}
                            key={index}
                        >

                        </Char>
                    })
                }
            </div>
        )


        return (
            <div className="App" >
                <h2>React Excercise</h2>
                <div>Enter some text:</div>
                <input type="text"
                    onChange={(event) => this.textChangeHandler(event)}
                    value={this.state.tState[0].text}
                ></input>
                <div>Entered Text Length:{this.state.tState[0].textLen}</div>
                <Validation
                    length={this.state.tState[0].text.length}
                >

                </Validation>

                {charArray}

            </div>
        );
    }
}

export default App;
