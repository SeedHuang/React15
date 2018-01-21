import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class Button extends React.Component{
  render(){
    return <button style={ {color:this.context.color} }>This is a button</button>
  }
}


Button.contextTypes = {
  color:PropTypes.string
}


export default Button;
