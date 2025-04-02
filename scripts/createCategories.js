import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Categories from '../models/categoryModel.js';

dotenv.config();

const categories = [
  {
    _id: "66a4a48e2e979f35c0fd8536",
    categoryName: "Boots",
    description: "Chiku/Toupe Chelsea Boots for Men",
    status: true,
    createdAt: "2024-07-27T07:41:02.598Z",
    updatedAt: "2025-02-23T08:02:56.567Z",
    offer: null
  },
  {
    _id: "66bf60427b472c1db5fce9c9",
    categoryName: "Lofers",
    description: "For good Style",
    status: true,
    createdAt: "2024-08-16T14:20:50.304Z",
    updatedAt: "2024-08-28T08:34:17.486Z",
    offer: "66cee10981168f3625f70297"
  },
  {
    _id: "669f7c857c1de5ebf4cf9a63",
    categoryName: "Casuals",
    description: "For style",
    status: true,
    createdAt: "2024-07-23T09:48:53.359Z",
    updatedAt: "2024-11-13T05:51:43.559Z",
    offer: null
  },
  {
    _id: "66bee5567d3e6578891c1c14",
    categoryName: "Formals",
    description: " Sleek in shape and dark in colour",
    status: true,
    createdAt: "2024-08-16T05:36:22.227Z",
    updatedAt: "2024-09-25T06:41:35.319Z",
    offer: null
  },
  {
    _id: "66a0d4e3e57c03ed64a15e05",
    categoryName: "Sneakers",
    description: "For Fashion",
    status: true,
    createdAt: "2024-07-24T10:18:11.297Z",
    updatedAt: "2024-11-13T05:56:18.619Z",
    offer: null
  }
];

const createCategories = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing categories
    await Categories.deleteMany({});
    console.log('Cleared existing categories');

    // Insert new categories
    const createdCategories = await Categories.insertMany(categories);
    console.log('Categories created successfully!');
    console.log(`Created ${createdCategories.length} categories`);

    // Close MongoDB connection
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error creating categories:', error);
  }
};

createCategories(); 