import React from 'react';
import './PatientDetails.css'; // Link to the CSS file for styling

// Mock patient data
const patients = [
    {
        id: 1,
        name: 'John Doe',
        dob: '1990-01-01',
        gender: 'Male',
        contact: '1234567890',
        medicalHistory: 'No major issues',
        appointments: [
            { date: '2024-10-01', details: 'Routine checkup' },
            { date: '2024-11-05', details: 'Follow-up' }
        ]
    },
    {
        id: 2,
        name: 'Jane Smith',
        dob: '1985-05-15',
        gender: 'Female',
        contact: '0987654321',
        medicalHistory: 'Diabetes',
        appointments: [
            { date: '2024-10-10', details: 'Blood test' },
        ]
    },
    {
        id: 3,
        name: 'Alice Johnson',
        dob: '1992-03-22',
        gender: 'Female',
        contact: '5554443322',
        medicalHistory: 'Asthma',
        appointments: []
    }
];

const PatientDetails = () => {
    return (
        <div className="patient-list-container">
            <h1>Patient Details</h1>
            <table className="patient-table">
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Contact</th>
                        <th>Medical History</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(patient => (
                        <tr key={patient.id}>
                            <td>{patient.id}</td>
                            <td>{patient.name}</td>
                            <td>{patient.dob}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.contact}</td>
                            <td>{patient.medicalHistory}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientDetails;
