import style from "styled-components"

export const Btn = style.button`
    width: 588px;
    height: 95px;
    opacity: 100%;
    border: 1px solid #707070;
    border-radius: 54px;
    font-size: 29px;
    background-color:${props => props.color};
    margin-left: 27px;
    margin-bottom:27px;
    cursor:pointer;
    border:none;
`;
export const Title = style.h2`
    font-size:29px;
    color.black
`
//     background-color: ${(props) => (props.color ? "#FFCA05": "#FFFFFF")}