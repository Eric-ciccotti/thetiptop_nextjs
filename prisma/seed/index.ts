import { PrismaClient } from "@prisma/client";
import { gains } from './gains';
import { produits } from './produits';
import { generateGain } from '../../pages/api/caisse/gain';

// const generationFacture = require('../pages/api/caisse/caisse.js')

const prisma = new PrismaClient();

async function main() {
    const NoFacture = (Math.random() + 1).toString(36).substring(7).toUpperCase()

    //génération des tickets restant
    await prisma.ticketsRestants.create({
        data: {
            ticketsRestants: 1500000
        }
    })

    //génération des produits
    await prisma.produit.createMany({
        data: produits
    })

    //génération des gains
    for(let i = 0; i <= 5; i++) {
        await prisma.produit.createMany({
            data: gains
        })
    }
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })