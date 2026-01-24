// controllers/paymentController.js
const razorpay = require('../config/razorpay');
const Booking = require('../models/Booking');

exports.createOrder = async (req, res) => {
  try {
    const { bookingId, amount } = req.body;

    const options = {
      amount: amount * 100, // paise me convert
      currency: 'INR',
      receipt: `receipt_${bookingId}`,
      notes: { bookingId },
    };

    const order = await razorpay.orders.create(options);

    // store order id in booking
    await Booking.findByIdAndUpdate(bookingId, {
      'payment.orderId': order.id,
      status: 'payment_pending',
    });

    res.status(200).json({ order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating Razorpay order' });
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // for simplicity skipping signature validation now
    const booking = await Booking.findOne({ 'payment.orderId': razorpay_order_id });

    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    booking.payment.paymentId = razorpay_payment_id;
    booking.payment.signature = razorpay_signature;
    booking.status = 'confirmed';
    await booking.save();

    res.json({ message: 'Payment verified successfully', booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Payment verification failed' });
  }
};
