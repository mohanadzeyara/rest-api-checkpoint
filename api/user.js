// api/user.js
import connectToDatabase from '../../lib/mongodb';
import User from '../../models/User';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { Name, email, Password } = req.body;
    const user = await User.create({ Name, email, Password });
    return res.status(201).json(user);
  }

  res.status(405).json({ message: 'Method not allowed' });
}
