import { fcsw, flexCenter } from './../../enums/mixins';
import styled, { css } from "styled-components";
import colors from 'shared/src/enums/colors';

interface ICouponWrapper {
    added: boolean
};
export const COUPON_ITEM_WRAPPER = styled.div<ICouponWrapper>`
    display: grid;
    grid-template-columns: 30px 1fr 90px 30px;
    height: 50px;
    border-bottom: 1px solid rgba(171,179,192,.3);
    padding: 5px;
    ${props => props.added && css`
        background-color: ${colors.explosiveColor};
        & *{
            color:  ${colors.overDarkText} !important;
        }
    `};
`;
COUPON_ITEM_WRAPPER.displayName = "COUPON_ITEM_WRAPPER";

interface IMBC{
    mbc: number
};
export const MBC = styled.span <IMBC>`
    display: inline-block;
    width: 12px;
    height: 14px;
    font-size: 9px;
    line-height: 14px;
    text-align: center;
    background-color: ${props => props.mbc === 1 ? "#d90000" : props.mbc === 2 ? "#f17600" : "#327e00"};
    align-self: flex-end;
    color: ${props => (props.theme.overDarkText || colors.overDarkText) };
`;
MBC.displayName = "MBC";

export const INFO = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .title{
        ${fcsw({ c:"#2c343e",s: "11px", w: "bold" })};
        line-height: 16px;
        margin-bottom: 2px;
    }
    .odd-name{
        color: #428cca;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
    }
    .event-name{
        font-size: 11px;
        line-height: 12px;
        text-overflow: ellipsis;
        white-space: pre;
        overflow: hidden;
        color: ${props => (props.theme.textColor || colors.textColor) };
    }
`;
INFO.displayName = "INFO";

export const ODD = styled.div`
    ${flexCenter};
    color: #428cca;
    font-size: 16px;
    font-weight: bold;
    line-height: 22px;
`;
ODD.displayName = "ODD";

export const CROSS = styled.div`
    background-image: url(//cdn.tuttur.com/tfs-icons/tfs/betslipRowClose.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    cursor: pointer;
    width: 14px;
    height: 14px;
    margin: auto;
`;
CROSS.displayName = "CROSS";