import styled from "styled-components";

export const WRAPPER = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 40px 1fr 60px;
    background-color: ${props => props.theme.lightBack};
    @media (min-width: 1024px){
        grid-template-rows: 40px 1fr;
        .footer{
            display: none;
        }
    }
`;
WRAPPER.displayName = "WRAPPER";


export const CONTENT = styled.div`
    position: relative;
    overflow: hidden;
    .coupon{
            position: absolute;
            opacity: 0;
            top: -10000px;
    }
    &.coupon-visible .coupon{
        top: 0;
        opacity: 1;
    }
    @media (min-width: 1024px){
        display: grid;
        grid-template-columns: 1fr 300px;
        .coupon{
            position: relative;
            opacity: 1;
            top: 0;
        }
    }
`;
CONTENT.displayName = "CONTENT";