import prisma from '../lib/prisma'
import weightClasses from '../assets/weightClasses'

export default async function getTopExercises() {
    const data = await prisma.$queryRaw`
        select weight_class_name, gender, type_of_lift, lift_weight, first_name, last_name from 
            (select weight_class_name, lift.gender, type_of_lift, lift_weight, member.first_name, member.last_name, row_number() over (partition by lift.gender, weight_class_name, type_of_lift order by lift_weight desc) as rank 
            from lift 
            inner join member on lift.user_id = member.user_id)RNK 
            where rank=1;`
    //jankness incoming. I just gotta get it done man.
    let genders = ['male', 'female']
    let lifts = weightClasses
    genders.forEach((gender) => {
        lifts[gender].forEach((weightClass) => {
            weightClass.lifts.forEach((lift) => {
                // console.log(lift)
                let filtered_lift = data.find(
                    (entry) =>
                        entry.type_of_lift === lift.name &&
                        entry.gender === gender &&
                        entry.weight_class_name === weightClass.name
                )
                lift.performer = filtered_lift ? filtered_lift : null
            })
        })
    })

    return lifts
}
