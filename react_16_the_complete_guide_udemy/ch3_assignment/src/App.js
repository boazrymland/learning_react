import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        username: 'username...',
        staticOutput: 'Some non changing text',
    };

    userInputChanged = (event) => {
        this.setState({
            username: event.target.value,
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Hello,</h1>
                <h2> and welcome to my solution for ch. 3 assignment! </h2>
                <UserInput changeHandler={this.userInputChanged} value={this.state.username}/>
                <h3>Dynamic output - two way binding</h3>
                <UserOutput out={"Username: " + this.state.username}/>
                <h3>Non changing user output</h3>
                <UserOutput out={this.state.staticOutput}/>
            </div>
        );
    }
}

export default App;
