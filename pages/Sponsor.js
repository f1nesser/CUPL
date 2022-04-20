import NavBar from '../components/navbar/NavBar'
import Image from 'next/image'
import styles from './sponsor.module.css'
import sponsoredAthletes from '../assets/sponsoredAthletes'
import SponosoredCard from '../components/sponsorCard/SponsoredCard'
import { useSession } from 'next-auth/react'
export default function Sponsor() {
    const { data: session } = useSession()
    let quote = {
        line1: '“Gym No 5 is as good as a gym can get for an aspiring athlete. With competition standard equipment across multiple strength sports, it’s great for any athlete.”',
        line2: '- Will Snider',
    }
    return (
        <>
            <NavBar session={session} />
            <div className={styles.container}>
                <div className={styles.logo}>
                    <div className={styles.logoImageContainer}>
                        <Image
                            src="/SponsorPhoto.png"
                            layout="fill"
                            className={styles.logoImage}
                        />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.sponsorImageContainer}>
                        <Image
                            src="/gym5.jpg"
                            layout="fill"
                            className={styles.sponsorImage}
                        />
                        <div className={styles.overlay} />
                    </div>
                    <div className={styles.quote}>
                        <p>
                            <i>{quote.line1}</i>
                        </p>
                        <div className={styles.alignRight}>
                            <p>
                                <i>{quote.line2}</i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.athletesContainer}>
                    <div className={styles.athletes}>
                        <div className={styles.athleteTitle}>
                            <p> Sponsored Athletes</p>
                        </div>
                        <div className={styles.card1}>
                            <SponosoredCard
                                person={sponsoredAthletes.athlete1}
                                crop="0px -55px"
                            />
                        </div>
                        <div className={styles.card2}>
                            <SponosoredCard
                                person={sponsoredAthletes.athlete2}
                                crop="0px -100px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
