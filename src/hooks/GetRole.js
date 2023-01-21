export const useLocalStorage = (key) => {
    const setuseLocalStorage = (data) =>
      localStorage.setItem(key, JSON.stringify(data));
  
    const getLocalStorage = JSON.parse(localStorage.getItem(key));
  
    const removelocalStorage = () => localStorage.removeItem(key);
  
    return { setuseLocalStorage, getLocalStorage, removelocalStorage };
  };
  