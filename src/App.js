import logo from './logo.svg';
import './App.css';

function App() {
  const userName = 'Marina';
  return (
    <div>
      <h1>Hello {userName}</h1>
      <Heading />
    </div>
  );
}

function Heading() {
  return (
    <div>
      <h2>Новый текст внутри заголовка</h2>
      <p>Новый текст</p>
    </div>
  )
}

export default App;
