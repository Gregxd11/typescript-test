import React from 'react';
import styles from './Navigation.module.css';

interface defProps {}

const navigation = (props: defProps) => {
  return (
    <header className={styles.toolbar}>
      <div>Navigation items</div>
      <div>Logo</div>
      <div>Login</div>
    </header>
  );
};

export default navigation;
