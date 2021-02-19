import styles from "./layout.module.scss";

const layout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default layout;
