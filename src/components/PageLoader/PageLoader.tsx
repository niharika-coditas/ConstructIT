import React from "react";
import { Spinner } from "components/Spinner/Spinner";
import { IPageLoader } from "./interfaces";
import styles from "./PageLoader.module.scss";

export const PageLoader: React.FC<IPageLoader> = ({ show }) => {
  if (!show) return null;
  return (
    <div className={styles.pageLoader}>
      <Spinner />
    </div>
  );
};
