import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection failed' });
  } finally {
    await prisma.$disconnect();
  }
}
