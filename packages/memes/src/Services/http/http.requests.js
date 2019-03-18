import { httpGet, httpPost } from '@healthifyme/utilities/lib/http/';
import {
  ALL_COACHES,
  ALL_LANGUAGES,
  APP_LOGIN,
  AUTOCOMPLETE_USERS,
  AVAILABLE_COACHES,
  BOOK_AUTOMATIC_CONSULTATION,
  BOOK_SLOT,
  BOOK_SLOT_PREFERRED_TIME,
  BOOKING_SOURCES,
  EXPERT_INFO,
  EXPERT_SLOTS,
  MEMES,
  USER_PROFILE,
  USER_PROFILE_EXTRAS,
}                            from '../../Constants/api/api.endpoints';

export const login = (user) => httpPost(APP_LOGIN, user);
export const autocompleteUser = (name) =>
  httpGet(`${AUTOCOMPLETE_USERS}?username=${name}`);
export const userProfile = () => httpGet(USER_PROFILE);
export const userProfileExtras = () => httpGet(USER_PROFILE_EXTRAS);
export const allCoaches = () => httpGet(ALL_COACHES);
export const activeCoaches = () => httpGet(AVAILABLE_COACHES);
export const expertInfo = (expertId) => httpGet(`${EXPERT_INFO}${expertId}`);
export const expertSlots = (expertId) =>
  httpGet(`${EXPERT_SLOTS}?expert_username=${expertId}`);
export const bookingSources = () => httpGet(BOOKING_SOURCES);
export const bookslot = (request, withSlot) =>
  withSlot === true
    ? httpPost(BOOK_SLOT, request)
    : httpPost(BOOK_SLOT_PREFERRED_TIME, request);
export const languagues = () => httpGet(ALL_LANGUAGES);
export const automaticConsultation = (request) =>
  httpPost(BOOK_AUTOMATIC_CONSULTATION, request);
export const memes = () => httpGet(MEMES);
