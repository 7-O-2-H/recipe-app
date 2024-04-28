export async function tokenVerification(token){
  try {
    const response = await fetch('http://localhost:8080/verification', {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${token}`
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

export async function userAuthorization(token, submitterId){
  try {
        
    const response = await fetch('http://localhost:8080/verification/authorizeUser', {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${token}`,
        'Content-Type': 'application/json' // Set content type to JSON
      }, 
      body: JSON.stringify({ userId: submitterId })
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