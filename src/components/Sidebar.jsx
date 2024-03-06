/* eslint-disable react/prop-types */
import HomeIcon from "../assets/Home.svg";
import InboxIcon from "../assets/Inbox.svg";
import JobsIcon from "../assets/Jobs.svg";
import NetworkIcon from "../assets/Network.svg";
import ProjectsIcon from "../assets/Projects.svg";
import SearchIcon from "../assets/Search.svg";
import PeerlistLogo from "../assets/PeerlistFull.svg";
import Profile from "../assets/Profile.svg";
import Loom from "../assets/Loom.svg";

const SidebarLogo = () => {
  return (
    <img
      className="w-28 cursor-pointer pt-3 mb-[48px]"
      src={PeerlistLogo}
      alt="PeerlistLogo"
    />
  );
};

const SidebarItem = ({ icon, text, isScroll }) => {
  return (
    <li className="flex items-center cursor-pointer py-2">
      <img className="w-5 h-5 mr-2" src={icon} alt={`${text} icon`} />
      <p
        className={`font-normal leading-20 text-[14px] ${
          isScroll ? "font-semibold" : ""
        }`}
      >
        {text}
      </p>
    </li>
  );
};

const SidebarMenu = () => {
  const sidebarItems = [
    { icon: HomeIcon, text: "Scroll", isScroll: true },
    { icon: ProjectsIcon, text: "Projects" },
    { icon: InboxIcon, text: "Inbox" },
    { icon: JobsIcon, text: "Jobs" },
    { icon: SearchIcon, text: "Search" },
    { icon: NetworkIcon, text: "My Network" },
  ];

  return (
    <div className="flex flex-col mb-[24px]">
      <ul>
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            text={item.text}
            isScroll={item.isScroll}
          />
        ))}
      </ul>
    </div>
  );
};

const SidebarProfile = () => {
  return (
    <div>
      <div className="flex items-center cursor-pointer py-2">
        <img className="w-6 h-6 mr-2" src={Profile} alt={"Profile Picture"} />
        <p className={"font-normal leading-20 text-[14px]"}>Yogini</p>
      </div>
      <div className="flex items-center cursor-pointer py-2">
        <img className="w-6 h-6 mr-2" src={Loom} alt={"Loom Logo"} />
        <div className="flex flex-col">
          <p className={"font-normal leading-20 text-[14px]"}>Loom</p>
          <p className={"font-normal text-[10px] leading-14"}>
            Manage jobs, teams, & more →
          </p>
        </div>
      </div>
    </div>
  );
};

const SidebarFooter = () => {
  return (
    <div className="space-y-3 pb-3">
      <p
        className={
          "text-[10px] leading-14 text-gray-700 overflow-hidden font-medium"
        }
      >
        Blog • Help Center • Feedback • Code of Conduct • Privacy • T&C
      </p>
      <p
        className={
          "text-[10px] leading-14 text-gray-700 overflow-hidden font-normal"
        }
      >
        © 2023 Peerlist Inc.
      </p>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div
      style={{
        width: "212px",
        height: "100vh",
      }}
      className="flex flex-col justify-between fixed top-0"
    >
      <div>
        <SidebarLogo />
        <SidebarMenu />
        <SidebarProfile />
      </div>
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
