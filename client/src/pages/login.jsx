// imports
import { useState } from "react";
import NavBar from "../components/NavBar";
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import '../styles/login.css';
import { validateUser } from "../helpers/userHelpers";
import { useRouter } from 'next/router';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState('');

  // set router
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    validateUser(email, password).then((data) => {
      if(data['data']) {
        localStorage.setItem("loggedIn", JSON.stringify(true));
        localStorage.setItem("token", data['data']);
        setToken(data);
        console.log("token: ", data['data']);
        router.push('/');
      } else {
        console.log("your email or password is incorrect");
      };
    });
  };

  // template
  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title="Login"/>
      <Spacer />
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
      </div>
    </div>
  );
}
// <div className="login">
//     <form id="login" className="input-group-login" onSubmit={handleLogin}>
//       <h1 className="form-title">Login</h1>
//       <input
//         id="email"
//         type="email"
//         className="input-field"
//         placeholder="Email Id"
//         value={email}
//         onChange={(event) => setEmail(event.target.value)}
//       />
//       <input
//         id="password"
//         type="password"
//         className="input-field"
//         placeholder="Enter Password"
//         value={password}
//         onChange={(event) => setPassword(event.target.value)}
//       />
//       <div className="checkbox-container">
//         <input type="checkbox" className="check-box" />
//         <span className="checkbox-text">Remember Password</span>
//       </div>
//       <button type="submit" className="submit-btn">
//         Login
//       </button>
//     </form>
//     </div>
//   );
// };

// export default Login;
