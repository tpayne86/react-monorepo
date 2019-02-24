function set(key, value) {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      resolve();
    } catch (e) {
      reject();
    }
  });
}
function get(key) {
  return new Promise((resolve, reject) => {
    try {
      const val = JSON.parse(localStorage.getItem(key));
      resolve(val);
    } catch (e) {
      reject();
    }
  });
}

export { get, set };
