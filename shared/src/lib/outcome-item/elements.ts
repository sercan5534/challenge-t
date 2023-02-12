import { flexCenter, fcsw } from './../../enums/mixins';
import styled, { css } from 'styled-components';
import colors from "../../enums/colors";

interface OutcomeProps {
    flag?: string;
    selected?: boolean;
}
export const OUTCOME_WRAPPER = styled.div<OutcomeProps>`
    ${flexCenter};
    box-sizing: border-box;
    cursor: pointer;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    background-color:  ${props => props.selected ? (props.theme.explosiveColor || colors.explosiveColor) : (props.theme.lightBack || colors.lightBack)};
    border: 1px solid ${props => props.theme.lightBorder || colors.lightBorder};
    ${fcsw({ w: "bold", s: "11px" })}
    color:  ${props => props.selected ? (props.theme.overDarkText || colors.overDarkText) : props.theme.textColor || colors.textColor};
    position: relative;
    &:hover{
        background-color:  ${props => (props.theme.explosiveColor || colors.explosiveColor)};
        color:  ${props => (props.theme.overDarkText || colors.overDarkText)};
    }
    &:before{
        ${props => props.flag && css<OutcomeProps>`
            content: "";
            position: absolute;
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            top: 4px;
            left: calc(50% - 5px);
            border-top: ${props => props.flag === "up" ? "0px" : `5px solid ${props.selected ? "white": "red"}`};
            border-bottom: ${props => props.flag === "up" ? `5px solid  ${props.selected ? "white" : "green"}` : "0px"};
        `};
    }
`;
OUTCOME_WRAPPER.displayName = "OUTCOME_WRAPPER";