import { forwardRef, useRef } from "react";

export default function UseRef() {
  const username = useRef(null);
  const password = useRef(null);

  const HandleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };
  return (
    <>
      <form onSubmit={HandleFormSubmit}>
        {/* <input type="text" name="username" ref={username} autoComplete="off" /> */}
        <Username ref={username} type="text" name="username" />
        <input
          type="password"
          name="password"
          ref={password}
          autoComplete="off"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
const Username = forwardRef((prop, ref) => {
  return <input {...prop} ref={ref} />;
});
