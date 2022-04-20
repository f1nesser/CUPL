import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navbar/NavBar'
import homeBackground from '../public/newHome.jpg'
import aboutUs from '../public/aboutUs.jpg'
import aboutUsText from '../assets/aboutUsText'
import styles from './index.module.css'
import { useSession } from 'next-auth/react'
export default function HomePage() {
    //adding opacity effect photo
    const { data: session, status } = useSession()
    if (status === 'loading') {
        return <p>loading...</p>
    }
    return (
        <>
            <div className={styles.container}>
                <NavBar session={session} />
                <div className={styles.contentAndImage}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={homeBackground}
                            alt=""
                            className={styles.image}
                            layout="fill"
                        />
                    </div>

                    <div className={styles.overlay} />

                    <div className={styles.content}>
                        <div className={styles.title}>
                            CU&apos;S FIRST POWERLIFTING TEAM{' '}
                        </div>
                        <div className={styles.values}>
                            <p>Growth</p>
                            <p>Community</p>
                            <p>Discipline</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.aboutUsContentAndImage}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={aboutUs}
                            alt=""
                            className={styles.image}
                            layout="fill"
                        />
                    </div>

                    <div className={styles.overlay} />

                    <div className={styles.aboutUsContent}>
                        <div className={styles.title}>About us</div>
                        <div className={styles.text}>
                            <p>{aboutUsText.line1}</p>
                            <p>{aboutUsText.line2}</p>
                            <div className={styles.rightAlign}>
                                <p>{aboutUsText.line3}</p>
                                <p>{aboutUsText.line4}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
