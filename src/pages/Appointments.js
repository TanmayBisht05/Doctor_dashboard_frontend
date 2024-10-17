import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Appointments.css';

const Appointments = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState({
        '2024-10-17': ['John Doe - 10:00 AM', 'Jane Smith - 1:00 PM'],
        '2024-10-18': ['Emily Davis - 2:00 PM'],
        '2024-10-20': ['Michael Johnson - 9:30 AM', 'Sarah Connor - 4:00 PM']
    });

    const formatDateKey = (date) => date.toISOString().split('T')[0];

    // Debugging Logs
    console.log('Selected Date:', formatDateKey(selectedDate));
    console.log('Appointments:', appointments);

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
        </div>
    );
};

export default Appointments;
