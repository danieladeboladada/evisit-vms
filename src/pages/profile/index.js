import "./index.css";
import { Input } from "../../components/Input";
import ProfileImage from "../../assets/images/profileImageBig.png";
export const ProfilePage = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "30px",
        }}
      >
        <button
          style={{
            boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25",
            background: "linear-gradient(135deg, #CE9FFC 0%, #7367F0 100%",
          }}
        >
          Information
        </button>
        <button
          style={{
            backgroundColor: "white",
            color: "black",
            boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25",
          }}
        >
          Change Password
        </button>
      </div>
      <div
        className="container-div"
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            color: "black",
            display: "flex",
            alignItems: "center",
            gap: "10rem",
            marginBottom: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "30px",
              fontWeight: "500",
            }}
          >
            Information
          </p>
          <img src={ProfileImage} alt="profile" />
        </div>
        <form className="dashboard-input-container">
          <div className="inputs">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </div>
          <div className="inputs">
            <Input placeholder="Email" type="email" />
            <Input placeholder="Contact Number" type="email" />
          </div>
          <div className="inputs">
            <Input placeholder="Street Address" />
            <Input placeholder="Country" />
          </div>
          <div className="inputs">
            <Input placeholder="State" />
            <Input placeholder="City" />
          </div>
          <div className="inputs">
            <Input placeholder="Postal Code" />
          </div>
          <div
            style={{
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <button className="button-green">Save</button>
          </div>
        </form>
      </div>
    </section>
  );
};
