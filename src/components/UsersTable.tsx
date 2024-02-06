import Table from 'react-bootstrap/Table'
import { FcSettings } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";

import { USERS_DATA } from "../lib/constants"
import styles from "./UsersTable.module.css"

const UsersTable = () => {
    return (
        <Table responsive className={styles.tableComponent}>
            <thead>
                <tr className={styles.tableRow}>
                    <th>#</th>
                    <th>Name</th>
                    <th>Date Created</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {USERS_DATA.map((user, index) => (
                    <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.dateCreated}</td>
                        <td>{user.role}</td>
                        <td>{user.status}</td>
                        <td>
                            <FcSettings />
                            <FcCancel />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default UsersTable