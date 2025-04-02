import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Brands from '../models/brandModel.js';

dotenv.config();

const brands = [
  {
    brandName: "Vans",
    brandTitle: "Off the Wall",
    logo: "https://res.cloudinary.com/daom3n116/image/upload/v1723698122/myBrand/gvgtflnvpfh42khaw3gx.jpg"
  },
  {
    brandName: "Adidas",
    brandTitle: "all in or nothing",
    logo: "https://res.cloudinary.com/daom3n116/image/upload/v1722232391/myBrand/rougywh7k1d5huf8l9h8.jpg"
  },
  {
    brandName: "Clarks",
    brandTitle: "Step into Uniqueness",
    logo: "https://res.cloudinary.com/daom3n116/image/upload/v1722232597/myBrand/x7d3b0oiwndpvlenuo9w.jpg"
  },
  {
    brandName: "Woodland",
    brandTitle: "leather that weathers",
    logo: "https://res.cloudinary.com/daom3n116/image/upload/v1722065841/myBrand/ftjrsfndr3rkrk42ic9z.jpg"
  },
  {
    brandName: "Skechers",
    brandTitle: "Lights, comfort, action!",
    logo: "https://res.cloudinary.com/daom3n116/image/upload/v1722226352/myBrand/rttsajhxw4nskjraj9mj.jpg"
  },
  {
    brandName: "Asics",
    brandTitle: "Sound Mind, Sound Body",
    logo: "https://res.cloudinary.com/daom3n116/image/upload/v1722247810/myBrand/ysnuzpzwlwp0nqqyk1lj.jpg"
  },
  {
    brandName: "crocs",
    brandTitle: "Come As You Are",
    logo: "https://res.cloudinary.com/daom3n116/image/upload/v1723261089/myBrand/gveobas8vpkr0y7yipaf.jpg"
  },
  {
    brandName: "Converse",
    brandTitle: "Converse for comfort",
    logo: "https://res.cloudinary.com/daom3n116/image/upload/v1722253306/myBrand/at5oba0rwsm1lo3v3enp.jpg"
  },
  {
    brandName: "Nike",
    brandTitle: "Just Do It",
    logo: "https://res.cloudinary.com/daom3n116/image/upload/v1722232236/myBrand/pxj4cldrq0r5j4homcg1.png"
  },
  {
    brandName: "New balance",
    brandTitle: "Description 'The most New Balance shoe ever' says it all, right? No, actually. The 574 might be our unlikeliest icon. The 574 was built to be a reliable shoe that could do a lot of different things",
    logo: "https://res.cloudinary.com/daom3n116/image/upload/v1722264816/myBrand/lxkqswur4ytm6jdcvw7i.jpg"
  },
  {
    brandName: "Air Jordan",
    brandTitle: "BECOME LEGENDARY.",
    logo: "https://res.cloudinary.com/daom3n116/image/upload/v1722312443/myBrand/qoq5jrgjvy5nbnxtsh8v.jpg"
  },
  {
    brandName: "Under Armour",
    brandTitle: "Under Armour Makes You Better",
    logo: "https://res.cloudinary.com/daom3n116/image/upload/v1722317273/myBrand/ejb8ccolt1lrlttyf7ep.jpg"
  },
  {
    brandName: "Puma",
    brandTitle: "Forever. Faster",
    logo: "https://res.cloudinary.com/daom3n116/image/upload/v1722311892/myBrand/hpvgpahi1xxp7gmrfyns.jpg"
  },
  {
    brandName: "Birkenstock",
    brandTitle: "form follows function",
    logo: "https://res.cloudinary.com/daom3n116/image/upload/v1725248868/myBrand/yv8axkahcequrrbbrut4.jpg"
  },
  {
    brandName: "LACOSTE",
    brandTitle: "BE WARE",
    logo: "https://res.cloudinary.com/daom3n116/image/upload/v1727528258/myBrand/nmn8bzbwfmtxc8lx59yt.jpg"
  }
];

const createBrands = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing brands
    await Brands.deleteMany({});
    console.log('Cleared existing brands');

    // Insert new brands
    const createdBrands = await Brands.insertMany(brands);
    console.log('Brands created successfully!');
    console.log(`Created ${createdBrands.length} brands`);

    // Close MongoDB connection
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error creating brands:', error);
  }
};

createBrands(); 