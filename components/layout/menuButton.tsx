import styles from "styles/layout.module.scss";
import { callbackify } from "util";

const { menuButton, collapsed } = styles;

export const MenuButton = (props: {
  callback: Function;
  toggleMenu: boolean;
}) => {
  const { callback, toggleMenu } = props;

  return (
    <button
      className={`${menuButton} ${toggleMenu ? "" : collapsed}`}
      onClick={(e) => {
        e.currentTarget.blur();
        callback();
      }}
    >
      <div />
      <div />
      <div />
    </button>
  );
};
