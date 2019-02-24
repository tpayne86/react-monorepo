const VALID_DATA_TYPES = ['object', 'boolean', 'number'];

const copyValue = (value) => {
  let newValue;
  if (Array.isArray(value)) newValue = [...value];
  else if (typeof value === 'object') newValue = { ...value };
  else newValue = value;
  return newValue;
};

const error = (errorStr) => {
  throw new Error(errorStr);
};

const isValidDataType = (value) =>
  value || VALID_DATA_TYPES.includes(typeof value);

const createImmutableObject = (ref, obj) =>
  Object.freeze(Object.assign(Object.create(Object.getPrototypeOf(ref)), obj));

function IObject(jsObj) {
  Object.keys(jsObj).forEach((key) => {
    this[key] = jsObj[key];
  });
}
IObject.prototype.set = function set(key, value) {
  const newValue = copyValue(value);
  if (isValidDataType(this[key])) {
    return createImmutableObject(this, {
      ...this,
      [key]: newValue,
    });
  }
  return error(`invalide key ${key} in object`);
};

IObject.prototype.setIn = function set(nested, value) {
  const newValue = copyValue(value);
  if (!Array.isArray(nested)) {
    return error('setIn requires array of strings as first argument');
  }
  if (isValidDataType(this[nested[0]])) {
    if (isValidDataType(this[nested[0]][nested[1]])) {
      return createImmutableObject(this, {
        ...this,
        [nested[0]]: {
          ...this[nested[0]],
          [nested[1]]: newValue,
        },
      });
    }
  }
  return error(`invalid properties maybe ${nested.join(',')}`);
};

IObject.prototype.get = function get(key) {
  return this[key];
};

export default function NObject(jsObj) {
  const store = new IObject(jsObj);
  return store;
}
