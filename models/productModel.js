import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brands",
      required: true,
    },
    roomType: {
      type: String,
      enum: ["Living Room", "Bedroom", "Kitchen", "Office", "Outdoor", "Bathroom", "Dining Room"],
      required: true,
    },
    materials: [{
      type: String,
      enum: ["Wood", "Metal", "Glass", "Leather", "Fabric", "Plastic", "Marble", "Stone"],
      required: true
    }],
    dimensions: {
      length: { type: Number, required: true },
      width: { type: Number, required: true },
      height: { type: Number, required: true },
      unit: { type: String, enum: ["cm", "inches"], default: "cm" }
    },
    colors: [{
      type: String,
      required: true,
      enum: [
        "Black", "White", "Brown", "Gray", "Beige", 
        "Navy", "Red", "Green", "Blue", "Yellow",
        "Orange", "Purple", "Pink", "Natural", "Walnut",
        "Oak", "Mahogany", "Cherry", "Maple", "Teak"
      ]
    }],
    stock: {
      type: Number,
      required: true,
    },
    regularPrice: {type: Number, required: true},
    salesPrice: {
      type: Number,
    },
    salePrice: {type: Number, required: true},
    offer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Offer",
    },
    assemblyRequired: {
      type: Boolean,
      default: true,
    },
    warranty: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    gallery: [
      { 
        type: String,
      },
    ],
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("Products", productSchema);
export default Products;
