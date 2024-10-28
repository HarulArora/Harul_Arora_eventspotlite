import React from 'react';

const EventModal = ({ event, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>
                    ×
                </button>
                <h2 className="text-2xl font-bold">{event.name}</h2>
                <p className="mt-2">{event.description}</p>
                <img src={event.image} alt={event.name} className="mt-4 rounded-lg" />
            </div>
        </div>
    );
};

export default EventModal;
