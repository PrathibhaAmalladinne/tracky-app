import { Link } from "react-router-dom";
import PageNav from "../components/PageNav"
import styles from "./Login.module.css"
import { useState } from "react";
// import Homepage from "./Homepage";

function Login() {
    const[email,setEmail] = useState("jack@example.com");
    const[password,setPassword] = useState("qwerty");
    return (
        <main className={styles.login}>
            <PageNav />
              <form className={styles.form}>
                 <div className={styles.row}>
                    <label htmlFor="email">Email Address</label>
                    <input
                     type="email"
                     id="email"
                     onChange={(e)=>setEmail(e.target.value)}
                     value ={email}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                     type="password"
                     id="password"
                     onChange={(e)=>setPassword(e.target.value)}
                     value ={password}
                    />
                 </div>
                 <div>
                 <Link to ="/">
                <button className={styles.btn} >Login</button>
                 </Link>
                 </div>
              </form>
        </main>
    )
}

export default Login