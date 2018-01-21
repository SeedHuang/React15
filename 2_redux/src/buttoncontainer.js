import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Button from './button';

class ButtonContainer extends React.Component{
  getChildContext(){
    return {color:"red"};
  }
  render(){
    return <Button/>
  }
}


ButtonContainer.childContextTypes = {
  color:PropTypes.string
}


export default ButtonContainer;
