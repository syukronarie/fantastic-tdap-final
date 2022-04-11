import React from "react";

const LoginPage = () => {
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();
  const checkboxRef = React.createRef();
  React.useEffect(() => {
    const data = JSON.parse(JSON.parse(localStorage.getItem("loginData")));
    if (data) {
      const { username, password, rememberme } = data;
      console.log(data);
      usernameRef.current.value = username;
      passwordRef.current.value = password;
      checkboxRef.current.checked = true;
    }
  }, [usernameRef]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = {};
    formData.forEach(function (value, key) {
      values[key] = value;
    });
    const data = JSON.stringify(values);
    formData.get("rememberme") ? localStorage.setItem("loginData", JSON.stringify(data)) : localStorage.removeItem("loginData");
    alert(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" id="username" placeholder="username" ref={usernameRef} />
      <input type="password" name="password" id="password" placeholder="password" ref={passwordRef} />
      <input type="checkbox" name="rememberme" id="rememberme" ref={checkboxRef} /> remember me
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
