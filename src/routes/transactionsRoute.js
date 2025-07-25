import express from "express";
import {
  getSummaryByUserId,
  getTransactionsByUserId,
  createTransactions,
  deleteTransactions,
  
} from "../controllers/transactionsController.js";

const router = express.Router();


router.get("/summary/:userId", getSummaryByUserId); // 👈 Must come first
router.get("/:userId", getTransactionsByUserId);
router.post("/", createTransactions);
router.delete("/:id", deleteTransactions);


export default router;
