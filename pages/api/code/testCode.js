import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma'
import Chance from 'chance';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await createInquiry(req, res)
  } else {
    return res.status(405).json({ message: 'Method not allowed', success: false })
  }
}


async function testCode(req, res) {
  const { code } = req.body;
  //on vérifie si un utilisateur a bien une session
  // const session = await getSession({ req });

  //on regarde si le code cadeau existe en base
  //on regarde si il y a un hash qui correspond a se code
  //on regarde si le code cadeau a déja été utilisé ? 
  //SI NON
  //on ajoute le cadeau au profil de l'utilisateur
  //on met a FALSE le code 
  //SI OUI
  //on envoi un message code utilisé

  try {
    // const result = await prisma.inquiry.create({
    //   data: {
    //     name: body.firstName,
    //     email: body.email,
    //     subject: body.subject,
    //     message: body.message
    //   }
    // })
    // return res.status(200).json(result, { success: true })
    return res.status(200).json(result, { success: true })

  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error creating question', success: false })
  }
}




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