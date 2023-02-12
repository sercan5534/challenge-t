/**
 * Sets an item to localstorage
 * @param key localstroage key
 * @param value localstorage value
 */
export const setItemToLocalStorage = (key:string, value:any) => {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.error(e);
    }
};

/**
 * Reads an item from localstorage and parse it
 * @param key localstroage key
 */
export const getItemFromLocalStorage = (key:string) => {
    try {
        const val = localStorage.getItem(key);
        if(!val)
            return null;
        return JSON.parse(val);
    } catch (e) {
        return null;
    }
};

/**
 * Removes an item from localstorage
 * @param key localstroage key
 */
export const removeItemFromLocalStorage = (key:string) => {
    try {
        return localStorage.removeItem(key);
    } catch (e) {
        return null;
    }
};


/**
 * Removes decimal number from float without rounding
 * @param num 
 * @param fixed 
 * @returns 
 */
export const toFixed = (num:number, fixed:number) => {
    var re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)?.[0];
}