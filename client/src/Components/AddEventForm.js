import React, { useState } from 'react';
import axios from 'axios';
import './Style/Styles.css';

const AddEventForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:5000/index', { title, description })
            .then(response => {
                console.log('Event added successfully');
            })
            .catch(error => {
                console.error('Error adding event: ', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Event Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Event Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            ></textarea>
            <button type="submit">Add Event</button>
        </form>
    );
};

export default AddEventForm;
