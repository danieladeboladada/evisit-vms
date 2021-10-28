import "./index.css";
import { useState } from "react";
import { Modal } from "reactstrap";
import { visitors } from "../../data/visitors";
import { NumberCard } from "../../components/NumberCard";
import { ReactComponent as Approve } from "../../assets/images/approve.svg";
import { ReactComponent as Decline } from "../../assets/images/decline.svg";
export const ViewRequestPage = () => {
  const [approveOpen, setApproveOpen] = useState(false);
  const [declineOpen, setDeclineOpen] = useState(false);
  const tableData = [
    {
      name: "Daniel Dada",
      purpose: "Training",
      status: "Pending",
      requestDate: "10-03-21  4:00 PM",
      visitingDate: "10-03-21  4:00 PM",
      action: "xo",
    },
    {
      name: "Daniel Dada",
      purpose: "Training",
      status: "Pending",
      requestDate: "10-03-21  4:00 PM",
      visitingDate: "10-03-21  4:00 PM",
      action: "xo",
    },
    {
      name: "Daniel Dada",
      purpose: "Training",
      status: "Pending",
      requestDate: "10-03-21  4:00 PM",
      visitingDate: "10-03-21  4:00 PM",
      action: "xo",
    },
    {
      name: "Daniel Dada",
      purpose: "Training",
      status: "Pending",
      requestDate: "10-03-21  4:00 PM",
      visitingDate: "10-03-21  4:00 PM",
      action: "xo",
    },
    {
      name: "Daniel Dada",
      purpose: "Training",
      status: "Pending",
      requestDate: "10-03-21  4:00 PM",
      visitingDate: "10-03-21  4:00 PM",
      action: "xo",
    },
    {
      name: "Daniel Dada",
      purpose: "Training",
      status: "Pending",
      requestDate: "10-03-21  4:00 PM",
      visitingDate: "10-03-21  4:00 PM",
      action: "xo",
    },
  ];
  return (
    <>
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
        <table>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Purpose</th>
            <th>Status</th>
            <th>Request Date</th>
            <th>Visiting date</th>
            <th>Approve/Decline</th>
          </tr>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.purpose}</td>
              <td>{data.status}</td>
              <td>{data.requestDate}</td>
              <td>{data.visitingDate}</td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  justifyContent: "center",
                }}
              >
                <Approve
                  className="rounded-icon"
                  onClick={() => setApproveOpen(true)}
                />
                <Decline
                  className="rounded-icon"
                  onClick={() => setDeclineOpen(true)}
                />
              </td>
            </tr>
          ))}
        </table>
      </section>
      <Modal
        isOpen={approveOpen}
        className="medium-modal"
        centered
        toggle={() => {
          setApproveOpen(false);
        }}
      >
        <div
          style={{
            marginTop: "3rem",
          }}
        >
          <h2>Are you sure you want to approve?</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "6rem",
            }}
          >
            <button className="button-green">Yes</button>
            <button className="button-white">No</button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={declineOpen}
        className="medium-modal"
        centered
        toggle={() => {
          setDeclineOpen(false);
        }}
      >
        <div
          style={{
            marginTop: "3rem",
          }}
        >
          <h2>Are you sure you want to decline?</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "6rem",
            }}
          >
            <button className="button-white">Yes</button>
            <button className="button-red">No</button>
          </div>
        </div>
      </Modal>
    </>
  );
};
