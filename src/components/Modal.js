import React, { useState } from 'react';
import './Modal.css'; // Import your modal styles

const Modal = ({ isOpen, onClose, onAdd }) => {
    const [patientName, setPatientName] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(patientName, appointmentDate, appointmentTime); // Pass data to the parent component
        onClose(); // Close the modal
    };

    return (
        isOpen && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2>Add Appointment</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Patient Name:
                            <input
                                type="text"
                                value={patientName}
                                onChange={(e) => setPatientName(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Date:
                            <input
                                type="date"
                                value={appointmentDate}
                                onChange={(e) => setAppointmentDate(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Time:
                            <input
                                type="time"
                                value={appointmentTime}
                                onChange={(e) => setAppointmentTime(e.target.value)}
                                required
                            />
                        </label>
                        <button type="submit">Add Appointment</button>
                        <button type="button" onClick={onClose}>
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        )
    );
};

export default Modal;
