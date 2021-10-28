import "./index.css";
import { NumberCard } from "../../components/NumberCard";
import imageOne from "../../assets/images/image-one.png";
import imageTwo from "../../assets/images/image-two.png";
import imageThree from "../../assets/images/image-three.png";
import { ReactComponent as Edit } from "../../assets/images/edit.svg";
import { ReactComponent as Delete } from "../../assets/images/delete.svg";
export const AmenitiesPage = () => {
  const visitors = [
    {
      number: "5,824,213",
      title: "Approved visitors",
      color: "#7879F1",
      background: "linear-gradient(135deg, #81FBB8 0%, #28C76F 100%)",
    },
    {
      number: "5,824",
      title: "Disapproved visitors",
      color: "#EF5DA8",
      background: "linear-gradient(135deg, #5EFCE8 0%, #736EFE 100%)",
    },
    {
      number: "824",
      title: "Ongoing visitors",
      color: "#32CCBC",
      background: "linear-gradient(135deg, #CE9FFC 0%, #7367F0 100%)",
    },
  ];
  const tableData = [
    {
      amenity: "Table tennis court",
      description:
        "Lorem ipsum dolor sit amet, consectetur Faucibus erat massa amet, tristique. ",
      capacity: "40",
      status: "Closed",
      action: "xo",
    },
    {
      amenity: "Table tennis court",
      description:
        "Lorem ipsum dolor sit amet, consectetur Faucibus erat massa amet, tristique. ",
      capacity: "40",
      status: "Closed",
      action: "xo",
    },
    {
      amenity: "Table tennis court",
      description:
        "Lorem ipsum dolor sit amet, consectetur Faucibus erat massa amet, tristique. ",
      capacity: "40",
      status: "Closed",
      action: "xo",
    },
    {
      amenity: "Table tennis court",
      description:
        "Lorem ipsum dolor sit amet, consectetur Faucibus erat massa amet, tristique. ",
      capacity: "40",
      status: "Closed",
      action: "xo",
    },
  ];
  return (
    <section>
      <div className="number-card-container container-div">
        {visitors.map((visitor, index) => (
          <NumberCard
            key={index}
            number={visitor.number}
            title={visitor.title}
            color={visitor.color}
            background={visitor.background}
          />
        ))}
      </div>

      <div>
        <img src={imageOne} alt="one" />
        <img src={imageTwo} alt="two" />
        <img src={imageThree} alt="three" />
      </div>
      <div
        className="button"
        style={{
          width: "fit-content",
          right: 0,
          float: "right",
          margin: "0.5rem 0",
        }}
      >
        View all
      </div>
      <table>
        <tr>
          <th>S/N</th>
          <th>Amenity</th>
          <th>Description</th>
          <th>Capacity</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        {tableData.map((data, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{data.amenity}</td>
            <td>{data.description}</td>
            <td>{data.capacity}</td>
            <td>{data.status}</td>
            <td
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                border: "none",
              }}
            >
              <Edit />
              <Delete />
            </td>
          </tr>
        ))}
      </table>
    </section>
  );
};
