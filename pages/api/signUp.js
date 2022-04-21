import prisma from '../../lib/prisma'
const bcrypt = require('bcrypt')
const saltRounds = 10
export default async function handler(req, res) {
    if (req.method != 'POST') {
        res.status(405).json({ err: 'not post' })
        return
    }
    const user = JSON.parse(req.body)
    const duplicateUserName = await prisma.member.findUnique({
        where: {
            user_name: user.userName,
        },
    })
    if (duplicateUserName) {
        res.status(406).send({ err: 'Username already exists' })
        return
    }
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(user.password, salt)
    const newUser = await prisma.member.create({
        data: {
            user_name: user.userName,
            first_name: user.firstName,
            last_name: user.lastName,
            gender: user.sex,
            role: 'user',
            club_role: user.clubRole,
            home_town: user.homeTown,
            major: user.major,
            year: user.year,
            password: hash,
        },
    })
    newUser
        ? res.status(200).json({ message: `User ${user.userName}createed` })
        : res.status(500)
}
