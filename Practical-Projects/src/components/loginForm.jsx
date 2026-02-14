import { useState } from "react";
import styles from "./loginForm.module.css";
export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const HandleFormSubmit = (event) => {
    event.preventDefault();
    let details = [{ username, password }];
    switch (event.target.name) {
      case "username":
        details = [...details, { [event.target.name]: [event.target.value] }];
        break;
      case "password":
        details = [...details, { [event.target.name]: [event.target.value] }];
        break;
    }
    console.log(details);
  };

  return (
    <>
      <form onSubmit={HandleFormSubmit} className={styles.container}>
        <h2>Login Page</h2>
        <div className="username">
          <label htmlFor="username">Enter Username: </label>
          <input
            type="text"
            name="username"
            autoComplete="off"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Enter Password:</label>
          <input
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button type="Submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </>
  );
}
