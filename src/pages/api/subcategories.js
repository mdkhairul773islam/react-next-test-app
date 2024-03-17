import prisma from '../../../prisma/client';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request
    try {
      const subcategories = await prisma.subcategory.findMany();
      res.status(200).json(subcategories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    // Handle POST request
    const { name, category_id } = req.body;

    if (!name || !category_id) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    try {
      const subcategory = await prisma.subcategory.create({
        data: {
          name,
          categoryId: category_id,
        },
      });
      res.status(201).json(subcategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}