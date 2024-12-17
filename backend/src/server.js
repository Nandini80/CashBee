import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import walletRoutes from "./routes/walletRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./trpc/index.js";

const app = express();
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/wallets", walletRoutes);
app.use("/api/transactions", transactionRoutes);

// tRPC middleware
app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext: () => ({}),
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
