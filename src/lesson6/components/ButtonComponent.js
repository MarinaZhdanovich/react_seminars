import React from "react"; //Импортируется библиотека React для создания компонента.
import { connect } from 'react-redux';
//функция которая связывает компонент с хранилищем Redux. Она предоставляет компоненту доступ к данным состояния и экшенам.
import { increment } from "../reducers/counterSlice";

const ButtonComponent = (props) => {
  return (
    <button onClick={props.increment}>Плюс +1</button> //это экшен, который передается в компонент через пропсы
  );
}
//mapDispatchToProps связывает экшены с пропсами компонента.
const mapDispatchToProps = {
  increment //это экшен, импортированный из файла counterSlice
}
//Это позволяет вам вызывать экшен без необходимости явно писать dispatch каждый раз.
//создается объект mapDispatchToProps, в котором указывается, какие экшены должны быть переданы компоненту через пропсы.Он будет передан компоненту как props.increment
//Когда экшен передается через объект, он автоматически привязывается к диспатчу
//Dispatch: Позволяет отправить команду в хранилище.команда передаётся в редьюсер (case 'INCREMENT': return state + 1;)



export default connect(null, mapDispatchToProps)(ButtonComponent);

//связывает компонент с хранилищем.
// можно передавать
// Данные из хранилища(через mapStateToProps).
// Экшены для вызова(через mapDispatchToProps).
//null, компонент не берет данные из хранилища. Ему это не нужно — он работает только с экшенами.
//Второй аргумент — описывает, какие действия (экшены) нужно передать компоненту.
