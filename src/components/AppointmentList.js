import React, { useState, useEffect } from 'react';
import { getAppointments, deleteAppointment } from '../services/appointmentService';
import '../styles/AppointmentList.css'; 

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        loadAppointments();
    }, []);

    const loadAppointments = async () => {
        const response = await getAppointments();
        setAppointments(response.data);
    };

    const handleDelete = async (id) => {
        await deleteAppointment(id);
        loadAppointments();
    };

    return (
        <div className="appointment-list">
            <h1>Appointments</h1>
            <ul>
                {appointments.map((appointment) => (
                    <li key={appointment.id}>
                        {appointment.patient_name} - {appointment.appointment_date}
                        <button onClick={() => handleDelete(appointment.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentList;
