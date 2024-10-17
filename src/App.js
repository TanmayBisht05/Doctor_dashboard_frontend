import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change Switch to Routes
import Sidebar from './components/SideBar';
import Home from './components/Home';
import Appointments from './pages/Appointments';
import Salary from './pages/Salary';
import PrescriptionUpload from './pages/PrescriptionUpload';
import SurgeryBooking from './pages/SurgeryBooking';
import PatientDetails from './pages/PatientDetails';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Sidebar />
                <div className="main-content">
                    <Routes> {/* Change Switch to Routes */}
                        <Route path="/" element={<Home />} />
                        <Route path="/appointments" element={<Appointments />} />
                        <Route path="/salary" element={<Salary />} />
                        <Route path="/prescriptions" element={<PrescriptionUpload />} />
                        <Route path="/surgery" element={<SurgeryBooking />} />
                        <Route path="/patients" element={<PatientDetails />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
