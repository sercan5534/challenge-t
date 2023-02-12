import { ISelectedOutcome } from './../../types/ISelectedOutcome';
/* eslint-disable-next-line */
export interface CouponItemProps {
    item: ISelectedOutcome,
    onRemove: (item: ISelectedOutcome)=> void
 }