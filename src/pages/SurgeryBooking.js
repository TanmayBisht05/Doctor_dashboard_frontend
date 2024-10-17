import React, { useState } from 'react';
import './SurgeryBooking.css';

const SurgeryBooking = () => {
    const [patientId, setPatientId] = useState('');
    const [surgeryTime, setSurgeryTime] = useState('');
    const [surgeries, setSurgeries] = useState([
        { id: 1, patientId: '123', time: '2024-10-18 10:00 AM' },
        { id: 2, patientId: '456', time: '2024-10-19 12:30 PM' }
    ]);

    const handleBookSurgery = (e) => {
        e.preventDefault();
        const newSurgery = { id: surgeries.length + 1, patientId, time: surgeryTime };
        setSurgeries([...surgeries, newSurgery]);
        setPatientId('');
        setSurgeryTime('');
    };

    return (
        <div className="surgery-booking-container">
            <h1>Book Surgeries</h1>

            {/* Form for booking surgery */}
            <form onSubmit={handleBookSurgery}>
                <div className="form-group">
                    <label>Patient ID</label>
                    <input
                        type="text"
                        value={patientId}
                        onChange={(e) => setPatientId(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Surgery Time</label>
                    <input
                        type="datetime-local"
                        value={surgeryTime}
                        onChange={(e) => setSurgeryTime(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="book-surgery-btn">Book Surgery</button>
            </form>

            {/* Display list of upcoming surgeries */}
            <h2>Upcoming Surgeries</h2>
            <ul className="surgery-list">
                {surgeries.length > 0 ? (
                    surgeries.map((surgery) => (
                        <li key={surgery.id}>
                            <strong>Patient ID:</strong> {surgery.patientId} | <strong>Time:</strong> {surgery.time}
                        </li>
                    ))
                ) : (
                    <p>No upcoming surgeries.</p>
                )}
            </ul>
        </div>
    );
};

export default SurgeryBooking;
