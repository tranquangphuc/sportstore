export const CommonReducer = (...reducers) => (storeData, action) => {
  for (let index = 0; index < reducers.length; index++) {
    const reducer = reducers[index];
    let neoStore = reducer(storeData, action);
    if (neoStore !== storeData) {
      return neoStore;
    }
  }
  return storeData;
};
