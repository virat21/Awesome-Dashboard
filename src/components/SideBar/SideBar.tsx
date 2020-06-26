import React, { useState } from "react";
import "./SideBar.css";
import SideBarItem from "./SideBarItem";
import { useHistory } from "react-router-dom";
import UserDetails, {
  userData,
} from "components/UserDetails/UserDetails";
import { useAuth0 } from "@auth0/auth0-react";

type sidebarItemType = {
  name: string;
  path: string;
  icon: string;
};

const sidebarItems: sidebarItemType[] = [
  {
    icon: "view_column",
    name: "All Palette",
    path: "/dashboard",
  },
  {
    icon: "palette",
    name: "Create Palette",
    path: "/dashboard/create",
  },
];

export const SideBar: React.FC = () => {
  let { user } = useAuth0();
  let history = useHistory();
  let [path, setPath] = useState(
    history.location.pathname
  );
  history.listen((location, action) => {
    if (location.pathname)
      setPath(location.pathname);
  });

  return (
    <div className="sideBar">
      <UserDetails
        userData={
          user 
        }
      />
      {sidebarItems.map((item) => {
        return (
          <SideBarItem
            key={item.path}
            name={item.name}
            icon={item.icon}
            onClick={() => {
              history.push(item.path);
              setPath(item.path);
            }}
            isActive={item.path === path}
          />
        );
      })}
    </div>
  );
};

export default SideBar;
