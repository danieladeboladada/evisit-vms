import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { ForgotPasswordModal } from "../../template/forgotPassword";
import { PasswordErrorModal } from "../../template/passwordError";

export const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="form-container">
        <form>
          <p className="header">Login into your account</p>
          <div className="inputs">
            <Input placeholder="Email" />
            <Input
              placeholder="Password"
              type="password"
              onChange={setPassword}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <span>
              <input type="checkbox" /> Remember me
            </span>
            <p className="color-red" onClick={() => setIsOpen(true)}>
              Forget Password
            </p>
          </div>
          <div className="button-actions">
            <button
              className="button-green"
              onClick={() => {
                if (!password) setPasswordOpen(true);
              }}
            >
              Login
            </button>
            <p>
              Don't have an account
              <Link to="/auth/create-account" className="bold">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
      <ForgotPasswordModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <PasswordErrorModal isOpen={passwordOpen} setIsOpen={setPasswordOpen} />
    </>
  );
};
