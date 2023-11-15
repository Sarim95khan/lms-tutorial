const { PrismaClient } = require('@prisma/client');

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: 'Engineering' },
        { name: 'Art & Science' },
        { name: 'Engineering Economics' },
        { name: 'Sculpting' },
        { name: '3D Design' },
        { name: 'Metaverse' },
        { name: 'Dance Classes' },
        { name: 'Body Building' },
      ],
    });
    console.log('Success');
  } catch (error) {
    console.log('Error in seeding database ');
  } finally {
    await database.$disconnect();
  }
}

main();
