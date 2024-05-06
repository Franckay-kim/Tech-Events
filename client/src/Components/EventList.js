import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style/Styles.css';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/index')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('Error fetching events: ', error);
            });
    }, []);

    return (
        <div>
            <h1>Upcoming Events</h1>
            <ul>
                {events.map(event => (
                    <li key={event.id}>{event.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
