// imports
import { useState } from "react";
import NavBar from "../components/NavBar";
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import '../styles/login.css';

export default function Login() {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
  };

  // template
  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title="Login"/>
      <Spacer />
      <div className="login">
        <h2>Login into Codex Epicuria</h2>
        <form className="login-form">
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
