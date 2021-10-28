import "./index.css";
import image from "../../assets/images/dude.png";
export const Card = ({ data }) => {
  return (
    <div className="member-card">
      <img src={image} alt="dude" />
      <div>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>Phone number: {data.phone}</p>
        <p>Role: {data.role}</p>
      </div>
    </div>
  );
};
