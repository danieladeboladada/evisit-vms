import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export const CreateAccountPage = () => {
  return (
    <div className="form-container">
      <form>
        <p className="header">Create your account</p>
        <div className="inputs">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
        </div>
        <div className="inputs">
          <Input placeholder="Phone Number" type="tel" />
          <Input placeholder="Email" type="email" />
        </div>
        <div className="inputs">
          <Input placeholder="Password" type="password" />
          <Input placeholder="Confirm Password" type="password" />
        </div>
        <div className="button-actions">
          <button className="button-green">Submit</button>
          <p>
            Already have an account?{" "}
            <Link to="/auth/login" className="bold">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
