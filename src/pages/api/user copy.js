export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // Simulate fetching user list from a database
      const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
      ];
      res.status(200).json(users);
      break;
    // Implement other methods (POST for creating a new user, etc.) as needed
    default:
      res.setHeader('Allow', ['GET']); // Adjust this based on the methods you implement
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default async function handler(req, res) {
    return "Ok";
    if (req.method === 'GET') {
      try {
        // Assuming you have a way to identify the user, e.g., through a session or a token
        // For demonstration, we'll pretend we can send a token as a Bearer token in the Authorization header
        const token = req.headers.authorization?.split(' ')[1]; // Extract token from header
  
        const response = await fetch('http://localhost:8000/api/user', {
          method: 'GET',
          headers: {
            //'Authorization': `Bearer ${token}`,
            // Include any other headers your Laravel API requires
          },
        });
  
        const data = await response.json();
  
        if (response.ok) {
          return res.status(200).json(data);
        } else {
          return res.status(response.status).json(data);
        }
      } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
      }
    } else {
      // Handle any requests that aren't GET
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  