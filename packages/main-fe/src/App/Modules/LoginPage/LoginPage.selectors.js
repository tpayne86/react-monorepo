import { createSelector } from 'reselect';

export const userBaseSelector = (store) => store.user.get('profile');
export const isLoggedBaseSelector = (store) => store.user.get('loggedIn');

export const userLoadingSelector = createSelector(
  userBaseSelector,
  (user) => user.loading,
);
export const userFailureSelector = createSelector(
  userBaseSelector,
  (user) => user.error,
);

export const isLoggedInSelector = createSelector(
  isLoggedBaseSelector,
  (loggedIn) => loggedIn,
);
