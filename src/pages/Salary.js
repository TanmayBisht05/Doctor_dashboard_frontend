import React, { useState } from 'react';
import './Salary.css';

const SalaryDetails = () => {
    // Sample salary data specific for doctors
    const [salaryData, setSalaryData] = useState({
        month: 'October 2024',
        basicPay: 70000,  // Doctor's base salary
        allowances: 15000, // Any additional allowances
        deductions: 3000,  // Any deductions
        netSalary: 82000,  // Net salary after deductions
    });

    const [paymentHistory, setPaymentHistory] = useState([
        { month: 'September 2024', netSalary: 82000 },
        { month: 'August 2024', netSalary: 81000 },
        { month: 'July 2024', netSalary: 80000 },
    ]);

    const handleDownloadSlip = (month) => {
        // Placeholder function for downloading salary slip
        alert(`Download salary slip for ${month}`);
    };

    return (
        <div className="salary-details-container">
            <h1>Salary Details</h1>

            {/* Current Salary Details */}
            <div className="current-salary">
                <h2>Current Month: {salaryData.month}</h2>
                <p><strong>Basic Pay:</strong> ₹{salaryData.basicPay}</p>
                <p><strong>Allowances:</strong> ₹{salaryData.allowances}</p>
                <p><strong>Deductions:</strong> ₹{salaryData.deductions}</p>
                <p><strong>Net Salary:</strong> ₹{salaryData.netSalary}</p>
                <button onClick={() => handleDownloadSlip(salaryData.month)}>Download Salary Slip</button>
            </div>

            {/* Payment History */}
            <div className="payment-history">
                <h2>Payment History</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Month</th>
                            <th>Net Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentHistory.map((item, index) => (
                            <tr key={index}>
                                <td>{item.month}</td>
                                <td>₹{item.netSalary}</td>
                                <td><button onClick={() => handleDownloadSlip(item.month)}>Download Slip</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Optional: Fee Management Section */}
            <div className="fee-management">
                <h2>Manage Consultation Fees</h2>
                <form>
                    <label>Current Consultation Fee: ₹2000</label>
                    <input
                        type="number"
                        placeholder="Update Consultation Fee"
                    />
                    <button type="submit">Update Fee</button>
                </form>
            </div>
        </div>
    );
};

export default SalaryDetails;
