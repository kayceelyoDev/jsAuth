const { PrismaClient } = require('@prisma/client');

// Initialize the client
// It automatically reads the DATABASE_URL from your .env file
const prisma = new PrismaClient();

module.exports = prisma;