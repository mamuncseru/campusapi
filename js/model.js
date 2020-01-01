const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    student_id: {
        type: Number,
        required: [true, 'A Student must have a id']
    },
    name: {
        type: String,
        required: [true, 'A student must have a name']
    },
    department: {
        type: String,
        required: [true, 'A student must has a department']
    },
});
const campus = mongoose.model('Campus', UserSchema);

module.exports = campus;
