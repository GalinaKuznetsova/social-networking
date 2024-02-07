import styled from "styled-components";

const Header = styled.header`
width: 100%;
min-height: 100px;
text-align: center;
grid-column: 1/3;
grid-row: 1/1;
background-color:#231F20;;
line-height: 26px;
color: #6d6e71;
font-size: 13px;
margin-bottom: 10px;
`
const Img = styled.img`
max-width: 50px;
width:100%;
`

export const S = {
    Header,
    Img
}