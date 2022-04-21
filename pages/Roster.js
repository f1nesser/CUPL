import getRosterdata from '../roster/getRosterData'
import NavBar from '../components/navbar/NavBar'
import styles from './roster.module.css'
import Image from 'next/image'
import RosterTable from '../components/rosterTable/RosterTable'
import { useSession } from 'next-auth/react'

export async function getServerSideProps() {
    const people = await getRosterdata()
    return { props: { people } }
}

export default function Roster({ people }) {
    const { data: session } = useSession()
    return (
        <div className={styles.grandContainer}>
            <NavBar session={session} />
            <div className={styles.contentContainer}>
                <div className={styles.imageAndText}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/roster/newRoster.jpg"
                            alt=""
                            className={styles.image}
                            layout="fill"
                        />
                        <div className={styles.overlay} />
                    </div>
                    <div className={styles.titleDiv}>
                        <h1 className={styles.title}>CUPL Roster</h1>
                        <h1 className={styles.title}> 2021-2022</h1>
                    </div>
                </div>

                <div className={styles.tableContainer}>
                    <RosterTable people={people} />
                </div>
            </div>
        </div>
    )
}
