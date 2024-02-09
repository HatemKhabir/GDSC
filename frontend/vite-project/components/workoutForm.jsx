import React, { useState } from 'react';
import axios from 'axios'; // Make sure to import Axios

const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const workout = { title, load, reps };
                try{
                const response = await axios.post('http://localhost:5050/api/workouts/create', workout, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
             console.log(response.data)
            if (response.status === 200) {
                setEmptyFields([]);
                setError(null);
                setTitle('');
                setLoad('');
                setReps('');
                console.log('Workout created successfully:', response.data);
            } else {
                setError(response.data.error);
                setEmptyFields(response.data.emptyFields);
            }
        } catch (error) {
            console.log('Error while submitting workout:', error);
        }
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercise Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Load (in kg):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className={emptyFields.includes('load') ? 'error' : ''}
            />

            <label>Number of Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className={emptyFields.includes('reps') ? 'error' : ''}
            />

            <button type="submit">Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default WorkoutForm;
