const { PrismaClient } = require('@prisma/client')
const { produits } = require('../data/produits')
const prisma = new PrismaClient()

async function main() {
    await prisma.produit.createMany({
        data: produits
    })
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })