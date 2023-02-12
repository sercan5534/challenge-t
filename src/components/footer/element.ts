import { flexCenter } from 'shared/src/enums/mixins';
import styled from "styled-components";

export const WRAPPER = styled.div`
    height: 60px;
    background-color: ${ props=> props.theme.mainColor};
    color:  ${ props => props.theme.textColor};
    ${flexCenter};
`;
WRAPPER.displayName = "WRAPPER";