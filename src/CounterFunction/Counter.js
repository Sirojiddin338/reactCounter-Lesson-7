import React from 'react';
import { Alert, Button } from 'reactstrap';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    };

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    };

    dicrement() {
        this.setState({
            count: this.state.count - 1
        });
    };

    reset() {
        this.setState({
            count: 0
        });
    };

    render() {
        return (
            <div>
               <Alert color="danger">
                  <h1>
                     Count: <Button color="success">{this.state.count}</Button>
                  </h1>
               </Alert>
               <Button color="primary" onClick={(e) => this.increment(e)}> + </Button>
               <Button color="danger" onClick={(e) => this.reset(e)}>Reset</Button>
               <Button color="primary" onClick={(e) => this.dicrement(e)}> - </Button>
            </div>
        );
    }
}

export default Counter;
