import Image from 'next/image'
import styles from './card.module.css'

export default function Card({ person, crop = 'center' }) {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src={person['imagePath']}
                    alt={person.name.first}
                    layout="fill"
                    objectFit="cover"
                    objectPosition={crop}
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <h4>
                    {person.name.first} {person.name.last}
                </h4>
                <div className={styles.about}>
                    <h5>
                        <i>{person.title}</i>
                    </h5>
                    <div className={styles.contact}>
                        <h6>Email: {person.contact.email}</h6>
                        <h6>Phone: {person.contact.phone}</h6>
                    </div>
                </div>
                <div className={styles.bio}>
                    <p>{person.bio}</p>
                </div>
            </div>
        </div>
    )
}
