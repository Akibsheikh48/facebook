import React from "react";
import './Sidebar.css'
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";

import { useStateValue } from "../stateProvider";
import { Link } from "react-router-dom";
function Sidebar() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <Link
          to={{ pathname: "https://covid-tracker-b0982.web.app/" }}
          target="_blank"
        >
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      </Link>
      <SidebarRow Icon={EmojiFlagsIcon} title="pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <Link
          to={{ pathname: "https://clone-akib.web.app/" }}
          target="_blank"
        >
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      </Link>


      <Link
          to={{ pathname: "https://netflix-clone-akib.firebaseapp.com/" }}
          target="_blank"
        >
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      </Link>
      
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
