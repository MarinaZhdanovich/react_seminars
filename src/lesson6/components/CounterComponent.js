import React from "react";
import { connect } from "react-redux"

const CounterComponent = (props) => {
  return (
    <div>Count: {props.count}</div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  };
};

export default connect(mapStateToProps)(CounterComponent);

//здесь connect используется для получения данных из состояния Redux (а не для отправки действий).компонент только читает данные из состояния, а не отправляет действия.