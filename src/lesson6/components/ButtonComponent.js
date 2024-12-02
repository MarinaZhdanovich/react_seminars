import React from "react"; //Импортируется библиотека React для создания компонента.
import { connect } from 'react-redux';
//функция которая связывает компонент с хранилищем Redux. Она предоставляет компоненту доступ к данным состояния и экшенам.
import { increment } from "../reducers/counterSlice";

const ButtonComponent = (props) => {
  return (
    <button onClick={props.increment}>Плюс +1</button> //это экшен, который передается в компонент через пропсы
  );
}
//Маппинг экшенов в пропсы
const mapDispatchToProps = {
  increment //это экшен, импортированный из файла counterSlice
}
//создается объект mapDispatchToProps, в котором указывается, какие экшены должны быть переданы компоненту через пропсы.Он будет передан компоненту как props.increment
//Когда экшен передается через объект, он автоматически привязывается к диспатчу

export default connect(null, mapDispatchToProps)(ButtonComponent);

//связывает React-компонент с Redux хранилищем.
//null, что означает, что компонент не будет получать данные из состояния Redux.
//Второй аргумент — это объект madDispatchToProps, который передает экшен increment в компонент. Это означает, что компонент будет получать increment как пропс (например, props.increment).
//connect возвращает новый компонент, который уже подключен к Redux и может использовать переданные экшены.