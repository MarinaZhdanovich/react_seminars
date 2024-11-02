function EventCard({ title, date, location, booleanS }) {
  return (
    <div className="event-card">
      <h2 style={{ color: booleanS ? "green" : "red" }} className="event-title">{title}</h2>
      <p className="event-date">{date}</p>
      <p className="event-location">{location}</p>
    </div>
  );
}

export default EventCard;