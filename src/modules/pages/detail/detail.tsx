import { Empty, Descriptions } from 'antd';

import { CustomizeSpiner, CustomizePageHeader } from 'shared/components';
import { StatusEnum } from 'shared/types';
import { useDetail } from './useDetail';

const { Item } = Descriptions;

export const Detail = () => {
  const { onBackClickHandler, getPersonState } = useDetail();

  if (getPersonState.status === StatusEnum.Loading) {
    return <CustomizeSpiner />;
  }

  const personData = getPersonState.data;

  return (
    <>
      <CustomizePageHeader title="Character info" onBack={onBackClickHandler} />
      {personData ? (
        <Descriptions title={personData.name} column={1}>
          <Item label="Birth year">{personData.birth_year}</Item>
          <Item label="Eye color">{personData.eye_color}</Item>
          <Item label="Gender">{personData.gender}</Item>
          <Item label="Hair color">{personData.hair_color}</Item>
          <Item label="Height">{personData.height}</Item>
          <Item label="Mass">{personData.mass}</Item>
          <Item label="Skin color">{personData.skin_color}</Item>
        </Descriptions>
      ) : (
        <Empty />
      )}
    </>
  );
};
