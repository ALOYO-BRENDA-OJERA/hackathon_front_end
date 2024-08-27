import React, { useState } from 'react';
import { createAppointment } from '../services/appointmentService';
import '../styles/CreateAppointment.css'; 

const CreateAppointment = () => {
    const [formData, setFormData] = useState({
        patient_name: '',
        appointment_date: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createAppointment(formData);
        setFormData({ patient_name: '', appointment_date: '' });
    };

    return (
        <div className="create-appointment">
            <h1>Create Appointment</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="patient_name"
                    value={formData.patient_name}
                    onChange={handleChange}
                    placeholder="Patient Name"
                />
                <input
                    type="datetime-local"
                    name="appointment_date"
                    value={formData.appointment_date}
                    onChange={handleChange}
                />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateAppointment;
