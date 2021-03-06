const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = Schema(
    {
        firstname: {type: String, required: true},
        lastname: {type: String, required: true},
        email: {type: String, required: true},
        contact: {type: String, required: true},
        municipality:{type: String, required:true},
        gender:{type: String, required: true },
        note: {type: String, required: true},
        status: {type: String, required: true},
        action: {type: String, required: true},
    }, 
);

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;