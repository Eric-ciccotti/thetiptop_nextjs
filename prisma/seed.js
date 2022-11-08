import { PrismaClient } from '@prisma/client'
import { produits } from '../data/produits.js'
import GenerateGain from '../pages/api/caisse/caisse.js'
import generationFacture from '../pages/api/caisse/caisse.js'
const prisma = new PrismaClient()

async function main() {

    //génération des tickets restant
    await prisma.TicketsRestants.create({
        data: {
            ticketsRestants: 1500000
        }
    })

    //génération des produits
    await prisma.produit.createMany({
        data: produits
    })




    //génération de 10 dummy factures
    // for (let i = 0; i <= 10; i++) {
    //     const NoCaisse = Math.floor(Math.random() * 5) + 1;
    //     const NoFacture = (Math.random() + 1).toString(36).substring(7).toUpperCase()
    //     await GenerateGain(NoCaisse, NoFacture)
    // }


}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })