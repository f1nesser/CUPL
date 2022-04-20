import styles from './resources.module.css'
import NavBar from './components/navbar/NavBar'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import cuplLogo from '../public/cuplLogo.jpg'
import byLaws from '../public/bylaws.png'
import resourceLinks from '../assets/resourceLinks'

function LinkButton({ link }) {
    return (
        <form action={link}>
            <button className={styles.button} type="submit" />
        </form>
    )
}

function Item({ title, image, link }) {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.imageContainer}>
                <Image src={image} className={styles.image} />
            </div>
            <div className={styles.itemTitle}>{title}</div>
            <LinkButton link={link} />
        </div>
    )
}

export default function Resources() {
    const { data: session } = useSession()
    return (
        <div className={styles.container}>
            <NavBar session={session} />
            <div className={styles.programContainer}>
                <div className={styles.text}>CUPL RESOURCES</div>
                {session ? (
                    <div className={styles.programs}>
                        <Item
                            title="Training Programs"
                            image={cuplLogo}
                            link={resourceLinks.programs}
                        />
                        <Item
                            title="Bylaws"
                            image={byLaws}
                            link={resourceLinks.bylaws}
                        />
                    </div>
                ) : (
                    <h3> please login to view </h3>
                )}
            </div>
        </div>
    )
}
