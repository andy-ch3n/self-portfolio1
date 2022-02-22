import {
  FaLinkedin,
  FaGithub,
  FaInbox,
  FaUserCircle,
  FaSchool,
  FaPersonBooth,
  FaProjectDiagram,
  FaFile,
} from "react-icons/fa";
import React from 'react'
import "./Assets/App.css";
import Resume from "./Assets/andy_resume.pdf"

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16  flex-col bg-gray-900 text-white shadow-lg z-40 hidden md:block">
      <div className="mx-auto">
      <a href="#zero">
        <SideBarIcon icon={<FaUserCircle size="32" />} />
        </a>
        <div className="border-b-4 mb-2"></div>
        <div className="mx-auto md:ml-2">Profile</div>
        <a href="#first">
        <SideBarIcon1 icon={<FaPersonBooth size="32" />} />
        </a>
        <a href="#third">
        <SideBarIcon5 icon={<FaSchool size="32" />} />
        </a>
        <a href="#second">
        <SideBarIcon4 icon={<FaProjectDiagram size="32" />} />
        </a>
        <div className="border-b-4 mb-2"></div>
        <div className="mx-auto ml-0.5 md:ml-2">Socials</div>
        <a rel="noreferrer" href="https://www.linkedin.com/in/andych3n/" target="_blank">
          <SideBarIcon6 icon={<FaLinkedin size="32" />} />
        </a>
        <a rel="noreferrer" href="https://github.com/andy-ch3n" target="_blank">
          <SideBarIcon7 icon={<FaGithub size="32" />} />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=adch3n@email.com"
          rel="noreferrer"
          target="_blank"
        >
          <SideBarIcon8 icon={<FaInbox size="32" />} />
        </a>
        <a href={Resume} download="andy_resume.pdf">
          <SideBarIcon2 icon={<FaFile size="32" />} />
          </a>
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = "Profile" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const SideBarIcon1 = ({ icon, text = "About Me" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const SideBarIcon2 = ({ icon, text = "Click to download Resume" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);


const SideBarIcon4 = ({ icon, text = "Projects" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const SideBarIcon5 = ({ icon, text = "Education" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const SideBarIcon6 = ({ icon, text = "LinkedIn" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

const SideBarIcon7 = ({ icon, text = "Github" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const SideBarIcon8 = ({ icon, text = "Email" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
