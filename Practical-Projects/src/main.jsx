import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Practice from "./components/useeffect";
import ApiLearn from "./components/api";
// import ContactForm from "./components/contactForm.jsx";
// import App from './App.jsx'
// import LoginForm from "./components/loginForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <LoginForm /> */}
    {/* <Practice></Practice> */}
    <ApiLearn></ApiLearn>
    {/* <ContactForm></ContactForm> */}
  </StrictMode>,
);
