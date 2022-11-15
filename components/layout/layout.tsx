import Link from "next/link";
import { useState } from "react";

import { Sider } from "./sider";
import { MenuButton } from "./menuButton";
import styles from "styles/layout.module.scss";

const { header, homeLink } = styles;

export const Layout = (props: { children: JSX.Element }) => {
  const { children } = props;
  const [toggleMenu, setToggle] = useState(false);

  return (
    <>
      <header className={header}>
        <MenuButton
          callback={() => setToggle(!toggleMenu)}
          toggleMenu={toggleMenu}
        />
        <Link className={homeLink} href={"/"}>
          Student Assistant
        </Link>
        <Sider isHidden={toggleMenu} />
      </header>
      {children}
    </>
  );
};
