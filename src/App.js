import './App.css';
import Greeting from './components/Greeting';
import EventCard from './components/Greeting';
import CurrentTime from './components/Greeting';

function App() {
  const userName = 'Marina';
  return (
    <div>
      <h1>Hello {userName}</h1>
      <Article number='1' name='Info' />
      <Article number='2' name='Blog' />
      <h1>Привет, моя Марина!</h1>
      <Greeting />
      <CurrentTime />
      <div>
        <EventCard
          title="Концерт группы 'Крутая группа'"
          date="22 октября 2024, 19:00"
          location="Москва, Крокус Сити Холл"
          booleanS={true}
        />
        <EventCard
          title="Выставка 'Мир Динозавров'"
          date="5 ноября 2024, 10:00"
          location="Санкт-Петербург, Экспофорум"
          booleanS={false}
        />
        <EventCard
          title="Фестиваль еды 'Вкусная осень'"
          date="12 ноября 2024, 12:00"
          location="Нижний Новгород, Парк культуры и отдыха"
          booleanS={false}
        />
      </div>
    </div>
  );
}

function Article({ name, number }) {
  let themeSiteWhite = true;

  return (
    <div>
      <h2 style={{ color: themeSiteWhite ? "green" : "red" }}>Статья про {name} номер {number}</h2>
      <a href="#">Читать статью</a>
    </div>
  );
}

export default App;
