import { IResultMarket } from "./IResultMarket";

export interface IEvent{
    eventName: string,
    mbc: number,
    matchResultOdds: IResultMarket
}