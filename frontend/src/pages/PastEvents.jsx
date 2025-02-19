import { useState, useEffect } from "react";
import PastEventCard from "./PastEventCard.jsx";
import PastEventForm from "./PastEventForm";
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Import Footer

export default function PastEventsPage() {
  const [events, setEvents] = useState([]);

  // Fetch existing events on page load
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("/api/events");
      const data = await res.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  // Handle new event submission
  const onNewEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto p-6 flex-grow">
        <h1 className="text-center text-2xl font-bold my-4">Past Events</h1>

        <PastEventForm onNewEvent={onNewEvent} />

        {/* Button to view previously added events */}
        <button
          onClick={() => setEvents([])} // For now, just clears the list, could be used to fetch old events
          className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
        >
          View Added Events
        </button>

        {/* Display event cards */}
        <div className="mt-8">
          {events.length > 0 ? (
            events.map((event) => <PastEventCard key={event.id} event={event} />)
          ) : (
            <p>No events available</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
