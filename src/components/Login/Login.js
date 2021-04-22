import { Input } from "antd";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { login } from "../../utils/api";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginResp = await login(email, password);
      setLoginError(false);

      if (loginResp.data.token) {
        const action = {
          type: "LOGIN",
          payload: loginResp.data,
        };
        dispatch(action);
        localStorage.setItem("login-info", JSON.stringify(loginResp.data));
      }
    } catch {
      setLoginError(true);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="loginpage-wrapper">
          <div className="login-home">
            <div className="switchon-logo">switchon</div>
            <div className="loginpage-assignments">Assignments</div>
          </div>
          <div className="login-container">
            <div className="todo-loginpage">To-Do App</div>
            <div className="login-details">
              <Input
                className="email"
                value={email}
                placeholder="Email ID"
                prefix={<AiOutlineMail />}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <Input.Password
                className="password"
                value={password}
                placeholder="Password"
                prefix={<BiLock />}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button type="submit" className="login-btn">
                Login
              </button>
              {loginError && (
                <div style={{ color: "red" }}>Incorrect login details</div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
