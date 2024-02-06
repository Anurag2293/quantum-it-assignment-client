import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import UsersTable from '../components/UsersTable'
import styles from "./Dashboard.module.css"
import { Button } from 'react-bootstrap'

const Dashboard = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        const user = localStorage.getItem('user')
        if (!token || !user) {
            return navigate('/login');
        }
    }, [navigate])

    return (
        <div className={styles.container}>
            <div className={styles.headContainer}>
                <h1 className={styles.heading}>Welcome, {JSON.parse(String(localStorage.getItem('user'))).name}</h1>
                <Button variant="danger" onClick={() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    navigate('/login');
                }}>Logout</Button>
            </div>
            <section className={styles.tableSection}>
                <UsersTable />
            </section>
        </div>
    )
}

export default Dashboard