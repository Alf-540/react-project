// src/components/Alert.jsx
// import clsx from 'clsx';

import css from './Alert.module.css';

export const Alert = ({ children }) => {
  return <p className={css.Alert}>{children}</p>;
};
