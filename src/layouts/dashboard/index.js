import "./index.css";
import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { useLocation, Link } from "react-router-dom";
import { Modal } from "reactstrap";
import {
  Dashboard,
  Visitors,
  ViewRequest,
  Logout,
  History,
  Members,
  Profile,
  Amenities,
  DashboardActive,
  SearchIcon,
  ProfileImage,
  Notification,
  Message,
  DashboardName,
  VisitorsActive,
  VisitorsName,
  ViewRequestActive,
  ViewRequestName,
  HistoryActive,
  HistoryName,
  MembersActive,
  MembersName,
  ProfileActive,
  ProfileName,
  AmenitiesActive,
  AmenitiesName,
} from "../../assets/images";
export const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigations = [
    {
      name: "Dashboard",
      logo: Dashboard,
      path: "/dashboard",
      activeLogo: DashboardActive,
      activeName: DashboardName,
    },
    {
      name: "Members",
      logo: Members,
      activeLogo: MembersActive,
      activeName: MembersName,
      path: "/dashboard/members",
    },
    {
      name: "Amenities",
      logo: Amenities,
      activeName: AmenitiesName,
      activeLogo: AmenitiesActive,
      path: "/dashboard/amenities",
    },
    {
      name: "View requests",
      logo: ViewRequest,
      activeName: ViewRequestName,
      activeLogo: ViewRequestActive,
      path: "/dashboard/view-request",
    },
    {
      name: "Profile",
      logo: Profile,
      activeLogo: ProfileActive,
      activeName: ProfileName,
      path: "/dashboard/profile",
    },
    {
      name: "Visitors",
      logo: Visitors,
      activeName: VisitorsName,
      activeLogo: VisitorsActive,
      path: "/dashboard/visitors",
    },
    {
      name: "History",
      logo: History,
      activeName: HistoryName,
      activeLogo: HistoryActive,
      path: "/dashboard/history",
    },
    // {
    //   name: "Logout",
    //   logo: Logout,
    //   path: "",
    // },
  ];
  return (
    <div className="dashboard">
      <div className="dashboard-navigation">
        <Link className="logo" to="/">
          <Logo />
          <p>Visit</p>
        </Link>
        <nav className="dashboard-navigation">
          {navigations.map(
            (
              {
                name,
                logo: Logo,
                path,
                activeLogo: ActiveLogo,
                activeName: ActiveName,
              },
              index
            ) => (
              <Link to={path}>
                <li key={index}>
                  {location.pathname === path ? (
                    <>
                      <ActiveLogo />
                      <ActiveName />
                    </>
                  ) : (
                    <>
                      <Logo />
                      {name}
                    </>
                  )}
                </li>
              </Link>
            )
          )}
          <li onClick={() => setIsOpen(true)}>
            <Logout /> Logout
          </li>
        </nav>
      </div>
      <div className="dashboard-body">
        <div className="dashboard-header">
          <div>
            <DashboardActive />
            <DashboardName />
          </div>
          <div className="input-container">
            <input placeholder="Search" />
            <SearchIcon className="search-icon" />
          </div>
          <div>
            <Message />
            <Notification />
            <img src={ProfileImage} alt="profile" />
            <p>Daniel Dada</p>
          </div>
        </div>
        <>{children}</>
      </div>
      <Modal
        isOpen={isOpen}
        className="medium-modal"
        centered
        toggle={() => {
          setIsOpen(false);
        }}
      >
        <div
          style={{
            marginTop: "3rem",
          }}
        >
          <h2>Are you sure you want to Logout?</h2>
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
    </div>
  );
};
