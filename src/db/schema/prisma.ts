import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;

// const prisma = new PrismaClient();

// export default async function prismaExample() {
//   const newUser = await prisma.user.create({
//     data: {
//       name: 'Elliott',
//       email: 'xelliottx@example-user.com',
//     },
//   });

//   const users = await prisma.user.findMany();
// }
