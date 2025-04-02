import express from "express";
import {
  createRazorpayOrder,
  verifyRazorpayPayment,
  handleUPIPayment,
  handleCOD,
  handleWalletPayment,
  handlePaymentFailure,
} from "../controllers/paymentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// All routes are protected and require authentication
router.use(protect);

// Card payment routes
router.post("/create-razorpay-order", createRazorpayOrder);
router.post("/verify-razorpay-order", verifyRazorpayPayment);

// UPI payment route
router.post("/upi-payment", handleUPIPayment);

// Cash on Delivery route
router.post("/cod-payment", handleCOD);

// Wallet payment route
router.post("/wallet-payment", handleWalletPayment);

// Payment failure handling
router.post("/payment-failure", handlePaymentFailure);

export default router; 