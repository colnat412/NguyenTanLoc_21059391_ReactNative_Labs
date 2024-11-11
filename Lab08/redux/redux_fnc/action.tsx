export const SELECT_PRODUCT = 'SELECT_PRODUCT';

export const selectProduct = (product:any) => ({
  type: SELECT_PRODUCT,
  payload: product,
});