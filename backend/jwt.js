import jwt from 'jsonwebtoken';

const generateToken = (user) => {
  // Define the payload for the JWT token
  const payload = {
    userId: user._id,
    // Add any other relevant data to the payload
  };

  // Generate the JWT token
  const token = jwt.sign(payload, 'your-secret-key', { expiresIn: '1h' });

  return token;
};

export default generateToken;