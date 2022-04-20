import { prisma } from '../../lib/prisma.ts'

export default async function handle(req, res) {
    if (req.method != 'POST') {
        res.status(405).json({ error: 'not a post request' })
        return
    }
    const { liftId } = JSON.parse(req.body)
    console.log(liftId)
    try {
        await prisma.lift.delete({
            where: {
                lift_id: parseInt(liftId),
            },
        })
    } catch {
        res.status(500).json({ error: `failed to delete lift ${liftId}` })
        return
    }
    res.status(200).json({ message: `lift ${liftId} deleted` })
}
