import { ISelectedOutcome } from './../../types/ISelectedOutcome';

type FlagType = 'up' | 'down' | undefined;

/* eslint-disable-next-line */
export interface OutcomeItemProps { 
    flag?: FlagType,
    selected?: boolean,
    event: ISelectedOutcome,
    onClick: (item: ISelectedOutcome)=>void
}