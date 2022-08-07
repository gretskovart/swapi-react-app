import { Spin } from 'antd';

import styles from './customizeSpiner.module.scss';

export const CustomizeSpiner = () => {
  return (
    <div className={styles.wrapper}>
      <Spin size="large" />
    </div>
  );
};
