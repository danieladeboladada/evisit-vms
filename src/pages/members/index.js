import "./index.css";
import { useState } from "react";
import { Card } from "../../components/Card";
import { ArrowDown } from "../../assets/images";
import { Modal } from "reactstrap";
export const MembersPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownName = ["List view", "Tile view"];
  const tableData = [
    {
      name: "Daniel Dada",
      email: "Training",
      phone: "+1900000000",
      role: "Designer",
      date: "10-03-21  4:00 PM",
      status: "Present",
    },
    {
      name: "Daniel Dada",
      email: "Training",
      phone: "+1900000000",
      role: "Designer",
      date: "10-03-21  4:00 PM",
      status: "Present",
    },
    {
      name: "Daniel Dada",
      email: "Training",
      phone: "+1900000000",
      role: "Designer",
      date: "10-03-21  4:00 PM",
      status: "Present",
    },
    {
      name: "Daniel Dada",
      email: "Training",
      phone: "+1900000000",
      role: "Designer",
      date: "10-03-21  4:00 PM",
      status: "Present",
    },
    {
      name: "Daniel Dada",
      email: "Training",
      phone: "+1900000000",
      role: "Designer",
      date: "10-03-21  4:00 PM",
      status: "Present",
    },
  ];
  return (
    <>
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: "500",
            fontSize: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div className="button">Add manually</div>
            <div
              className="button-green button"
              onClick={() => setIsOpen(true)}
            >
              {" "}
              Add by file
            </div>
          </div>
          <div className="button" onClick={() => setOpen((props) => !props)}>
            {list ? dropdownName[0] : dropdownName[1]}
            <ArrowDown />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0.5rem 0",
            fontWeight: "500",
            fontSize: "20px",
          }}
        >
          <p
            style={{
              color: "black",
            }}
          >
            Current Members
          </p>
          <div
            className="button"
            onClick={() => {
              setList((props) => !props);
              setOpen(false);
            }}
            style={{
              visibility: !open && "hidden",
            }}
          >
            {list ? dropdownName[1] : dropdownName[0]}
          </div>
        </div>
        {list ? (
          <table>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Role</th>
              <th>Date</th>
              <th>Status</th>
            </tr>

            {tableData.map((data, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.role}</td>
                <td>{data.date}</td>
                <td>{data.status}</td>
              </tr>
            ))}
          </table>
        ) : (
          <div className="members-container">
            {tableData.map((data, index) => (
              <Card data={data} key={index} />
            ))}
          </div>
        )}
      </section>
      <Modal
        className="medium-modal"
        isOpen={isOpen}
        centered
        toggle={() => setIsOpen(false)}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <h2>Upload a file</h2>
          <div className="file-upload">
            <input type="file" />
            <div>
              <p>Drag and drop files here or</p>
              <button>Browse</button>
            </div>
          </div>
          <button className="button-green">Submit</button>
        </div>
      </Modal>
    </>
  );
};
