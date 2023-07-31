import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { TbPlaylist } from "react-icons/tb";
import { MdFavorite, MdRssFeed } from "react-icons/md";

import { FaPlay, FaSignOutAlt } from "react-icons/fa";
import apiClient from "../../spotify";
import { RiDashboardFill } from "react-icons/ri";
export default function Sidebar() {
  const [image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2022/08/17/15/46/labrador-7392840_1280.jpg"
  );

  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);

  return (
    <div className="sidebar-container">
      <img src={image} alt="profile" className="profile-img" />
      <div>
        <SidebarButton title="Library" to="/" icon={<TbPlaylist />} />
        <SidebarButton
          title="Category"
          to="/category"
          icon={<RiDashboardFill />}
        />
        <SidebarButton title="Trend" to="/trend" icon={<MdRssFeed />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Favorite" to="/favorite" icon={<MdFavorite />} />
      </div>
      <SidebarButton
        title="Sign Out"
        to=""
        icon={<FaSignOutAlt />}
        className="sign-out"
      />
    </div>
  );
}
