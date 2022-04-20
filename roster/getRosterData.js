import { prisma } from '../lib/prisma.ts'

export default async function getRosterdata() {
    const data = await prisma.member.findMany({
        where: {
            club_role: 'active',
        },
        select: {
            user_id: true,
            first_name: true,
            last_name: true,
            home_town: true,
            year: true,
            major: true,
        },
    })
    return data
}
