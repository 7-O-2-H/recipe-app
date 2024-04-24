export async function tokenVerification(token) {
  try {
    const response = await fetch('http://localhost:8080/verification', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Token verification failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};