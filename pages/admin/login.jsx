/* import React, { useState } from 'react'
import styles from '../../styles/Login.module.css'
import { useRouter } from 'next/router'

 const login = () => {
    const [username, Setusername] = useState(null)
    const [password, Setpassword] = useState(null)
    const [Error, SetError] = useState(false)
    const router = useRouter()
    const handleClick = async () => {
        try {
          await axios.post("http://localhost:3000/api/login", {
            username,
            password,
          });
          router.push("/admin");
        } catch (err) {
          SetError(true);
        }
      };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>ADMIN DASHBOARD</h1>
                <input placeholder='username' className={styles.input} onChange={(e) => Setusername(e.target.value)} />

                <input type="password" placeholder='password' className={styles.input} onChange={(e) => Setpassword(e.target.value)} />
<button onClick={handleClick} className={styles.button}>
    Sign In

</button>
{Error &&<span className={styles.EError}>Wrong Credintials!</span>}
            </div>
        </div>
    )
}
export default login; */
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Login.module.css";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/admin");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input
          placeholder="username"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className={styles.button}>
          Sign In
        </button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </div>
    </div>
  );
};

export default Login;