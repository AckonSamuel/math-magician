import React, { Component } from 'react';
import PropTypes from 'prop-types';

const operators = ['÷', 'x', '-', '+', '='];
const digits = ['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


render() {
    const { buttons } = this.props;
    return (
        <div className = {buttonss.lenght <= 5 ? 'operators' : 'digits'}>
            { buttons.map((item) => <button type= 'button' key={item}></button>) }
        </div>
    );
}
}

Button.propTypes = {
    buttons: PropTypes.string.isRequired,
};

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ul className="calc-container">
                <li className='calc-surface'>0</li>
                <li className='calc-board'>
                    <Button buttons = {digits}/>
                </li>
                <Button buttons={operators} />
            </ul>
        )
    }
}

export default Calculator;