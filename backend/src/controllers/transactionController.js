import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addTransaction = async (req, res) => {
  const { walletId, type, amount, category } = req.body;
  const transaction = await prisma.transaction.create({
    data: { walletId, type, amount, category },
  });
  res.json(transaction);
};

export const getTransactions = async (req, res) => {
  const transactions = await prisma.transaction.findMany();
  res.json(transactions);
};
