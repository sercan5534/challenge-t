import styled, { css } from "styled-components";
import colors from "../../enums/colors";

interface ButtonProps {
    size?: string;
    disabled?: boolean;
}

export const BUTTON_WRAPPER = styled.button <ButtonProps>`
    display: inline-flex;
    background-color: ${props => props.theme.darkBack || colors.darkBack};
    color: ${props => props.theme.overDarkText || colors.overDarkText};
    padding: 0 20px;
    font-size: ${props => props.size === "small" ? "12px" : "16px"};
    height: ${props => props.size === "small" ? "20px" : "30px"};
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    text-transform: uppercase;
    cursor: pointer;
    ${props=> props.disabled && css`
        cursor: not-allowed;
        background-color: ${props => props.theme.disabledBack || colors.disabledBack};;
    `};
`;
BUTTON_WRAPPER.displayName = "BUTTON_WRAPPER";