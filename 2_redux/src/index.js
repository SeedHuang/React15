import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import ButtonContainer from './buttoncontainer';
import Button from './button';

const counter = (state=0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
      break;
    case 'DECREMENT':
      return state - 1;
      break;
    default:
      return state;
  }
}

const store = createStore(counter);

store.subscribe(()=>{
  console.log(store.getState());
});

store.dispatch({type:'INCREMENT'});

ReactDOM.render(
  <div>
  </div>,
  document.getElementById('root')
);
