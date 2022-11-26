export const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case "ALL_PHOTOS":
      return [...state, ...action.payload];
    case "CATEGORY_CHANGE":
      return [];
    default:
      return state;
  }
};
