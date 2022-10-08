export const isInList = (list: any[], id: string) => {
  return list?.some((item) => {
    let itemId = item?.productId?._id ?? item?._id;
    return itemId === id;
  });
};
