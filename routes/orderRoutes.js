import express from "express";
import {isAdminAuth, isAuth} from "../middleware/isAuth.js";
import {
  allOrderDetails,
  createOrder,
  getOrderById,
  createRazorpayOrder,
  updateOrderStatus,
  userOrders,
  verifyRazorpayPayment,
  updateOrderItemStatus,
  cancelOrder,
  returnOrder,
  downloadInvoice,
  getOrderFullDetail,
  getOrderFullDetailAdmin,
  handlePaymentFailure,
  retryPayment,
  scheduleDelivery,
  updateAssemblyStatus,
  requestAssemblyService
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/place-order", isAuth, createOrder);
router.get("/orders", isAuth, userOrders);
router.get("/order/:id", isAuth, getOrderById);
router.get("/order-full-detail/:orderId", isAuth, getOrderFullDetail);
router.get("/admin/order-full-detail/:orderId", isAuth, isAdminAuth, getOrderFullDetailAdmin);
router.put("/order-status/:orderId", isAuth, isAdminAuth, updateOrderStatus);
router.put("/order-item-status/:orderId/:itemId", isAuth, isAdminAuth, updateOrderItemStatus);
router.post("/cancel-order/:id", isAuth, cancelOrder);
router.post("/return-order/:id", isAuth, returnOrder);
router.get("/download-invoice/:orderId", isAuth, downloadInvoice);
router.post("/create-razorpay-order", isAuth, createRazorpayOrder);
router.post("/verify-payment", isAuth, verifyRazorpayPayment);
router.post("/payment-failure", isAuth, handlePaymentFailure);
router.post("/retry-payment/:id", isAuth, retryPayment);
router.get("/all-orders", isAuth, isAdminAuth, allOrderDetails);

// Furniture-specific routes
router.post("/schedule-delivery/:orderId", isAuth, scheduleDelivery);
router.put("/assembly-status/:orderId/:itemId", isAuth, isAdminAuth, updateAssemblyStatus);
router.post("/request-assembly/:orderId/:itemId", isAuth, requestAssemblyService);

export default router;
