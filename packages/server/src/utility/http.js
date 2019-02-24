import Boom from 'boom';

export const badRequest = (message, data = {}) =>
  Boom.badRequest(message, data).output;
export const notFound = (message, data = {}) =>
  Boom.notFound(message, data).output;
export const serverError = (message, data = {}) =>
  Boom.badImplementation(message, data).output;
export const forbidden = (message, data = {}) =>
  Boom.forbidden(message, data).output;
export const unAuthorized = (message, schema, data) =>
  Boom.unauthorized(message, schema, data).output;
