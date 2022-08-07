import { Col, Row, Empty, Card, Pagination, Input } from 'antd';

import { StatusEnum } from 'shared/types';
import { CustomizeSpiner, CustomizePageHeader } from 'shared/components';
import { DEFAULT_PAGE_SIZE } from 'shared/constants';

import { useMain } from './useMain';

import styles from './main.module.scss';

const { Meta } = Card;
const { Search } = Input;

export const Main = () => {
  const {
    getPeopleState,
    onPaginationChangeHandler,
    currentPage,
    onSearchHandler,
    searchText,
    onCardClickHandler,
  } = useMain();

  if (getPeopleState.status === StatusEnum.Loading) {
    return <CustomizeSpiner />;
  }

  const peopleList = getPeopleState.data;
  const isPeopleListLoaded = !!peopleList?.results.length;

  return (
    <>
      <CustomizePageHeader title="All characters" />

      {(searchText || isPeopleListLoaded) && (
        <div className={styles.search}>
          <Search
            placeholder="Input character name"
            allowClear
            onSearch={onSearchHandler}
            defaultValue={searchText}
          />
        </div>
      )}

      {isPeopleListLoaded ? (
        <>
          <Row gutter={[20, 20]} className={styles.content}>
            {peopleList.results.map(({ name, url }) => (
              <Col key={name} xs={12} sm={8} lg={6} xl={4}>
                <Card hoverable onClick={() => onCardClickHandler(url)}>
                  <Meta title={name} />
                </Card>
              </Col>
            ))}
          </Row>

          <div className={styles.pagination}>
            <Pagination
              defaultCurrent={currentPage}
              defaultPageSize={DEFAULT_PAGE_SIZE}
              total={peopleList.count}
              showSizeChanger={false}
              onChange={onPaginationChangeHandler}
              hideOnSinglePage
              showLessItems
            />
          </div>
        </>
      ) : (
        <>
          <Empty />
        </>
      )}
    </>
  );
};
