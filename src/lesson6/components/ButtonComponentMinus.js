import React from "react";
import { connect } from 'react-redux';
import { decrement } from "../reducers/counterSlice";

const ButtonComponentMinus = (props) => {
  return (
    <button onClick={props.decrement}>Минус 1</button>
  );
}

const mapDispatchToProps = {
  decrement
}

export default connect(null, mapDispatchToProps)(ButtonComponentMinus);

//С помощью connect компонент может отправлять (dispatch) действия и получать (subscribe) данные из Redux.