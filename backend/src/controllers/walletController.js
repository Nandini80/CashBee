import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getWallets = async (req, res) => {
  try {
    const wallets = await prisma.wallet.findMany();
    res.json(wallets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateBalance = async (req, res) => {
  const { id, amount } = req.body;
  try {
    const wallet = await prisma.wallet.update({
      where: { id: parseInt(id) },
      data: { balance: parseFloat(amount) },
    });
    res.json(wallet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createWallet = async (req, res) => {
  const { userId, balance } = req.body;
  try {
    const wallet = await prisma.wallet.create({
      data: {
        userId: parseInt(userId),
        balance: parseFloat(balance),
      },
    });
    res.status(201).json(wallet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
