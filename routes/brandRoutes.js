import express from "express";
import { isAdminAuth, isAuth } from "../middleware/isAuth.js";
import { 
  addBrand, 
  getBrand, 
  getBrandById,
  updateBrand,
  deleteBrand,
  getBrandsBySpecialty,
  getBrandsByCountry
} from "../controllers/brandController.js";

const router = express.Router();

router.post("/addNewBrand", isAuth, isAdminAuth, addBrand);
router.get("/getAllBrands", getBrand)
router.get("/brand/:id", getBrandById)
router.put("/update-brand/:id", isAuth, isAdminAuth, updateBrand)
router.delete("/delete-brand/:id", isAuth, isAdminAuth, deleteBrand)
router.get("/brands-by-specialty/:specialty", getBrandsBySpecialty)
router.get("/brands-by-country/:country", getBrandsByCountry)

export default router;