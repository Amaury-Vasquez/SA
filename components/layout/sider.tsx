import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import {
  MdOutlineSchedule,
  MdOutlineTask,
  MdOutlineSettings,
} from "react-icons/md";

import styles from "styles/layout.module.scss";

const { sider, nav, settings, hide } = styles;

export const Sider = (props: { isHidden: boolean }) => {
  const { isHidden } = props;
  const [hideSider, setHide] = useState(isHidden);

  const navItems = [
    { path: "/agenda", icon: <AiOutlineSchedule />, name: "agenda" },
    { path: "/schedule", icon: <MdOutlineSchedule />, name: "schedule" },
    { path: "/tasks", icon: <MdOutlineTask />, name: "tasks" },
  ];

  useEffect(() => {
    let render = true;

    if (render) {
      if (isHidden) {
        setTimeout(() => {
          setHide(true);
        }, 1000);
      }
    }
  }, [isHidden]);

  return (
    <div className={`${sider} ${isHidden ? hide : ""}`}>
      <nav className={nav}>
        {navItems.map((item, i) => (
          <Link href={item.path} key={item.name + i + "navLink"}>
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
      <Link className={settings} href="/settings">
        <MdOutlineSettings /> settings
      </Link>
    </div>
  );
};
