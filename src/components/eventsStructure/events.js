import React, { Component } from 'react';
import calculate from '../../logic/calculate';
import { operators, digits } from '../../components/Calculator';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            next: '',
            total: '',
            operation: '',
        }
    }
}

btnClick = (btn) => {
    this.setState((state) => calculate(
        {
            next: state.next,
            total: state.total,
            operation: state.operation,
        },
        btn,
    ));
}
