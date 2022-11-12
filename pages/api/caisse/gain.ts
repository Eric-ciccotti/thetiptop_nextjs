// const { getSession } = require('next-auth/react');
const { prisma } = require('../../../lib/prisma.js')
// const CryptoJS = require('crypto-js')
// const Chance = require('chance');
// const { Cadeaux } = require('./cadeau.enum.js');

// const password = process.env.ENCRYPT_SECRET
// const encrypt = (content, password) => CryptoJS.AES.encrypt(JSON.stringify({ content }), password).toString()
// const decrypt = (crypted, password) => JSON.parse(CryptoJS.AES.decrypt(crypted, password).toString(CryptoJS.enc.Utf8)).content




async function generateGain(req, res) {

    //récupere les tickets restants
    const ticketRestants = await prisma.ticketsRestants.findFirst({
        where: {
            id: 1
        },
    })

    //si il reste des tickets ? on en retire 1
    if (ticketRestants > 0) {
        const result = await prisma.ticketsRestants.update({
            where: {
                id: 1
            },
            data: {
                ticketsRestants: {
                    decrement: 1
                }
            }
        })
        console.log(result);
    }
}

module.exports = {
    generateGain
}

        // return res.status(200).json(result, { success: true })


        // const dateAchat = new Date().toISOString();

        // const Gain = {
        //     dateAchat,
        //     NoCaisse,
        //     NoFacture
        //     NumeroTrage: 489443
        // }

    // await prisma.produit.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         nombreTotal: {
    //             decrement: 1
    //         }
    //     }
    // })

// }






// export default async function generationFacture() {
//génération d'un objet numéro de facture a partir de différentes données
// const numeroDeCaisse = Math.floor(Math.random() * 5) + 1;
// const dateDuJour = new Date().toISOString();
// const HeuresEnMilliseconde = new Date().getHours() * 60 * 60 * 1000;
// const codeCadeauRandom = (Math.random() + 1).toString(36).substring(7)

// object numéro facture
// const facture = {
//     numeroDeCaisse,
//     dateDuJour,
//     HeuresEnMilliseconde
// }

// génération d'un numéro crypté à l'aide des informations
// const numeroFactureHashed = encrypt(facture, password)

//sauvegarde du numéro de facture dans la db
// const result = await prisma.facture.create({
//     data: {
//         caisse: numeroDeCaisse,
//         dateAchat: new Date().toISOString(),
//         numeroFactureHash: numeroFactureHashed,
//         codeCadeau: codeCadeauRandom
//     }
// })

//une fois le numéro de facture crypté générer on génére le gain associé avec cette facture
//avec un pourcentage de chance

// let gain = chance.weighted([
//     Cadeaux.CoffretDecouvert69,
//     Cadeaux.CoffretDecouvert39,
//     Cadeaux.TheSignature,
//     Cadeaux.TheDetox,
//     Cadeaux.Infuseur],
//     [4, 6, 10, 20, 60]);

//DEV ONLY
// let gain = Cadeaux.CoffretDecouvert69

// switch (gain) {
//     case Cadeaux.CoffretDecouvert69:

//on retire un coffret cadeau du nombre total
// await prisma.produit.update({
//     where: {
//         id: 1
//     },
//     data: {
//         nombreTotal: {
//             decrement: 1
//         }
//     }
// })

//association d'un produit avec la facture
// await prisma.facture.update({
//     where: {
//         numeroFactureHashed: numeroFactureHashed
//     },
//     data: {
//         produitId: 1
//     }
// })

// //creation du gain
// await prisma.gain.create({
//     data: {
//         numeroTirage: codeCadeauRandom,
//         refProduit : {
//             connect :
//         }
//     }
// })

// }

