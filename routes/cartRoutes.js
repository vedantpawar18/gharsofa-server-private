import express from "express";
import { isAuth } from "../middleware/isAuth.js";
import { 
  addToCart, 
  clearCart, 
  getCartDetails, 
  removeFromCart, 
  updateCart,
  updateAssemblyPreference,
  calculateShippingCost
} from "../controllers/cartController.js";
import { checkCartItems } from "../controllers/checkCartController.js";
import { calculateCheckout } from "../controllers/checkoutController.js";

const router = express.Router()

router.post("/addItem", isAuth, addToCart)
router.get("/show-cart", isAuth, getCartDetails)
router.put("/cart-update/:productId", isAuth, updateCart)
router.put("/assembly-preference/:productId", isAuth, updateAssemblyPreference)
router.get("/shipping-cost", isAuth, calculateShippingCost)
router.delete("/remove-item/:productId", isAuth, removeFromCart)
router.delete("/clear-cart", isAuth, clearCart)
router.get("/check-items", isAuth, checkCartItems)


router.get("/checkout", isAuth, calculateCheckout)

export default router;