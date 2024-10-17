import React from 'react';

const Appointments = () => {
    return (
        <div>
            <h1 className="dashboard-header">Appointments</h1>
            <div className="card">
                <h2>Today's Appointments</h2>
                <p>3 patients scheduled for today.</p>
            </div>
            <div className="card">
                <h2>Tomorrow's Appointments</h2>
                <p>4 patients scheduled for tomorrow.</p>
            </div>
        </div>
    );
};

export default Appointments;
