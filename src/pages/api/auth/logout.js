import axios from 'axios';
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const apiUrl = process.env.API_BASE_URL;
        const response = await axios.post(`${apiUrl}/logout`);
        if (response.status === 200) {
          res.status(200).json({ message: 'Logged out successfully' });
        } else {
          res.status(500).json({ message: 'Error logging out' });
        }
      } catch (error) {
        console.error('Error logging out:', error);
        res.status(500).json({ message: 'Error logging out' });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
