import express from "express";
import { getWallets, updateBalance, createWallet } from "../controllers/walletController.js";

const router = express.Router();

router.get("/", getWallets);
router.put("/balance", updateBalance);
router.post("/", createWallet);

export default router;
