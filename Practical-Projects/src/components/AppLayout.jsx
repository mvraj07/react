import { Outlet } from "react-router-dom";
import LoginForm from "./loginForm";
import ContactForm from "./contactForm";

export default function AppLayout() {
  return (
    <>
      <LoginForm />
      <Outlet />
      <ContactForm />
    </>
  );
}
