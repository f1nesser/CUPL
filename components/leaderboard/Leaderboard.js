import styles from './Leaderboard.module.css'
import weightClasses from '../../assets/weightClasses'

function Lifts({ lifts, typeOfLift }) {
    let liftsItems = lifts.map((weightClass) => {
        let user = weightClass.lifts.find(
            (type) => type.name === typeOfLift
        ).performer
        // console.log(user)
        return (
            <td className={styles.cell} key={weightClass.name}>
                {user
                    ? `${user.first_name}  ${user.last_name}\n ${parseFloat(
                          user.lift_weight
                      ).toFixed(2)}lbs`
                    : 'no entry'}
            </td>
        )
    })
    return liftsItems
}

export default function Leaderboard({ gender, lifts }) {
    // turn into component
    const weightClassItems = weightClasses[gender].map((weightClass) => {
        return (
            <th scope="col" className={styles.cell} key={weightClass.name}>
                {weightClass.name}kg
            </th>
        )
    })
    // processLifts(lifts, 'squat', weightClasses)
    return (
        <>
            <table className={styles.table}>
                <tr>
                    <th scope="row" className={styles.cell}></th>
                    {weightClassItems}
                </tr>
                <tr>
                    <th scope="row" className={styles.cell}>
                        Bench
                    </th>
                    <Lifts lifts={lifts} typeOfLift="bench" />
                </tr>
                <tr>
                    <th scope="row" className={styles.cell}>
                        Squat
                    </th>
                    <Lifts lifts={lifts} typeOfLift="squat" />
                </tr>
                <tr>
                    <th className={styles.cell}>Deadlift</th>
                    <Lifts lifts={lifts} typeOfLift="deadlift" />
                </tr>
            </table>
        </>
    )
}
