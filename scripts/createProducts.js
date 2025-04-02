import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Products from '../models/productModel.js';

dotenv.config();

const products = [
  {
    productName: "BB650 WHITE Unisex Casual Shoes",
    description: "A pair of white perforated mid-top tennis shoes, has mid-top styling, lace-up closure\nLeather and Textile upper",
    category: "669f7c857c1de5ebf4cf9a63", // Casuals category ID
    brand: "66a7acf0daa693bfdf2013d1", // New balance brand ID
    gender: "Women",
    stock: 100,
    regularPrice: 12000,
    salePrice: 11999,
    sizes: [
      { size: "10", stock: 50 },
      { size: "09", stock: 50 }
    ],
    thumbnail: "https://res.cloudinary.com/daom3n116/image/upload/v1735556781/myProducts/thumbnail/cftwr3agkv9beakbwccm.jpg",
    gallery: [
      "https://res.cloudinary.com/daom3n116/image/upload/v1735556781/myProducts/thumbnail/kqzfjcu4rcx0mimfzfti.jpg",
      "https://res.cloudinary.com/daom3n116/image/upload/v1735556784/myProducts/thumbnail/un7lklwkwfappb0jizlh.jpg",
      "https://res.cloudinary.com/daom3n116/image/upload/v1735556782/myProducts/thumbnail/jcxfb8s4jyf5xj3nzf9m.jpg",
      "https://res.cloudinary.com/daom3n116/image/upload/v1735556784/myProducts/thumbnail/ylxtwbpmhheccsl3orb9.jpg"
    ],
    status: true
  },
  {
    productName: "Men Colourblocked 9060 Sneakers",
    description: "The 9060 is a new expression of the refined style and innovation-led design that have made the 99X series home to some of the most iconi",
    category: "669f7c857c1de5ebf4cf9a63", // Casuals category ID
    brand: "66a7acf0daa693bfdf2013d1", // New balance brand ID
    gender: "Men",
    stock: 393,
    regularPrice: 12345,
    salePrice: 12345,
    sizes: [
      { size: "10", stock: 98 },
      { size: "09", stock: 100 },
      { size: "08", stock: 95 },
      { size: "07", stock: 100 }
    ],
    thumbnail: "https://res.cloudinary.com/daom3n116/image/upload/v1733060797/myProducts/thumbnail/s0bek6egzyeq6zjid4ma.png",
    gallery: [
      "https://res.cloudinary.com/daom3n116/image/upload/v1733060798/myProducts/thumbnail/rvqvzoqsvllublfhmvx4.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1733060801/myProducts/thumbnail/ygjd0rlheunoymd7ln5l.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1733060801/myProducts/thumbnail/a9jd3lhxu15bchlernh1.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1733060801/myProducts/thumbnail/owtyknmmekdoycah8mks.png"
    ],
    status: true
  },
  {
    productName: "Jordan 6 Retro Men Textured Sneakers",
    description: "MJ wore 'em when he claimed his first championship and you'll be wearing 'em forwell, whatever you want. Laden with dynamic design lines and those iconic lace locks, these sneakers bring throwback style to any outfit. Lace up, and let your kicks do the talking.",
    category: "66a0d4e3e57c03ed64a15e05", // Sneakers category ID
    brand: "66a866fc38b0c55d7d9f17ae", // Air Jordan brand ID
    gender: "Men",
    stock: 390,
    regularPrice: 15000,
    salePrice: 15000,
    sizes: [
      { size: "10", stock: 100 },
      { size: "09", stock: 91 },
      { size: "08", stock: 99 },
      { size: "07", stock: 100 }
    ],
    thumbnail: "https://res.cloudinary.com/daom3n116/image/upload/v1733060111/myProducts/thumbnail/rfcuxjdsv2udajetyvlv.png",
    gallery: [
      "https://res.cloudinary.com/daom3n116/image/upload/v1733060113/myProducts/thumbnail/qss0yubebwdn8mutukgd.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1733060117/myProducts/thumbnail/fveedkmrh0he5rz8usv9.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1733060115/myProducts/thumbnail/uqpzppggivfyjtyjidcr.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1733060116/myProducts/thumbnail/wyon02qbatudkbxgd5qe.png"
    ],
    status: true
  },
  {
    productName: "Men Air VaporMax 2023 Flyknit Shoes",
    description: "The innovative tech is revealed through the perforated sockliner (pull it out to see more). The stretchy Flyknit upper is made from at least 20% recycled content by weight.",
    category: "669f7c857c1de5ebf4cf9a63", // Casuals category ID
    brand: "66a72dac113503a1652de462", // Nike brand ID
    gender: "Men",
    stock: 50,
    regularPrice: 13000,
    salePrice: 13000,
    sizes: [
      { size: "10", stock: 10 },
      { size: "09", stock: 10 },
      { size: "08", stock: 10 },
      { size: "07", stock: 10 },
      { size: "06", stock: 10 }
    ],
    thumbnail: "https://res.cloudinary.com/daom3n116/image/upload/v1733059585/myProducts/thumbnail/ujyfnphtuuiugitpizfa.png",
    gallery: [
      "https://res.cloudinary.com/daom3n116/image/upload/v1733059586/myProducts/thumbnail/fjhifqirvtn8dsqos6fr.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1733059589/myProducts/thumbnail/asjldbhm4vu4jsc4dwzv.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1733059588/myProducts/thumbnail/ue7axeeafydzozllbr5n.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1733059588/myProducts/thumbnail/fsyrerscspclmfiwath0.png"
    ],
    status: true
  },
  {
    productName: "Men Air Jordan 14 Retro 'Black Toe' Shoes",
    description: "The Air Jordan 14 Retro has class, comfort and the singular look of the original, with heritage-inspired colours, leather and responsive Zoom Air cushioning.",
    category: "66a0d4e3e57c03ed64a15e05", // Sneakers category ID
    brand: "66a866fc38b0c55d7d9f17ae", // Air Jordan brand ID
    gender: "Men",
    stock: 192,
    regularPrice: 19500,
    salePrice: 19500,
    sizes: [
      { size: "10", stock: 48 },
      { size: "09", stock: 49 },
      { size: "08", stock: 45 },
      { size: "07", stock: 50 }
    ],
    thumbnail: "https://res.cloudinary.com/daom3n116/image/upload/v1730700464/myProducts/thumbnail/gt2wdavt46h9qbuchxks.png",
    gallery: [
      "https://res.cloudinary.com/daom3n116/image/upload/v1730700465/myProducts/thumbnail/asrlpxkt52jfuiqhyknt.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1730700466/myProducts/thumbnail/kkhegd60lphjr7xtdc35.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1730700466/myProducts/thumbnail/udwx9qiojkwjebbijidp.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1730700467/myProducts/thumbnail/ifnlicddyd4qdzz2o3ji.png"
    ],
    status: true
  },
  {
    productName: "Men Air Jordan 3 Retro Craft Sneakers",
    description: "Clean and supreme, the AJ3 returns. Premium real and synthetic leather in the upperwith that luxurious elephant-print textureis combined with visible Nike Air in the sole, resulting in your favourite everyday icon.",
    category: "66a0d4e3e57c03ed64a15e05", // Sneakers category ID
    brand: "66a866fc38b0c55d7d9f17ae", // Air Jordan brand ID
    gender: "Men",
    stock: 49,
    regularPrice: 14999,
    salePrice: 14999,
    sizes: [
      { size: "10", stock: 10 },
      { size: "09", stock: 10 },
      { size: "08", stock: 10 },
      { size: "07", stock: 9 },
      { size: "06", stock: 10 }
    ],
    thumbnail: "https://res.cloudinary.com/daom3n116/image/upload/v1730198683/myProducts/thumbnail/ch7qpobd8grb7y8mdjsb.png",
    gallery: [
      "https://res.cloudinary.com/daom3n116/image/upload/v1730198685/myProducts/thumbnail/iz2zdgoi5qq7mvhvi2qg.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1730198685/myProducts/thumbnail/eiamkyx2bckdlkjm9g2t.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1730198685/myProducts/thumbnail/i3pyxmnvuympd9qhkldv.png"
    ],
    status: true
  },
  {
    productName: "Unisex Chuck Taylor All Star High Top Sneakers",
    description: "Please note that Converse's sizing runs half-size larger than standard. Refer the size chart for details.",
    category: "66a0d4e3e57c03ed64a15e05", // Sneakers category ID
    brand: "66a77ff9a107e3c37b4e05c8", // Converse brand ID
    gender: "Women",
    stock: 147,
    regularPrice: 6799,
    salePrice: 6799,
    sizes: [
      { size: "09", stock: 10 },
      { size: "08", stock: 10 },
      { size: "07", stock: 8 },
      { size: "06", stock: 10 },
      { size: "05", stock: 9 },
      { size: "11", stock: 100 }
    ],
    thumbnail: "https://res.cloudinary.com/daom3n116/image/upload/v1729052388/myProducts/thumbnail/gub5vlomraxjmcav0syw.png",
    gallery: [
      "https://res.cloudinary.com/daom3n116/image/upload/v1730699960/myProducts/thumbnail/ab3ci9j04gdtd7qjs7q1.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1730699961/myProducts/thumbnail/ls4helpvlmcrjmheazkl.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1730699960/myProducts/thumbnail/udfjyrebbgv2rfsttphr.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1730699960/myProducts/thumbnail/bwdtcjzk3embun3foaxe.png"
    ],
    status: true
  },
  {
    productName: "Men Air Jordan 5 Retro Shoes",
    description: "Provides water repellency in all weather conditions.\nLightweight foam midsole provides comfort and stability throughout your round. ",
    category: "66a0d4e3e57c03ed64a15e05", // Sneakers category ID
    brand: "66a866fc38b0c55d7d9f17ae", // Air Jordan brand ID
    gender: "Men",
    stock: 48,
    regularPrice: 17599,
    salePrice: 17598,
    sizes: [
      { size: "10", stock: 10 },
      { size: "09", stock: 10 },
      { size: "08", stock: 10 },
      { size: "07", stock: 8 },
      { size: "06", stock: 10 }
    ],
    thumbnail: "https://res.cloudinary.com/daom3n116/image/upload/v1729052008/myProducts/thumbnail/vufqgu6eztd0bgoxxcah.png",
    gallery: [
      "https://res.cloudinary.com/daom3n116/image/upload/v1729052009/myProducts/thumbnail/dqzr2czckjwbgj56oo4o.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1729052012/myProducts/thumbnail/vhsjbctiglfakbx4sb0h.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1729052011/myProducts/thumbnail/lrsjqmslantjzt7bg4rs.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1729052012/myProducts/thumbnail/vzqil2zucvsvzjpamkd6.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1729052012/myProducts/thumbnail/phngv6vooqz2cvozrxrw.png"
    ],
    status: true
  },
  {
    productName: "Unisex Kids Colourblocked",
    description: "A pair of round toe blue slip-on sneakers ,has regular styling,\nVelcro detai",
    category: "66a0d4e3e57c03ed64a15e05", // Sneakers category ID
    brand: "66f7fd42485539f0148a9990", // LACOSTE brand ID
    gender: "Kids",
    stock: 30,
    regularPrice: 5999,
    salePrice: 5999,
    sizes: [
      { size: "07", stock: 10 },
      { size: "06", stock: 10 },
      { size: "06", stock: 10 }
    ],
    thumbnail: "https://res.cloudinary.com/daom3n116/image/upload/v1728978271/myProducts/thumbnail/hxoydcxyvffifmdznaqg.png",
    gallery: [
      "https://res.cloudinary.com/daom3n116/image/upload/v1728978290/myProducts/thumbnail/aog3panahpixlf2pns7q.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1728978290/myProducts/thumbnail/zlsd3balle7whh2nbdit.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1728978291/myProducts/thumbnail/sdwhl9sq0e3hzu33818y.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1728978291/myProducts/thumbnail/mtcr95dhzcumzepbdzyp.png"
    ],
    status: true
  },
  {
    productName: "Men RIVALRY LOW EXTRA BUTTER",
    description: "A pair of pointed toe beige, grey sneakers ,has regular styling,\nLace-ups detail\nLeather upper",
    category: "66a0d4e3e57c03ed64a15e05", // Sneakers category ID
    brand: "66a72e47113503a1652de48f", // Adidas brand ID
    gender: "Men",
    stock: 45,
    regularPrice: 12000,
    salePrice: 12000,
    sizes: [
      { size: "10", stock: 10 },
      { size: "09", stock: 10 },
      { size: "08", stock: 6 },
      { size: "07", stock: 9 },
      { size: "06", stock: 10 }
    ],
    thumbnail: "https://res.cloudinary.com/daom3n116/image/upload/v1728977611/myProducts/thumbnail/h84i6yttjunubjtunvp6.png",
    gallery: [
      "https://res.cloudinary.com/daom3n116/image/upload/v1728977634/myProducts/thumbnail/pxo9bz7ntu1elvnrw8mq.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1728977634/myProducts/thumbnail/wbr63zuigom0jnn6iae2.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1728977634/myProducts/thumbnail/rgpztpgm1w9jxmypym5c.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1728977634/myProducts/thumbnail/sqcx0ikmsdigkxze3cvw.png"
    ],
    status: true
  },
  {
    productName: "Palermo Lth Unisex Sneakers",
    description: "PUMAs leather products support responsible manufacturing via the Leather Working Group",
    category: "669f7c857c1de5ebf4cf9a63", // Casuals category ID
    brand: "66a864d538b0c55d7d9f176a", // Puma brand ID
    gender: "Women",
    stock: 49,
    regularPrice: 6500,
    salePrice: 6500,
    sizes: [
      { size: "10", stock: 10 },
      { size: "09", stock: 10 },
      { size: "08", stock: 9 },
      { size: "07", stock: 10 },
      { size: "06", stock: 10 }
    ],
    thumbnail: "https://res.cloudinary.com/daom3n116/image/upload/v1728975437/myProducts/thumbnail/qwfohno6z3p9rqxfwrpp.png",
    gallery: [
      "https://res.cloudinary.com/daom3n116/image/upload/v1728975439/myProducts/thumbnail/zny3erwgbhxo2nlx9blq.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1728975439/myProducts/thumbnail/gxjhdfd9vfmfqagl1qjt.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1728975439/myProducts/thumbnail/ipaclwtgnt8upognrdc0.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1728975439/myProducts/thumbnail/ikhb5x1rtio6mcgmndwz.png"
    ],
    status: true
  },
  {
    productName: "Unisex Lockdown 7 Colourblocked Basketball Shoes",
    description: "EVA midsole delivers a lightweight & responsive ride\nDurable, solid rubber outsole with herringbone traction pattern for ultimate on-court movement & control",
    category: "66a0d4e3e57c03ed64a15e05", // Sneakers category ID
    brand: "66a879da38b0c55d7d9f18e7", // Under Armour brand ID
    gender: "Men",
    stock: 26,
    regularPrice: 65000,
    salePrice: 65000,
    sizes: [
      { size: "10", stock: 10 },
      { size: "09", stock: 8 },
      { size: "08", stock: 8 }
    ],
    thumbnail: "https://res.cloudinary.com/daom3n116/image/upload/v1728624865/myProducts/thumbnail/afyar0vj4lz04q4ekb6u.png",
    gallery: [
      "https://res.cloudinary.com/daom3n116/image/upload/v1728624867/myProducts/thumbnail/qpes9wckhp3dqqnhy7ia.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1728624867/myProducts/thumbnail/lnh4kxajzlivkj80zqy6.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1728624867/myProducts/thumbnail/ggxlkgmxpjylw75vlkxt.png",
      "https://res.cloudinary.com/daom3n116/image/upload/v1728624867/myProducts/thumbnail/imrxstzlgfpuz1vopy26.png"
    ],
    status: true
  }
];

const createProducts = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing products
    await Products.deleteMany({});
    console.log('Cleared existing products');

    // Insert new products
    const createdProducts = await Products.insertMany(products);
    console.log('Products created successfully!');
    console.log(`Created ${createdProducts.length} products`);

    // Close MongoDB connection
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error creating products:', error);
  }
};

createProducts(); 