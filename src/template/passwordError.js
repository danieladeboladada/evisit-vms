import { Modal } from "reactstrap";
import { ReactComponent as Error } from "../assets/images/error.svg";
export const PasswordErrorModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal
      size="lg"
      className="medium-modal"
      centered
      isOpen={isOpen}
      toggle={() => {
        setIsOpen(false);
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <h2>Incorrect email or password</h2>
          <p
            style={{
              fontWeight: "500",
            }}
          >
            {" "}
            Try again in 20 minutes
          </p>
        </div>
        <Error />
        <button
          style={{
            backgroundColor: "#F24848",
          }}
        >
          Try again
        </button>
      </div>
    </Modal>
  );
};
