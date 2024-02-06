import { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { FaRegUserCircle } from "react-icons/fa";

import { SERVER_URL } from '../lib/constants';
import styles from "./Login.module.css";

export default function Login() {
    const navigate = useNavigate();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            const res = await axios.post(`${SERVER_URL}/user/login`, {
                email, password
            });
            const { error, response } = res.data;
            if (error) {
                throw new Error(error.message);
            }
            localStorage.setItem("token", JSON.stringify(response.token));
            localStorage.setItem("user", JSON.stringify(response.user));
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("An error occurred. Please try again.");
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <Form onSubmit={handleSubmit}>
                    <p className={styles.heading}>Sign In</p>

                    <div>
                        <FaRegUserCircle className={styles.profileIcon} size={100} color="#78849E" strokeWidth={0} />
                    </div>

                    <input className={styles.inputField} type="email" id="email" name="email" placeholder="username" />
                    <input className={styles.inputField} type="password" id="password" name="password" placeholder="password" />

                    <div className={styles.descrip}>
                        <p><input type="checkbox" />Remember me</p>
                        <p>Forgot your password</p>
                    </div>

                    <button className={styles.loginButton} type="submit">
                        Sign In
                    </button>
                </Form>
                <button className={styles.loginButton}>
                    <Link to="/signup">Sign Up</Link>
                </button>
            </div>
        </div>
    );
}