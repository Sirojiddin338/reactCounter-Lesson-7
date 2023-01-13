import React from 'react';
import { Alert } from 'reactstrap';

class States extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Sirojiddin",
            age: 30,
            job: "Full-Stack Developer",
            date: new Date()
        };
    }
    render() {
        // console.log(this.state);
        // const { name, age, job } = this.state;
        return (
            <div>
                <h1>Hello, my name is {this.state.name} </h1>
                <Alert color="danger">
                   <p>He is {this.state.age} years old  </p>
                </Alert>
                <h2>he is {this.state.job} </h2>
                <Alert color="success">
                   <h2> {this.state.date.toLocaleDateString()} </h2>
                </Alert>
            </div>
        )
    }
}

export default States;