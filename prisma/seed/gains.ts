// import { produits } from './produits';
import { Prisma } from "@prisma/client";

const NoFacture = (Math.random() + 1).toString(36).substring(7).toUpperCase()
const produitsId = Math.floor(Math.random() * 5) + 1;

// const NoCaisse = Math.floor(Math.random() * 5) + 1;

export const gains :  Array<Prisma.GainCreateManyInput>= [
    { 
        codeCadeau : NoFacture,
        produitId: produitsId
    }]
