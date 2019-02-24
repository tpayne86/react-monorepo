export const homeUtil = {
  someAsyncOperation(params) {
    // Does some async stuff
    return params;
  },
  fnWhichIwantToTest(params) {
    // some simple calculations to get params
    const result = homeUtil.someAsyncOperation(params);
    return result;
  },
};

export default homeUtil;
