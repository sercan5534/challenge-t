import { flexCenter } from './../../../shared/src/enums/mixins';
import styled from "styled-components";

export const COUPON_WRAPPER = styled.div`
    position: absolute;
    height: 100%;
    width: 100vw;
    display: grid;
    grid-template-rows: 36px 1fr  210px;
    background-color: #efefef;
    overflow: hidden;
    border-left: 1px solid ${props => props.theme.lightBorder };
    @media(min-width: 1024px){
        position: relative;
        width: 100%;
    }
`;
COUPON_WRAPPER.displayName = "COUPON_WRAPPER";

export const TITLE = styled.div`
    padding: 0 5px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-size: 13px;
    color: ${props => props.theme.textColor };
    background-color: ${props => props.theme.lightBack};
    border-bottom: 1px solid ${props => props.theme.lightBorder };
    .count{
        display: flex;
        line-height: 20px;
        background-color: #0093ea;
        border-radius: 10px;
        color: #fff;
        font-weight: 700;
        justify-content: center;
        margin-right: 5px;
        text-align: center;
        width: 20px;
    }

`;
TITLE.displayName = "TITLE";


export const LIST = styled.div`
    overflow-y: auto;
`;
LIST.displayName = "LIST";

export const NO_ITEM = styled.div`
    ${flexCenter};
    padding: 10px;
    height: 90px;
    font-size: 14px;
    font-weight: 700;

`;
NO_ITEM.displayName = "NO_ITEM";

export const COUPON_FOOTER = styled.div`
    padding: 5px;
    background-color: ${props => props.theme.lightBack};
    border-top  : 1px solid ${props => props.theme.lightBorder };
`;
COUPON_FOOTER.displayName = "COUPON_FOOTER";

export const STAKE = styled.div`
    .title{
        font-size: 12px;
        font-weight: 700;
        background-color: ${props => props.theme.lightBack};
    }
    .prestakes{
        display: flex;
        align-items: center;
        margin-bottom: 5px;
    }

`;
STAKE.displayName = "STAKE";

interface IPreStake{
    selected?: boolean
}

export const PRE_STAKE = styled.span <IPreStake>`
    ${flexCenter}
    display: inline-flex;
    cursor: pointer;
    height: 32px;
    width: 36px;
    margin-right: 5px;
    background-color:  ${props => props.selected ? (props.theme.explosiveColor) : (props.theme.lightBack)};
    color:  ${props => props.selected ? (props.theme.overDarkText) : props.theme.textColor};
    border: 1px solid ${props => props.theme.lightBorder};
    &:last-child{
        margin-right: 0;
    }
`;
PRE_STAKE.displayName = "PRE_STAKE";

export const STAKE_INPUT = styled.input`
    -webkit-appearance: none;
    appearance: none;
    padding: 10px 5px;
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    background-color: ${props => props.theme.constantLightBack};
    border: 1px solid ${props => props.theme.lightBorder};
    
`;
STAKE_INPUT.displayName = "STAKE_INPUT";

export const BUTTON_WRAPPER = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
BUTTON_WRAPPER.displayName = "BUTTON_WRAPPER";

export const SUMMARY = styled.div`
    & > div {
        line-height: 20px;
        margin-bottom: 5px;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
    }
    .label{
        color: #95999e;
        font-weight: 600;
    }
    .value{
        text-align: right;
        color: 1px solid ${props => props.theme.textColor};
    }
`;
SUMMARY.displayName = "SUMMARY";