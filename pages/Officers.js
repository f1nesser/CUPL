import NavBar from './components/navbar/NavBar'
import Card from './components/card/Card'
import styles from './officers.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import officers from '../assets/officers'
import { useSession } from 'next-auth/react'
export default function Officers() {
    const { data: session } = useSession()
    return (
        <div className={styles.container}>
            <NavBar session={session} />
            <div className={styles.grid}>
                <Card person={officers.headCoach} crop="0px -70px" />
                <Card person={officers.president} crop="0px -80px" />
                <Card person={officers.vicePresident} />
                <Card person={officers.treasurer} crop="0px -90px" />
                <Card person={officers.identityDirector} />
                <Card person={officers.mediaDirector} />
            </div>
        </div>
    )
}
