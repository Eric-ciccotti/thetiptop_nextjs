import { getSession } from 'next-auth/react';
import prisma from '../../lib/prisma'
import Chance from 'chance';




export default async function handle(req, res) {
    let chance = new Chance();
    const { code } = req.body;
    // const session = await getSession({ req });

    if (code) {

    }


    let lot = chance.weighted(["coffret découverte à 69€", "coffret découverte à 39€", "thé signature", "thé détox ou infusion", "infuseur thé"],
        [4, 6, 10, 20, 60]);



    // const result = await prisma.post.create({
    //     data: {
    //         title: title,
    //         content: content,
    //         author: { connect: { email: session?.user?.email } },
    //     },
    // });
    res.json({ lot });
}