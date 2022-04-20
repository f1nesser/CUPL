import styles from './rosterTable.module.css'

function TableHeaders() {
    const tableHeaders = ['Name', 'Home Town', 'Year', 'Major']
    return tableHeaders.map((item, index) => (
        <th className={styles.tableHeader} key={index}>
            {item}
        </th>
    ))
}

function TableContent({ people }) {
    return people.map(
        ({ user_id, first_name, last_name, home_town, year, major }) => {
            return (
                <tr className={styles.cell} key={user_id}>
                    <td className={styles.cell}>
                        {' '}
                        {first_name} {last_name}{' '}
                    </td>
                    <td className={styles.cell}> {home_town} </td>
                    <td className={styles.cell}> {year} </td>
                    <td className={styles.cell}> {major} </td>
                </tr>
            )
        }
    )
}

export default function RosterTable({ people }) {
    return (
        <table className={styles.table}>
            <tr>
                <TableHeaders />
            </tr>
            <TableContent people={people} />
        </table>
    )
}
