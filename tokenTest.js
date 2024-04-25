const jwt = require('jsonwebtoken');

const secretKey = 'X/EvmQsimF5ozWmWF//GdYIhiSgQWro445YNv+Mu+fk='; // Should be the same as the one used to sign the token

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded; // If the token is valid, return the decoded payload
  } catch (error) {
    // If token verification fails (e.g., invalid signature, expired token), throw an error
    throw new Error('Token verification failed');
  }
}

// Usage
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcl9uYW1lIjoiSW1Ob3RaZWxkYSIsImVtYWlsIjoibGlua0B5YWhvby5jb20iLCJwYXNzd29yZCI6Imh5cnVsZSIsImlhdCI6MTcxMzk5MDY4OH0.SKp-F4cXWBs2W0Sidne81V7Y6PyLHZ9Ub2PM2vxSabc'; // Extract the token from the request header
try {
  const payload = verifyToken(token);
  console.log('Token verified:', payload);
  // Proceed with handling authenticated request, using payload data as needed
} catch (error) {
  console.error('Token verification failed:', error.message);
  // Handle unauthorized access or other errors
}