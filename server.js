const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/gozak_appointments')
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- SCHEMAS & MODELS ---
const BookingSchema = new mongoose.Schema({}, { strict: false });
const Booking = mongoose.model('Booking', BookingSchema);

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);


// --- API ROUTES ---

// Registration Endpoint
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Account created successfully!' });
  } catch (error) {
    console.error('REGISTRATION ERROR:', error);
    res.status(500).json({ message: 'Server error during registration', error: error.message });
  }
});

// Login Endpoint (Direct bcrypt check)
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Directly check using bcrypt package safely
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    res.status(200).json({ message: 'Login successful!', user: { email: user.email } });
  } catch (error) {
    console.error('LOGIN ERROR:', error);
    res.status(500).json({ message: 'Server login error', error: error.message });
  }
});

// Booking Routes
app.post('/api/bookings', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: 'Booking saved successfully!', data: newBooking });
  } catch (error) {
    res.status(500).json({ message: 'Server error saving booking', error: error.message });
  }
});

app.get('/api/bookings', async (req, res) => {
  try {
    const todayStr = new Date().toISOString().split('T')[0];
    const activeBookings = await Booking.find({
      status: { $ne: 'completed' },
      date: { $gte: todayStr }
    }).sort({ date: 1, time: 1 });

    res.status(200).json(activeBookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching active bookings', error: error.message });
  }
});

app.patch('/api/bookings/:id/complete', async (req, res) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: 'completed' },
      { new: true }
    );
    if (!updatedBooking) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json({ message: 'Appointment marked as completed', updatedBooking });
  } catch (error) {
    res.status(500).json({ message: 'Error updating booking status', error: error.message });
  }
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});