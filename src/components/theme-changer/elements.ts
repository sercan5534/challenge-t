import { flexCenter } from "shared/src/enums/mixins";
import styled from "styled-components";

export const WRAPPER = styled.div`
    background-color: ${ props => props.theme.mainColor};
    color:  ${props => props.theme.textColor};
    ${flexCenter};
`;
WRAPPER.displayName = "WRAPPER";