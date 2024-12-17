import { initTRPC } from "@trpc/server";
import { PrismaClient } from "@prisma/client";

const t = initTRPC.create();
const prisma = new PrismaClient();

export const appRouter = t.router({
  getUsers: t.procedure.query(async () => {
    return await prisma.user.findMany();
  }),
  getWallets: t.procedure.query(async () => {
    return await prisma.wallet.findMany();
  }),
});

// export type AppRouter = typeof appRouter;
