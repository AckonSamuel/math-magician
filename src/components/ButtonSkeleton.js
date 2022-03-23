import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttons } = this.props;
    return (
      <div className={buttons.lenght <= 5 ? 'operators' : 'digits'}>
        { buttons.map((item) => <button type="button" key={item}>{ item }</button>) }
      </div>
    );
  }
}

Button.propTypes = {
  buttons: PropTypes.string.isRequired,
};

export default Button;
