import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Users from '../models/userModel.js';

dotenv.config();

const createUsers = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Create normal user
    const normalUserPassword = await bcrypt.hash('StrongP@ss1', 10);
    const normalUser = await Users.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: 1234567890,
      password: normalUserPassword,
      role: false,
      isVerified: true,
      addresses: [{
        customerName: 'John Doe',
        phone: 1234567890,
        address: '123 Main St',
        locality: 'Downtown',
        city: 'New York',
        state: 'NY',
        pinCode: 10001,
        typeofPlace: 'home',
        isDefaultAddress: true
      }]
    });

    // Create admin user
    const adminPassword = await bcrypt.hash('StrongP@ss1', 10);
    const adminUser = await Users.create({
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@example.com',
      phoneNumber: 9876543210,
      password: adminPassword,
      role: true,
      isVerified: true,
      addresses: [{
        customerName: 'Admin User',
        phone: 9876543210,
        address: '456 Admin Ave',
        locality: 'Uptown',
        city: 'New York',
        state: 'NY',
        pinCode: 10002,
        typeofPlace: 'home',
        isDefaultAddress: true
      }]
    });

    console.log('Users created successfully!');
    console.log('\nNormal User Credentials:');
    console.log('Email:', normalUser.email);
    console.log('Password: user123');
    console.log('\nAdmin User Credentials:');
    console.log('Email:', adminUser.email);
    console.log('Password: admin123');

    // Close MongoDB connection
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error creating users:', error);
  }
};

createUsers(); 