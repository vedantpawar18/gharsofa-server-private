import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Users from '../models/userModel.js';

dotenv.config();

const updateUserPassword = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Update password for the user
    const plainPassword = 'StrongP@ss1';
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    
    const result = await Users.updateMany(
      {}, // Update all users
      { $set: { password: hashedPassword } }
    );

    console.log('Password updated successfully!');
    console.log(`Updated ${result.modifiedCount} users`);
    console.log('\nNew credentials:');
    console.log('Password:', plainPassword);

    // Close MongoDB connection
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error updating password:', error);
  }
};

updateUserPassword(); 