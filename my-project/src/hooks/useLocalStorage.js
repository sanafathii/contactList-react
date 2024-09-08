//

export const useLocalStorage = (key) => {
  const set = (key, value) => {
    let data;
    if (typeof value === "object") {
      data = JSON.stringify(value);
    }
    localStorage.setItem(key, data);
  };
  const get = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return localStorage.getItem(key);
    }
  };
  const remove = (key) => {
    return localStorage.removeItem(key);
  };
  return [get(key), { set, get, remove }];
};
