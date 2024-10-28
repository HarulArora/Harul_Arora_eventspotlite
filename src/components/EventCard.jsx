import { motion } from 'framer-motion';

const EventCard = ({ event, onClick }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="event-card bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden cursor-pointer"
        onClick={() => onClick(event)}
    >
        <img src={event.image} alt={event.name} className="h-48 w-full object-cover" />
        <div className="p-4">
            <h2 className="text-xl font-semibold">{event.name}</h2>
            <p className="text-gray-500 dark:text-gray-300">
                {event.date} • {event.location}
            </p>
        </div>
    </motion.div>
);

export default EventCard;
