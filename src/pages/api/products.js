
import prisma from '../../lib/prisma';
export default async function handler(req, res) {
    if (req.method === 'GET') {
        const productsWithCategories = await prisma.product.findMany({
            include: {
              category: true,
              subcategory: true,
            },
          });
      res.status(200).json(productsWithCategories);
    } else if (req.method === 'POST') {
      const { name } = req.body;
      const category = await prisma.category.create({
        data: { name },
      });
      res.status(201).json(category);
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }