// controllers/bookingController.js
const Booking = require('../models/Booking');
const Listing = require('../models/listing'); // ya Classroom, jo tu use karta hai
const isAvailable = require('../helpers/isAvailable');

// ✅ Create new booking (Hourly ya Slot-based)
module.exports.createBooking = async (req, res) => {
  try {
    const { listingId, userId, bookingType, startTime, endTime, slot } = req.body;

    // Validate fields
    if (!listingId || !userId || (!startTime && !slot)) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check if listing exists
    const listing = await Listing.findById(listingId);
    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }

    // Availability check (for hourly)
    if (bookingType === 'hourly' && !(await isAvailable(listingId, startTime, endTime))) {
      return res.status(409).json({ message: 'Selected time not available' });
    }

    // Create booking
    const booking = new Booking({
      listing: listingId,
      user: userId,
      bookingType,
      startTime,
      endTime,
      slot,
      status: 'pending',
    });

    await booking.save();

    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (err) {
    console.error('Error creating booking:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ Get user bookings
module.exports.getUserBookings = async (req, res) => {
  try {
    const { userId } = req.params;
    const bookings = await Booking.find({ user: userId })
      .populate('listing', 'title location price')
      .sort({ createdAt: -1 });

    res.render('bookings/myBookings', { bookings });
  } catch (err) {
    console.error('Error fetching bookings:', err);
    res.status(500).send('Server Error');
  }
};

// ✅ Cancel booking
module.exports.cancelBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByIdAndUpdate(id, { status: 'cancelled' });
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json({ message: 'Booking cancelled successfully' });
  } catch (err) {
    console.error('Error cancelling booking:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
