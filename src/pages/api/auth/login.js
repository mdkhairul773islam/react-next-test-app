import { post } from "@/lib/api";
export default async function handler(req, res) {
  const { method } = req;
  const { email, password } = req.body;

  switch (method) {
    case 'POST':
      try {
        console.log('req', req.body);
        const response = await post('/login', {
          email: email, //"mdkhairul773@gmail.com", //email
          password: password, // "mdkhairul773", //password
        });
        const token = response;
        res.status(200).json({ token: token });
      } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Error fetching users from Laravel API' });
      }
      break;
    // Implement other methods (POST for creating a new user, etc.) as needed
    default:
      res.setHeader('Allow', ['POST']); // Adjust this based on the methods you implement
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
