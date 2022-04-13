import { NextApiRequest, NextApiResponse } from "next";
import {getSession} from 'next-auth/react'
import {stripe} from '../../services/stripe';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method == 'POST') { //criando
        const session = await getSession({ req })

        const stripeCustomer = await stripe.customers.create({
            email: session.user.email
            //metadata
        })

        const StripecheckoutSession = await stripe.checkout.sessions.create({
            customer: stripeCustomer.id,
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items:[
                {price: 'price_1Kmk8jAK85FCE6K35Ft4DVEX', quantity: 1}
            ],
            mode:'subscription',
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL 

        })

        return res.status(200).json({sessionId: StripecheckoutSession.id})

    } else {
        res.setHeader('allow','POST')
        res.status(405).end('Method not allowed')
    }

}