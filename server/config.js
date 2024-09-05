require('dotenv').config();

const getRazorpayConfig = () => {
  if (process.env.NODE_ENV === 'production') {
    return {
      key_id: process.env.RAZORPAY_KEY_ID_PROD,
      key_secret: process.env.RAZORPAY_KEY_SECRET_PROD
    };
  } else {
    return {
      key_id: process.env.RAZORPAY_KEY_ID_TEST,
      key_secret: process.env.RAZORPAY_KEY_SECRET_TEST
    };
  }
};

module.exports = getRazorpayConfig;