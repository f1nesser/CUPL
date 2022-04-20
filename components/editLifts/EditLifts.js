import styles from './editLifts.module.css'
import AddLifts from './AddLifts'
import DeleteLifts from './DeleteLifts'
import { useState } from 'react'

function Navbar({ handleClick }) {
    return (
        <div className={styles.navBar}>
            <div className={styles.navItem}>
                <button
                    className={styles.button}
                    onClick={() => handleClick(true)}
                />
                <div className={styles.text}>Add Lift</div>
            </div>
            <div className={styles.navItem}>
                <div className={styles.text}>Delete Lift</div>
                <button
                    className={styles.button}
                    onClick={() => handleClick(false)}
                />
            </div>
        </div>
    )
}

export default function EditLifts() {
    const [showAddLifts, setShowAddLift] = useState(true)
    const handleClick = (value) => {
        setShowAddLift(value)
    }
    return (
        <div className={styles.container}>
            <Navbar showAddLifts={showAddLifts} handleClick={handleClick} />
            {showAddLifts ? <AddLifts /> : <DeleteLifts />}
        </div>
    )
}
