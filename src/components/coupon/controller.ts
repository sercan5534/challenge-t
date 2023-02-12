import { toFixed } from './../../utils/index';
import { MainContext } from 'src/context/mainContext';
import { useContext, useMemo, useState } from 'react';
import { ISelectedOutcome } from 'shared/src/types/ISelectedOutcome';

export function useController(){
    const { coupon,clearCoupon, updateCoupon } = useContext(MainContext);
    const [stake, setStake] = useState(5);
    const totalOdds = coupon?.reduce((prev,cur) => {
        const odd = parseFloat(cur.odd);
        return prev * odd;
    } ,1)
    const visualOdd = totalOdds ? toFixed(totalOdds,2) : null;
    const possibleWin = totalOdds ? toFixed(totalOdds * stake,2): null;
    const minMbc = useMemo(() =>  {
        if(coupon){
            const couponMbc = coupon.map(i => i.mbc);
            return Math.max(...couponMbc);
        }
        return 0
    },[coupon])

    const onRemoveCouponItem = (item:ISelectedOutcome) => {
        if (coupon){
            const newCoupon = coupon.filter(i => (i.eventName !== item.eventName || i.id !== item.id));
            updateCoupon(newCoupon);
        } 
    }

    const onChangeStake = (stake:number) =>{
        setStake(stake);
    }
    const onBlurStake = () =>{
        checkStake();
    }

    const checkStake = () => {
        setStake(stake >= 5 ? stake : 5);
    }
    
    const placeBet = () => {
        if (!coupon || coupon.length === 0){
            alert("Lutfen kuponunuza bahis ekleyin");
        }
        else{
            if (stake < 5) {
                alert("5 TL altinda bahis yapamazsiniz, lutfen miktari guncelleyiniz.");
                return;
            }
            if (minMbc > coupon.length) {
                alert(`Kuponunuzdaki minimum bahis sayisi ${minMbc} olmalidir. Suan ${coupon.length }`);
                return;
            }
            alert(`Kuponunuz basarili sekilde oynanmistir, toplam oran ${visualOdd}, yatirilan miktar ${stake} TL ve muhtemel kazanc ${possibleWin} TL`);
            clearCoupon();
        }
        
        
    }

    return {
        data:{
            coupon, stake, totalOdds: visualOdd, possibleWin, minMbc
        },
        events:{
            clearCoupon, onRemoveCouponItem, onChangeStake, onBlurStake, placeBet
        }

    }
}