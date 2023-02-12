import { flexCenter } from "shared/src/enums/mixins";
import styled from "styled-components";

export const MATCH_LIST_WRAPPER = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
     @media(min-width: 1024px){
        max-width: 600px;
    }

`;
MATCH_LIST_WRAPPER.displayName = "MATCH_LIST_WRAPPER";

export const TITLE_ROW = styled.div`
    background-color: ${props => props.theme.mainColor};
    color: ${props => props.theme.overMainColorText};
    line-height: 20px;
    font-size: 11px;
    width: 100%;
    display: flex;
    border-top: 1px solid #81acd0;
    .name{
        flex-grow: 1;
        width: 100%;
        padding-left: 20px;
        @media(min-width: 1024px){
            width: auto;
            min-width: 160px;
        }
    }
    .outcomes{
        display: none;
        @media(min-width: 1024px){
            display: flex;
        }
    }
    .outcome{
        ${flexCenter};
        border-left: 1px solid #81acd0;
        font-weight: 700;
        overflow: hidden;
        width: 48px;
        min-width: 48px;
    }
`;
TITLE_ROW.displayName = "TITLE_ROW";


interface IEventItem {
    mbc: number
};

export const EVENT_ITEM = styled.div <IEventItem>`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.textColor};
    padding-bottom: 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid #81acd0;

    @media(min-width: 1024px){ 
        flex-direction: row;
    }
    .info{
        flex-grow: 1;
        display: grid;
        grid-template-columns: 20px 1fr;
        grid-template-areas: "mbc home" "mbc away";
        padding-left: 10px;
        margin-bottom: 5px;
         @media(min-width: 1024px){ 
            margin-bottom: 0px;
        }
        .mbc{
            grid-area: mbc;
            display: inline-block;
            width: 12px;
            height: 14px;
            font-size: 9px;
            line-height: 14px;
            margin-bottom: 4px;
            text-align: center;
            background-color: ${props => props.mbc === 1 ? "#d90000" : props.mbc === 2 ? "#f17600" : "#327e00"};
            align-self: flex-end;
            color: ${props => (props.theme.overDarkText)};
        }
        .home{
            grid-area: home;
        }
        .away{
            grid-area: away;
        }
    }
    .outcomes{
        display: flex;
        align-items: center;
    }
    
`;
EVENT_ITEM.displayName = "EVENT_ITEM";

export const OUTCOME_WRAPPER = styled.div`
    display: flex;
    flex-direction: column;
    width: 48px;
    text-align: center;
    margin-right: 5px;
    @media(min-width: 1024px){ 
        margin-right: 1px;
    }
    &:last-child{
        margin-right: 0;
    }
    .name{
        font-size: 9px;
        @media(min-width: 1024px){ 
            display: none;
        }
    }
`
OUTCOME_WRAPPER.displayName = "OUTCOME_WRAPPER";