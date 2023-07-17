import React from "react";
import styles from "./Container.module.scss";
interface IContainer {
  children: React.ReactElement | JSX.Element;
}
export const Container = ({ children }: IContainer) => {
  return <div className={styles.container}>{children}</div>;
};
