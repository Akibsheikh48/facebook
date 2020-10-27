import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import { Link } from "react-router-dom";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../stateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header_left">
        <img src="" alt="" />
        <div className="header_input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>

      <div className="header_middle">
        <div className="header_options header__options--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_options">
          <FlagIcon fontSize="large" />
        </div>
        <Link
          to={{ pathname: "https://netflix-clone-akib.firebaseapp.com/" }}
          target="_blank"
        >
          <div className="header_options">
            <SubscriptionsOutlinedIcon fontSize="large" />
          </div>
        </Link>

        <Link
          to={{ pathname: "https://clone-akib.web.app/" }}
          target="_blank"
        >
        <div className="header_options">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        </Link>
        <div className="header_options">
          <SupervisedUserCircleOutlinedIcon fontSize="large" />
        </div>
      </div>

      <div className="header_right">
        <div className="header_info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>

        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>

        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
