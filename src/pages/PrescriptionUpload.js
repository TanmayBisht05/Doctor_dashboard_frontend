import React, { useState } from 'react';
import './PrescriptionUpload.css';

const PrescriptionUpload = () => {
    const [patientId, setPatientId] = useState('');
    const [prescriptionText, setPrescriptionText] = useState('');
    const [prescriptions, setPrescriptions] = useState([
        { id: 1, patientId: '123', description: '• Take medicine A for 5 days.\n• Drink water regularly.' },
        { id: 2, patientId: '456', description: '• Rest and apply ointment twice daily.\n• Avoid heavy lifting.' }
    ]);

    const handleUploadPrescription = (e) => {
        e.preventDefault();
        const formattedPrescription = prescriptionText.split('\n').map(line => `• ${line}`).join('\n');
        const newPrescription = { id: prescriptions.length + 1, patientId, description: formattedPrescription };
        setPrescriptions([...prescriptions, newPrescription]);
        setPatientId('');
        setPrescriptionText('');
    };

    return (
        <div className="prescription-upload-container">
            <h1>Upload Prescription</h1>

            {/* Form for uploading prescription */}
            <form onSubmit={handleUploadPrescription}>
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
                    <label>Prescription Description (Enter bullet points)</label>
                    <textarea
                        value={prescriptionText}
                        onChange={(e) => setPrescriptionText(e.target.value)}
                        placeholder="Enter each point in a new line"
                        rows="5"
                        required
                    />
                </div>

                <button type="submit" className="upload-prescription-btn">Upload Prescription</button>
            </form>

            {/* Display list of previous prescriptions */}
            <h2>Previous Prescriptions</h2>
            <ul className="prescription-list">
                {prescriptions.length > 0 ? (
                    prescriptions.map((prescription) => (
                        <li key={prescription.id}>
                            <strong>Patient ID:</strong> {prescription.patientId}
                            <ul className="prescription-bullet-points">
                                {prescription.description.split('\n').map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </li>
                    ))
                ) : (
                    <p>No previous prescriptions found.</p>
                )}
            </ul>
        </div>
    );
};

export default PrescriptionUpload;
