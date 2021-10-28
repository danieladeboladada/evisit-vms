import { useState } from "react";
import { Modal, TabContent, TabPane } from "reactstrap";
import { Input } from "../components/Input";

export const ForgotPasswordModal = ({ isOpen, setIsOpen }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Modal
      isOpen={isOpen}
      centered
      className="medium-modal"
      toggle={() => {
        setIsOpen(false);
        setActiveTab(0);
      }}
    >
      <TabContent activeTab={activeTab}>
        <TabPane tabId={0}>
          <div className="forget-password-modal">
            <h2>Forgot Password</h2>
            <p>
              Enter your email address and we’ll send you a link to reset your
              password.
            </p>
            <div
              style={{
                margin: "2rem 0",
              }}
            >
              <Input placeholder="Email" type="email" />
            </div>
            <button className="button-green" onClick={() => setActiveTab(1)}>
              Submit
            </button>
          </div>
        </TabPane>
        <TabPane tabId={1}>
          <div className="forget-password-modal">
            <h2>Reset Password</h2>

            <Input placeholder="New Password" type="password" />
            <Input placeholder="Confirm New Password" type="password" />

            <button
              style={{
                color: "black",
                backgroundColor: "#C4C4C4",
              }}
            >
              Submit
            </button>
          </div>
        </TabPane>
      </TabContent>
    </Modal>
  );
};
