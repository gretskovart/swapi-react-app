export const getCharacterDetailPath = (id: string | number) =>
  `/character/${id}`;

export const getCharacterIdFromUrl = (url: string) => {
  const reg = /(\d+)\//;
  const matcher = reg.exec(url);

  return matcher?.[1] || null;
};
