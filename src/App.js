import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import Footer from './components/Footer';
import eventsData from './data/events.json';
import Loader from './components/Loader';

const App = () => {
    const [events, setEvents] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setEvents(eventsData);
            setLoading(false);
        }, 1500);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', !isDarkMode);
    };

    const filteredEvents = events.filter(
        (event) =>
            event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                toggleTheme={toggleTheme}
                isDarkMode={isDarkMode}
            />
            <div className="flex-1 p-8 grid-container">
                {loading ? (
                    <Loader />
                ) : (
                    filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} onClick={setSelectedEvent} />
                    ))
                )}
            </div>
            <Footer />
            {selectedEvent && (
                <EventModal
                    event={selectedEvent}
                    isOpen={!!selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                />
            )}
        </div>
    );
};

export default App;
