import React from 'react';
import AppointmentList from './components/AppointmentList';
import CreateAppointment from './components/CreateAppointment';

function App() {
    return (
        <div className="App">
            <h1>Appointment Scheduler</h1>
            <CreateAppointment />
            <AppointmentList />
        </div>
    );
}

export default App;
