import { FC } from 'react';
import { PageHeader, PageHeaderProps } from 'antd';
import cn from 'classnames';

import styles from './customizePageHeader.module.scss';

interface IProps extends PageHeaderProps {}

export const CustomizePageHeader: FC<IProps> = ({ ...props }) => {
  return (
    <PageHeader
      className={cn(styles.title, styles.title_noLeftSpace)}
      {...props}
    />
  );
};
