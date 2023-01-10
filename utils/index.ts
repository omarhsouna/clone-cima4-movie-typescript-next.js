export const getUpdateArray = (
  state: Array<any>,
  index: number,
  newValue: any
) => {
  const copyArray = [...state];
  copyArray[index] = newValue;
  return copyArray;
};
export const removeElementFromArrayState = (state: Array<any>, index: number) =>
  state.filter((_, currentItem) => currentItem !== index);
