import { useContext, useState } from "react";
import { Theme } from "shared/src/types/Theme";
import { MainContext } from "src/context/mainContext";

export function useController(){
    const {theme, changeTheme } = useContext(MainContext);
    const [couponVisible, setcouponVisible] = useState(false);

    const onChangeTheme = (theme:Theme) => {
        changeTheme(theme);
    }

    const onClickCouponButton = () => {
        setcouponVisible(!couponVisible);
    }

    return {
        events:{
            onChangeTheme,
            onClickCouponButton
        },
        data:{
            theme, couponVisible
        }
    }
}