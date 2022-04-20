import NavBar from '../components/navbar/NavBar'
import styles from './leaderboards.module.css'
import Leaderboard from '../components/leaderboard/Leaderboard'
import weightClasses from '../assets/weightClasses'
import getTopExercise from '../exercises/getTopExercises'
import EditLifts from '../components/editLifts/EditLifts'
import { useSession } from 'next-auth/react'
export async function getServerSideProps() {
    const lifts = await getTopExercise()
    return { props: { lifts } }
}
export default function Leaderboards({ lifts }) {
    const { data: session } = useSession()
    return (
        <div className={styles.grandContainer}>
            <NavBar session={session} />
            <div>
                <div className={styles.table}>
                    <h1>Male Lifts</h1>
                    <Leaderboard
                        weightClasses={weightClasses.male}
                        gender="male"
                        lifts={lifts.male}
                    />
                </div>
                <div className={styles.table}>
                    <h1>Female Lifts</h1>
                    <Leaderboard
                        weightClasses={weightClasses.female}
                        gender="female"
                        lifts={lifts.female}
                    />
                </div>
            </div>
            {session ? (
                session.user.role != 'admin' ? null : (
                    <div className={styles.editLiftContainer}>
                        <EditLifts />
                    </div>
                )
            ) : null}
        </div>
    )
}
