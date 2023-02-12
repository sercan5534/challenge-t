import { getItemFromLocalStorage, setItemToLocalStorage } from '../utils/index';
import { ISelectedOutcome } from 'shared/src/types/ISelectedOutcome';
import { Theme } from 'shared/src/types/Theme';
import { ThemeProvider } from 'styled-components';
import {themes } from "./themes";
import { createContext, useState, FC, PropsWithChildren } from "react";

const COUPON_KEY = "coupon";

interface IMainContext {
    coupon: Array<ISelectedOutcome> | null,
    theme: string,
    changeTheme: (theme: Theme) => void,
    updateCoupon: (coupon: ISelectedOutcome[]) => void,
    clearCoupon: () => void,
    addItemToCoupon: (item: ISelectedOutcome) => void

}

const MainContext = createContext<IMainContext>({
    coupon: [],
    theme: "light",
    changeTheme: (theme: Theme) => {},
    clearCoupon: () => {},
    updateCoupon: (coupon: ISelectedOutcome[]) => {},
    addItemToCoupon: (item: ISelectedOutcome) => {}
});

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const [coupon, setCoupon] = useState<Array<ISelectedOutcome> | null>(getItemFromLocalStorage(COUPON_KEY));
    const selectedTheme = themes[theme];
    const changeTheme = (theme: Theme) => {
        setTheme(theme);
    }

    const updateCoupon = (coupon: Array<ISelectedOutcome>) => {
        setCoupon(coupon);
        setItemToLocalStorage(COUPON_KEY, JSON.stringify(coupon));
    }

    const addItemToCoupon = (item: ISelectedOutcome) => {
        if(coupon && coupon.length > 0){
            let newCoupon: Array<ISelectedOutcome> = [...coupon];
            let existItem = coupon.find(s => s?.eventName === item.eventName);
            //update Item
            if(existItem){
                newCoupon[newCoupon.indexOf(existItem)] = item;
            }
            else{
                newCoupon.push(item);
            }
            updateCoupon(newCoupon)
        }
        else{
            updateCoupon([item]);
        }
    }

    const clearCoupon = () =>{
        setCoupon([]);
        setItemToLocalStorage(COUPON_KEY, []);
    }

    return (<MainContext.Provider value={{ theme, coupon, changeTheme, updateCoupon, addItemToCoupon, clearCoupon }}>
        <ThemeProvider theme={selectedTheme}>
            {children}
        </ThemeProvider>
    </MainContext.Provider>)
}

export { MainProvider, MainContext };