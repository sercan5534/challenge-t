import { css } from "styled-components";

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const flexColumn = css`
    display: flex;
    flex-direction: column;
`;

export const flexColumnCenter = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


interface Ifcw{
    c?: string,
    s?: string,
    w?: string,
}
export const fcsw = ({ c, s, w }: Ifcw) => `
    color: ${c || "#000"};
    font-size: ${s || "12px"};
    font-weight: ${w || "500"};
`;