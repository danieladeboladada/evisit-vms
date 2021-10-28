import "./index.css";
import { useState } from "react";
import { ProfileImage } from "../../assets/images";
export const HistoryPage = () => {
  const [details, setDetails] = useState(false);
  const tableData = [
    {
      name: "Daniel Dada",
      purpose: "Training",
      status: "Declined",
      visitingDate: "10-03-21,4:00 PM",
    },
    {
      name: "Daniel Dada",
      purpose: "Training",
      status: "Accepted",
      visitingDate: "10-03-21,4:00 PM",
    },
    {
      name: "Daniel Dada",
      purpose: "Training",
      status: "Declined",
      visitingDate: "10-03-21,4:00 PM",
    },
  ];
  return (
    <section className="history section">
      {!details ? (
        <table className="history-table">
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Purpose</th>
            <th>Status</th>
            <th>Visiting date</th>
            <th>Action</th>
          </tr>
          {tableData.map((data, index) => (
            <tr>
              <td>{index + 1}</td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img src={ProfileImage} alt="profile" />
                {data.name}
              </td>
              <td>{data.purpose}</td>
              <td
                style={{
                  color:
                    data.status.toLocaleLowerCase() === "declined"
                      ? "red"
                      : "green",
                }}
              >
                {data.status}
              </td>
              <td>{data.visitingDate}</td>
              <td
                onClick={() => setDetails(true)}
                style={{
                  cursor: "pointer",
                }}
              >
                View more
              </td>
            </tr>
          ))}
        </table>
      ) : (
        <>
          <p
            onClick={() => setDetails(false)}
            style={{
              color: "#7367F0",
              cursor: "pointer",
            }}
          >
            View more details
          </p>
          <div className="container-div details">
            <div>
              <p>Name</p>
              <p>Dada Daniel</p>
            </div>
            <div>
              <p>Email</p>
              <p>Dada@gmail.com</p>
            </div>
            <div>
              <p>Phone Number</p>
              <p>+1900000000</p>
            </div>
            <div>
              <p>Purpose</p>
              <p>Training</p>
            </div>
            <div>
              <p>Status</p>
              <p className="light">Approved</p>
            </div>
            <div>
              <p>Request Date</p>
              <p className="light">10-03-21,4:00 PM</p>
            </div>
            <div>
              <p>Visiting Date</p>
              <p className="light">10-03-21,4:00 PM</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
