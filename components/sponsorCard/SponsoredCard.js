import Image from 'next/image'
import styles from './sponsoredAthletes.module.css'

export default function SponosoredCard({ person, crop = 'center' }) {
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
                <div className={styles.bio}>
                    <p>{person.bio}</p>
                    <p>{person.quote}</p>
                </div>
            </div>
        </div>
    )
}
