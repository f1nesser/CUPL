import prisma from '../../lib/prisma'
import { getSession } from 'next-auth/react'

export default async (req, res) => {
    const session = await getSession({ req })
    const { userName, typeOfLift, date, bodyWeight, liftWeight } = JSON.parse(
        req.body
    )

    try {
        if (session.user.role === 'admin') {
            const user = await prisma.member.findUnique({
                where: { user_name: userName },
                select: {
                    user_id: true,
                },
            })
            if (!user) {
                res.status(500).send({ error: 'failed to find user' })
                return
            }
            const convertedDate = new Date(date)
            const lift = await prisma.lift.create({
                data: {
                    user_id: user.user_id,
                    lift_date: convertedDate,
                    type_of_lift: typeOfLift,
                    lift_weight: liftWeight,
                    body_weight: bodyWeight,
                },
            })
            console.log(lift)
            lift
                ? res.status(200).json({ message: 'lift added' })
                : res.status(500).send({ error: 'failed to add to table' })
        } else {
            res.status(401).json({ error: 'not permitted' })
        }
    } catch (error) {
        res.status(500).json({ error: 'session error' })
    }
}
