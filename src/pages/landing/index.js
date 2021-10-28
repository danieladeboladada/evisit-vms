import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Input, Label, TabPane, TabContent } from "reactstrap";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Arrow } from "../../assets/images/arrow.svg";
import featuresImg from "../../assets/images/features.png";
import "bootstrap/dist/css/bootstrap.min.css";

export const LandingPage = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const features = [
    "Analytics",
    "Reports",
    "Secure",
    "Fast & Reliable",
    "Notification",
    "Intrigation",
  ];
  return (
    <>
      <header>
        <nav className="landing-navigation">
          <Logo />
          <ul>
            <li onClick={() => setOpen(true)}>Book an appointment</li>
            <li>FAQ</li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <ul>
            <Link to="/auth/login">
              <li className="login">Login</li>
            </Link>
            <Link to="/auth/create-account">
              <li>Sign Up</li>
            </Link>
          </ul>
        </nav>
        <main>
          <h1>Effective visitor management system</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            erat massa amet, tristique. Commodo sed massa, quis a, ut ultricies
            fringilla ultrices morbi. Sem sed turpis cursus laoreet cursus
            scelerisque nulla pellentesque. Odio tortor, venenatis, proin ut
            aliquet sociis. Etiam nunc montes, sed egestas nisl morbi integer.
            Nunc pellentesque dictum porta phasellus commodo enim. Lacus
            tincidunt cursus donec faucibus facilisis faucibus elementum. In
            platea bibendum at luctus. Ultricies imperdiet quam lacus volutpat
            lobortis risus interdum nibh viverra. Facilisis ornare enim
            scelerisque velit elementum. Tincidunt cras imperdiet ultrices
            condimentum sit et. Pellentesque felis vulputate id a pharetra
            mauris ultricies a. Malesuada eros, elit et ac. Convallis donec ac,
            a dis. Non id elit laoreet senectus eget etiam facilisis tortor.{" "}
          </p>
          <div
            style={{
              position: "relative",
              width: "fit-content",
            }}
          >
            <input placeholder="Enter your email here" />
            <button>Get started</button>
          </div>
        </main>
      </header>
      <section className="features">
        <h2>eVisit Features</h2>
        <div>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                <Arrow style={{}} />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <img src={featuresImg} alt="faetures image" />
        </div>
      </section>
      <footer>
        <div className="content">
          <div className="logo">
            <Logo />
            <p>VISIT</p>
          </div>
          <div>
            <p>info</p>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Product Updates</li>
            </ul>
          </div>
          <div>
            <p>get in touch</p>
            <ul>
              <li>About Us</li>
              <li>Support</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <p>subscribe to our newsletter</p>
            <input placeholder="Enter your email here" type="email" />
            <button>subscribe</button>
          </div>
        </div>
        <section
          style={{
            fontSize: "12px",
            color: "#FFFFFF",
            marginTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>Copyright &copy; 2021 Enisson Lemos | All right reserved</p>
          <p>Terms & Conditions</p>
        </section>
      </footer>
      <Modal
        isOpen={open}
        centered
        className={activeTab === 0 ? " big-modal-2 big-modal" : "big-modal"}
        size="lg"
        toggle={() => {
          setOpen(false);
          setActiveTab(0);
        }}
      >
        <TabContent activeTab={activeTab}>
          <TabPane tabId={0}>
            <div>
              <h2>Visitor’s request form</h2>
              <form>
                <div className="inputs">
                  <input placeholder="First Name" />
                  <input placeholder="Last Name" />
                </div>
                <div className="inputs">
                  <input placeholder="Email Address" />
                  <input placeholder="Phone Number" />
                </div>
                <div className="inputs">
                  {" "}
                  <input placeholder="Location" />
                </div>
                <div className="inputs">
                  <input placeholder="Building facilities to be use" />
                </div>

                <textarea placeholder="Purpose of visit"></textarea>
              </form>

              <button className="button-green" onClick={() => setActiveTab(1)}>
                Proceed
              </button>
            </div>
          </TabPane>
          <TabPane tabId={1}>
            <h2>COVID-19 Screening Form for Visitor’s</h2>
            <div>
              <div>
                <p>
                  1. Have you travelled outside of Canada in the last 14 days?{" "}
                  <Input type="radio" name="one" id="one" />
                  <Label for="one" check>
                    Yes
                  </Label>
                  <Input type="radio" name="one" id="one" />
                  <Label for="one" check>
                    No
                  </Label>
                </p>
                <p>
                  2. Has someone you are in close contact with tested positive
                  for COVID-19 in the last 14 days?{" "}
                  <span>
                    <Input type="radio" name="two" id="two" />
                    <Label for="two" check>
                      Yes
                    </Label>
                  </span>
                  <Input type="radio" name="two" id="no" />
                  <Label for="two" check>
                    No
                  </Label>
                </p>
                <p>
                  3. Are you in close contact with a person who is sick with new
                  respiratory symptoms or who recently traveled outside of
                  Canada?
                  <Input type="radio" name="three" id="three" />
                  <Label for="three" check>
                    Yes
                  </Label>
                  <Input type="radio" name="three" id="three" />
                  <Label for="three" check>
                    No
                  </Label>
                </p>
                <p>
                  4. Do you have a fever? (temperature ≥ 37.8 °C)
                  <Input type="radio" name="four" id="four" />
                  <Label for="four" check>
                    Yes
                  </Label>
                  <Input type="radio" name="four" id="four" />
                  <Label for="four" check>
                    No
                  </Label>
                </p>
                <p>
                  5. Do you have any of these symptoms? Select all that apply:
                </p>
                <div className="checkbox-div">
                  <div>
                    <span>
                      <Input type="checkbox" name="four" id="four" />
                      <Label for="four" check>
                        Chills
                      </Label>
                    </span>
                    <span>
                      <Input type="checkbox" name="four" id="four" />
                      <Label for="four" check>
                        Headache that is unusual or long-lasting
                      </Label>
                    </span>
                  </div>
                  <div>
                    <span>
                      <Input type="checkbox" name="four" id="four" />
                      <Label for="four" check>
                        Barking cough (croup)
                      </Label>
                    </span>
                    <span>
                      <Input type="checkbox" name="four" id="four" />
                      <Label for="four" check>
                        Nausea/vomiting/diarrhea/abdominal pain
                      </Label>
                    </span>
                  </div>
                  <div>
                    <span>
                      <Input type="checkbox" name="four" id="four" />
                      <Label for="four" check>
                        Shortness of breath/difficulty
                      </Label>
                    </span>
                    <span>
                      <Input type="checkbox" name="four" id="four" />
                      <Label for="four" check>
                        Muscle aches
                      </Label>
                    </span>
                  </div>
                  <div>
                    <span>
                      <Input type="checkbox" name="four" id="four" />
                      <Label for="four" check>
                        Loss of taste or smell
                      </Label>
                    </span>
                    <span>
                      <Input type="checkbox" name="four" id="four" />
                      <Label for="four" check>
                        Unexplained fatigue/malaise
                      </Label>
                    </span>
                  </div>
                  <div>
                    <span>
                      <Input type="checkbox" name="four" id="four" />
                      <Label for="four" check>
                        Pink eye (conjunctivitis)
                      </Label>
                    </span>
                    <span>
                      <Input type="checkbox" name="four" id="four" />
                      <Label for="four" check>
                        Falling more than usual
                      </Label>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <h4>If you have answered:</h4>
            <div>
              <Input type="checkbox" name="four" id="four" />
              <Label for="four" check>
                NO to all questions – PASS. You may enter the building and
                proceed as scheduled.
              </Label>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <Input type="checkbox" name="four" id="four" />
              <Label for="four" check>
                YES to any questions from #1 to #4 – FAIL. Put on a surgical
                mask, go home immediately and self-isolate. You may work from
                home if appropriate
              </Label>
            </div>
            <div>
              <Input type="checkbox" name="four" id="four" />
              <Label for="four" check>
                YES to #5 only – FAIL. Go to question #6.
              </Label>
            </div>
            <p>
              6. Are these symptoms typical for you (i.e. history of allergies,
              migraines, other known medical condition that usually causes these
              symptoms)?
            </p>
            <div>
              <Input type="checkbox" name="four" id="four" />
              <Label for="four" check>
                YES – Please self-isolate. Contact your doctor for a note
                confirming that symptoms are typical before returning to work.
              </Label>
            </div>
            <div>
              <Input type="checkbox" name="four" id="four" />
              <Label for="four" check>
                NO – Go home immediately and self-isolate. You may work from
                home if appropriate.
              </Label>
            </div>
            <button className="button-green">Proceed</button>
          </TabPane>
        </TabContent>
      </Modal>
    </>
  );
};
