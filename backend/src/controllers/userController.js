import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

export const createUser = async (req, res) => {
  const { username, email } = req.body;
  const user = await prisma.user.create({ data: { username, email } });
  res.json(user);
};
