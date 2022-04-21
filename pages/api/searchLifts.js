import prisma from '../../lib/prisma'
export default async function handle(req, res) {
    if (req.method != 'POST') {
        res.status(405).json({ error: 'not a post request' })
        return
    }
    const { userName } = JSON.parse(req.body)
    const user = await prisma.member.findUnique({
        where: {
            user_name: userName,
        },
        select: {
            user_id: true,
        },
    })
    if (!user) {
        res.status(500).json({ error: 'cant find user' })
        return
    }
    const lifts = await prisma.lift.findMany({
        where: {
            user_id: user.user_id,
        },
    })
    if (!lifts) {
        res.status(500).json({ error: 'cant find lifts' })
        return
    }
    res.status(200).json({ message: lifts })
}
