import { MainContext } from 'src/context/mainContext';
import { useContext } from 'react';
import { ISelectedOutcome } from "shared/src/types/ISelectedOutcome";
const OUTCOME_SORTING_ORDER = ["111", "115", "119", "19", "96"];

export function useController() {
    const { addItemToCoupon, coupon } = useContext(MainContext);
    const getEventParsedInfo = (eventName: string) => {
        try {
            return eventName.split("-");
        }
        catch (e) {
            console.error(e);
            return ["", ""];
        }
    }
    const getOutcomeParsedInfo = (outComeName: string) => {
        try {
            return outComeName.split(":");
        }
        catch (e) {
            console.error(e);
            return ["", ""];
        }
    }

    const onSelectOdd = (event: ISelectedOutcome) => {
        addItemToCoupon(event);
    }

    const getMarketName = (outcomeId: number) => {
        return {
            111: "MS 1",
            115: "MS X",
            119: "MS 2",
            19: "2.5 UST",
            96: "2.5 ALT",
        }[outcomeId];
    }

    const isSelected = (eventName: string, outcomeId: number) => {
        return coupon?.find(s => s.eventName === eventName && s.id === outcomeId);
    }

    const sortOutcomes = (a: string, b: string) => {
        let aPlace = OUTCOME_SORTING_ORDER.indexOf(a),
            bPlace = OUTCOME_SORTING_ORDER.indexOf(b);
        return aPlace < 0 ? (bPlace < 0 ? -1 : 1) : (bPlace < 0 ? -1 : (aPlace < bPlace ? -1 : 1));
    }

    return {
        events: {
            getEventParsedInfo, getOutcomeParsedInfo, onSelectOdd, getMarketName, isSelected, sortOutcomes
        },
        data: {

        }
    }
}