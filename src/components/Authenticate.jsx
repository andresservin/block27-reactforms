import React from 'react';

export default function Authenticate({ token }) {
    const [error, setError] = useState(nul);
  const handleClick = async () => {
    try {
      // Send a request to the API with the token in the Authentication header
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {
        method: 'GET', // or 'POST' or any other HTTP method you need
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
          'Content-Type': 'application/json',
        },
        // You can include other options like body for POST requests
      });

      if (!response.ok) {
        throw new Error('Authentication failed. Please try again.');
      }

      // Handle the response as needed
      const result = await response.json();
      console.log(result);
      setError(null);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Authenticate!</h2>
      {successMessage && <p> {successMessage}</p>}
      {error && <p> {error}</p>}
      <button onClick={handleClick}> Authenticate Token</button>
    </div>
  );
}
