import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaMoneyBillAlt, FaFileUpload, FaSyringe, FaUserInjured } from 'react-icons/fa';
import './SideBar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="text-light mb-4">Doctor Dashboard</h2>
            <Link to="/">
                <FaHome /> Home
            </Link>
            <Link to="/appointments">
                <FaCalendarAlt /> Appointments
            </Link>
            <Link to="/salary">
                <FaMoneyBillAlt /> Salary
            </Link>
            <Link to="/prescriptions">
                <FaFileUpload /> Upload Prescription
            </Link>
            <Link to="/surgery">
                <FaSyringe /> Book Surgery
            </Link>
            <Link to="/patients">
                <FaUserInjured /> Patient Details
            </Link>
        </div>
    );
};

export default Sidebar;
