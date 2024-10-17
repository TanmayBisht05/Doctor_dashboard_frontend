import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from '../components/Modal'; // Import the Modal component
import './Appointments.css';

const Appointments = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [appointments, setAppointments] = useState({
        '2024-10-17': ['John Doe - 10:00 AM', 'Jane Smith - 1:00 PM'],
        '2024-10-18': ['Emily Davis - 2:00 PM'],
        '2024-10-20': ['Michael Johnson - 9:30 AM', 'Sarah Connor - 4:00 PM']
    });

    const handleAddAppointment = (patientName, appointmentDate, time) => {
        const dateKey = appointmentDate; // Use appointmentDate from the modal
        const newAppointment = `${patientName} - ${time}`; // Keep the original format
        
        setAppointments((prev) => ({
            ...prev,
            [dateKey]: prev[dateKey] ? [...prev[dateKey], newAppointment] : [newAppointment],
        }));
    };

    const formatDateKey = (date) => date.toISOString().split('T')[0];

    return (
        <div className="appointments-container">
            <h1 className="dashboard-header">Your Appointments</h1>
            <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
            />

            <div className="appointments-list">
                <h2>Appointments for {selectedDate.toDateString()}</h2>
                <ul>
                    {appointments[formatDateKey(selectedDate)] 
                        ? appointments[formatDateKey(selectedDate)].map((appt, index) => (
                            <li key={index}>{appt}</li>
                        ))
                        : <li>No appointments</li>}
                </ul>
            </div>

            <button className="add-appointment-btn" onClick={() => setIsModalOpen(true)}>
                + Add Appointment
            </button>

            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onAdd={handleAddAppointment}
            />
        </div>
    );
};

export default Appointments;
