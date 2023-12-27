import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      name: 'Modern floating shelf 50cm',
      price: 50,
      description: 'Stylish and minimalist floating shelf.',
      isNew: true,
      category: 'shelves',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17257',
      name: 'Black wooden shelf ',
      price: 35,
      description: 'Perfect wall-mounted shelf for utilizing spaces.',
      isNew: false,
      category: 'shelves',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      name: 'Modern black floating shelf 60cm',
      price: 65,
      description: 'Modern design for a unique look.',
      isNew: true,
      category: 'shelves',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      name: 'Shelf with drawer',
      price: 80,
      description: 'Bookshelf with additional storage drawer.',
      isNew: true,
      category: 'shelves',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
      name: 'Decorative white wall shelf',
      price: 40,
      description:
        'Versatile and stylish wall-mounted shelf in universal color.',
      isNew: false,
      category: 'shelves',
    },

    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      name: 'Black display shelf 60cm',
      price: 55,
      description: 'Elegant shelf for displaying items, ideal for kitchens.',
      isNew: false,
      category: 'shelves',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
      name: 'Modern white organizer ',
      price: 150,
      description: 'Stylish and minimalist wall-mounted organizer.',
      isNew: true,
      category: 'storage organizers',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
      name: 'White wooden bookshelf ',
      price: 135,
      description: 'Perfect 8-cubes orgnizer for utilizing spaces.',
      isNew: false,
      category: 'storage organizers',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
      name: 'Modern 4-cube organizer',
      price: 165,
      description: 'Modern design for a unique look.',
      isNew: true,
      category: 'storage organizers',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17265',
      name: '3-cube wall-mounted organizer',
      price: 180,
      description: 'Ideal solution for people who value harmony and order.',
      isNew: true,
      category: 'storage organizers',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17266',
      name: 'Decorative wooden wall shelf',
      price: 140,
      description:
        'This season most fashionable solution, will add charm to any interior.',
      isNew: false,
      category: 'storage organizers',
    },

    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17267',
      name: 'White corner organizer',
      price: 155,
      description:
        'Especially recommended for people who value practical and original solutions.',
      isNew: false,
      category: 'storage organizers',
    },
  ];
}

function getImgs() {
  return [
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      photo: 'prod1 (1).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      photo: 'prod1 (2).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      photo: 'prod1 (3).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17257',
      photo: 'prod2 (1).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17257',
      photo: 'prod2 (2).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17257',
      photo: 'prod2 (3).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      photo: 'prod3 (1).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      photo: 'prod3 (2).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      photo: 'prod3 (3).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      photo: 'prod4 (1).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      photo: '.prod4 (2).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      photo: 'prod4 (3).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
      photo: 'prod5 (1).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
      photo: 'prod5 (2).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
      photo: 'prod5 (3).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      photo: 'prod6 (1).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      photo: 'prod6 (2).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      photo: 'prod6 (3).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
      photo: 'prod7 (1).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
      photo: 'prod7 (2).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
      photo: 'prod7 (3).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
      photo: 'prod8 (1).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
      photo: 'prod8 (2).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
      photo: 'prod8 (3).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
      photo: 'prod9 (1).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
      photo: 'prod9 (2).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
      photo: 'prod9 (3).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17265',
      photo: 'prod10 (1).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17265',
      photo: 'prod10 (2).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17265',
      photo: 'prod10 (3).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17266',
      photo: 'prod11 (1).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17266',
      photo: 'prod11 (2).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17266',
      photo: 'prod11 (3).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17267',
      photo: 'prod12 (1).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17267',
      photo: 'prod12 (2).jpg',
    },
    {
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17267',
      photo: 'prod12 (3).jpg',
    },
  ];
}
async function seed() {
  // await db.productImgs.deleteMany();

  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );

  await Promise.all(
    getImgs().map((img) => {
      return db.productImgs.create({ data: img });
    }),
  );
}

seed();
