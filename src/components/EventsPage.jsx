import React from "react";
import { Link } from "react-router-dom";

const EventsPage = () => {
  // Sample events data
  const events = [
    {
      id: 1,
      name: "Tech Fest 2023",
      date: "2023-11-15",
      description: "Annual technical festival showcasing innovations and competitions.",
    },
    {
      id: 2,
      name: "Cultural Fest 2023",
      date: "2023-12-10",
      description: "A celebration of art, music, dance, and cultural diversity.",
    },
    {
      id: 3,
      name: "Sports Day",
      date: "2024-01-20",
      description: "Inter-college sports competition featuring various games and activities.",
    },
    {
      id: 4,
      name: "Alumni Meet",
      date: "2024-02-05",
      description: "Reunion event for alumni to reconnect with their alma mater.",
    },
  ];

  return (
    <div className="events-page">
      <h1>College Events</h1>
      <div className="events-container">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.name}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Description:</strong> {event.description}</p>
          </div>
        ))}
      </div>
      <Link to="/">
        <button className="back-btn">Back to Home</button>
      </Link>
    </div>
  );
};

export default EventsPage;