import styles from './deleteLifts.module.css'
import { useState } from 'react'

function LiftList({ lifts }) {
    const liftListItems = lifts.map((lift) => {
        let formatedDate = lift.lift_date.split('T')[0]
        return (
            <tr key={lift.lift_id}>
                <td>{lift.lift_id}</td>
                <td>{lift.type_of_lift}</td>
                <td>{parseFloat(lift.lift_weight).toFixed(2)}lbs</td>
                <td>{lift.body_weight}kg</td>
                <td>{lift.weight_class_name}</td>
                <td>{formatedDate}</td>
            </tr>
        )
    })
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <tr>
                    <th>lift id</th>
                    <th>lift type</th>
                    <th>lift weight</th>
                    <th>body weight</th>
                    <th>weight class</th>
                    <th>date</th>
                </tr>
                {liftListItems}
            </table>
        </div>
    )
}

export default function DeleteLifts() {
    const [liftData, setLiftData] = useState(null)

    const handleSearch = async (e) => {
        e.preventDefault()
        const user = { userName: e.target['0'].value }
        fetch('../../api/searchLifts', {
            method: 'POST',
            body: JSON.stringify(user),
        }).then((res) =>
            res.json().then((data) => {
                if (res.status === 200) {
                    setLiftData(data.message)
                } else {
                    alert(data.error)
                    setLiftData(null)
                }
            })
        )
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        const user = { liftId: e.target['0'].value }
        fetch('../../api/deleteLift', {
            method: 'POST',
            body: JSON.stringify(user),
        }).then((res) =>
            res.json().then((data) => {
                if (res.status === 200) {
                    alert(data.message)
                } else {
                    alert(data.error)
                }
                setLiftData(null)
            })
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.interactContainer}>
                <form onSubmit={handleSearch} className={styles.form}>
                    <label>Search for user</label>
                    <input
                        type="text"
                        name="userName"
                        placeholder="Enter a username"
                    />
                    <button type="submit"> Search</button>
                </form>
                <form onSubmit={handleDelete} className={styles.form}>
                    <label>Delete a lift</label>
                    <input
                        type="number"
                        name="liftId"
                        placeholder="Enter a lift id"
                    />
                    <button type="submit"> Delete</button>
                </form>
            </div>
            {!liftData ? null : <LiftList lifts={liftData} />}
        </div>
    )
}
