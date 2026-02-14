import { useState } from "react";
import styles from "./contactForm.module.css";
export default function ContactForm() {
  const [user, setuser] = useState({
    username: "",
    password: "",
    message: "",
  });
  const handleInput = (e) => {
    setuser({ ...user, [e.target.name]: [e.target.value] });
  };
  const HandleFormSubmit = (ev) => {
    ev.preventDefault();
    console.log(user);
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
            value={user.username}
            onChange={handleInput}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Enter Password:</label>
          <input
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
            value={user.password}
            onChange={handleInput}
          />
        </div>
        <div className="message">
          <label htmlFor="message">Enter Message:</label>
          <input
            type="textBox"
            name="message"
            autoComplete="off"
            placeholder="message"
            value={user.message}
            onChange={handleInput}
          />
        </div>

        <button type="Submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </>
  );
}
