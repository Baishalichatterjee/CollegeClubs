const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/studentDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Schema and Model
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    roll: { type: Number, required: true },
    department: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    club: { type: String, required: true }, // Added club field
});

const Student = mongoose.model('Student', studentSchema);

// Mock Admin User (In a real application, use a proper authentication system)
const adminUser = {
    username: 'admin',
    password: 'admin123'
};

// Middleware to check if the user is authenticated as an admin
const isAdmin = (req, res, next) => {
    const { username, password } = req.headers;

    if (username === adminUser.username && password === adminUser.password) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};

// Routes

// Route to submit student data (for testing purposes)
app.post('/submit', async (req, res) => {
    const { name, roll, department, phone, email, club } = req.body;

    try {
        const newStudent = new Student({ name, roll, department, phone, email, club });
        await newStudent.save();
        res.status(201).json({ message: 'Student data saved successfully!' });
    } catch (err) {
        console.error('Error saving student data:', err);
        res.status(500).json({ error: 'Failed to save student data' });
    }
});

// Route to get all students (only accessible by admin)
app.get('/students', isAdmin, async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        console.error('Error fetching students:', err);
        res.status(500).json({ error: 'Failed to fetch students' });
    }
});

// Route to get students by club (only accessible by admin)
app.get('/students/:club', isAdmin, async (req, res) => {
    const { club } = req.params;

    try {
        const students = await Student.find({ club });
        res.status(200).json(students);
    } catch (err) {
        console.error('Error fetching students by club:', err);
        res.status(500).json({ error: 'Failed to fetch students by club' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});