import styles from './addLifts.module.css'
export default function AddLifts() {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const lift = {
            userName: e.target['0'].value,
            typeOfLift: e.target['1'].value,
            date: e.target['2'].value,
            bodyWeight: e.target['3'].value,
            liftWeight: e.target['4'].value,
        }
        if (lift.date === '') {
            alert('please enter a date')
            return
        }
        fetch('./api/addLift', {
            method: 'POST',
            body: JSON.stringify(lift),
        }).then((res) =>
            res.json().then((data) => {
                // console.log(data)
                res.status === 200 ? alert(data.message) : alert(data.error)
            })
        )
    }
    return (
        <div className={styles.container}>
            <div>
                <h1> Add a lift</h1>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="userName" placeholder="jSeed1" />
                <label htmlFor="typeOfLift">Type of lift</label>
                <select name="typeOfLift" id="typeOfLift">
                    <option value="bench">bench</option>
                    <option value="squat">squat</option>
                    <option value="deadlift">deadlift</option>
                </select>
                <label>Date of lift</label>
                <input type="date" name="data" />
                <label>Body weight (kg)</label>
                <input type="number" name="bodyWeight" />
                <label>Lift weight (lbs)</label>
                <input type="number" name="liftWeight" />
                <button type="submit">Add Lift</button>
            </form>
        </div>
    )
}
