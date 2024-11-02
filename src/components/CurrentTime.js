function CurrentTime() {
  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();
  return (
    <div className="current-time">
      <h2>Текущее время: {time}</h2>
      <h2>Дата: {date}</h2>
    </div>
  );
};

export default CurrentTime;