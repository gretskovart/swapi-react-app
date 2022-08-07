import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { Layout } from 'antd';
import cn from 'classnames';

import { Main, Detail } from 'modules/pages';
import { Logo } from 'shared/components';
import { getCharacterDetailPath } from 'shared/utils';

import styles from './app.module.scss';

import 'shared/styles/reset.css';
import 'shared/styles/common.css';

const { Header, Footer, Content } = Layout;

export const App: FC = () => (
  <Layout className={cn(styles.layout, styles.layout_fullScreen)}>
    <Header className={cn(styles.header, styles.header_withSpace)}>
      <Logo className={styles.logo} />
    </Header>
    <Content className={styles.content}>
      {useRoutes([
        {
          path: '/',
          element: <Main />,
        },
        {
          path: getCharacterDetailPath(':id'),
          element: <Detail />,
        },
      ])}
    </Content>
    <Footer className={styles.footer}>built by Artem Gretskov 👨🏻‍💻</Footer>
  </Layout>
);
