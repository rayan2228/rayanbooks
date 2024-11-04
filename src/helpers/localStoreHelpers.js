const getFromLocalStorage = (name, defaultData) => {
    const saveData = localStorage.getItem(name);
    return saveData ? JSON.parse(saveData) : defaultData;
};

const saveLocalStorage = (name, wishlist) => {
    localStorage.setItem(name, JSON.stringify(wishlist));
};

export { getFromLocalStorage, saveLocalStorage }