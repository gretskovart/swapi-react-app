import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { swapi } from 'store/swapi';
import { AppDispatchType, RootStateType } from 'store';
import { getPeopleThunk } from 'store/swapi/thunks';
import {
  getParams,
  getCharacterDetailPath,
  getCharacterIdFromUrl,
} from 'shared/utils';
import { DEFAULT_PAGE } from 'shared/constants';

const PEOPLE_SEARCH = 'peopleSearch';
const CPEOPLE_CURRENT_PAGE = 'peopleCurrentPage';

export const useMain = () => {
  const dispatch = useDispatch<AppDispatchType>();
  const navigate = useNavigate();

  const sessionCurrentPage = sessionStorage.getItem(CPEOPLE_CURRENT_PAGE);
  const sessionSearchText = sessionStorage.getItem(PEOPLE_SEARCH);

  const [currentPage, setCurrentPage] = useState<number>(() =>
    sessionCurrentPage ? +sessionCurrentPage : DEFAULT_PAGE,
  );

  const [searchText, setSearchText] = useState<string>(
    () => sessionSearchText || '',
  );

  const selector = useSelector((state: RootStateType) => state);
  const getPeopleState = selector.swapi.getPeople;

  const onPaginationChangeHandler = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem(CPEOPLE_CURRENT_PAGE, page.toString());
  };

  const onSearchHandler = (value: string) => {
    setSearchText(value);
    setCurrentPage(DEFAULT_PAGE);

    sessionStorage.setItem(PEOPLE_SEARCH, value);
    sessionStorage.setItem(CPEOPLE_CURRENT_PAGE, DEFAULT_PAGE.toString());
  };

  const onCardClickHandler = (url: string) => {
    const id = getCharacterIdFromUrl(url);

    if (id) {
      const characterPath = getCharacterDetailPath(id);
      navigate(characterPath);
    }
  };

  useEffect(() => {
    const actualCurrentPage = sessionCurrentPage
      ? +sessionCurrentPage
      : currentPage;

    const actualSearchText = sessionSearchText || searchText;
    const params = getParams(actualCurrentPage, actualSearchText);

    dispatch(getPeopleThunk(params));
  }, [
    dispatch,
    currentPage,
    searchText,
    sessionCurrentPage,
    sessionSearchText,
  ]);

  useEffect(
    () => () => {
      dispatch(swapi.getPeople.action.reset());
    },
    [dispatch],
  );

  return {
    getPeopleState,
    onPaginationChangeHandler,
    currentPage,
    onSearchHandler,
    searchText,
    onCardClickHandler,
  };
};
