// imports
// react imports/hooks
import { useState } from "react";
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "../components/NavBar";
// components
import Header from '../components/Header';
import Spacer from '../components/Spacer';
// styles
import '../styles/login.css';
// helpers
import { validateUser, addUser } from "../helpers/userHelpers";

export default function Login() {

  const [loginPage, setLoginPage] = useState(true);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState('');

  // set router
  const router = useRouter();

  // handle login
  const handleLogin = (event) => {
    event.preventDefault();
    validateUser(email, password).then((data) => {
      if (!email) {
        toast.error('Please enter your email.');
        return;
      };
      if (!password) {
        toast.error('Please enter your password.');
        return;
      };
      if(data['data']) {
        localStorage.setItem("loggedIn", JSON.stringify(true));
        localStorage.setItem("token", data['data']);
        setToken(data['data']);
        router.push('/');
      } else {
        toast.error("Invalid email or password.");
        return;
      };
    });
  };

  // handle register
  const handleRegister = (event) => {

    // assign form data to userData obj
    const userData = {
      user_name: userName,
      email: email,
      password: password
    };

    event.preventDefault();
      // if (!password) {
      //   toast.error('Please enter your password.');
      //   return;
      // };
      // if(data['data']) {
      //   localStorage.setItem("loggedIn", JSON.stringify(true));
      //   localStorage.setItem("token", data['data']);
      //   setToken(data['data']);
      //   router.push('/');
      // } else {
      //   toast.error("Invalid email or password.");
      //   return;
      // };
      addUser(userData);
      router.push('/myRecipes');
  };

  // handle login/register toggle
  const handleLoginPage = (event) => {
    event.preventDefault();
    setLoginPage(!loginPage);
  };

  // template
  return (
    <div>
      <NavBar />
      <Spacer />
      {loginPage ? (
      <Header title="Login"/>
      ) : (
        <Header title="Register"/>
      )}
      <Spacer />
      <ToastContainer />
      {loginPage ? (
        <div className="login">
          <h2>Login to Add Your Taste</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <input
              id="email"
              type="email"
              className="input-field"
              placeholder="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              id="password"
              type="password"
              className="input-field"
              placeholder="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit" className="submit-btn">
              Login
            </button>
          </form>
          <p onClick={handleLoginPage}>Create a new account?</p>
        </div>
      ) : (
        <div className="login">
          <h2>Register to Add Your Taste</h2>
          <form className="login-form" onSubmit={handleRegister}>
            <input
              id="username"
              type="text"
              className="input-field"
              placeholder="user name"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            <input
              id="email"
              type="email"
              className="input-field"
              placeholder="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              id="password"
              type="password"
              className="input-field"
              placeholder="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
          <p onClick={handleLoginPage}>Already have an account?</p>
        </div>
      )}
    </div>
  );
};