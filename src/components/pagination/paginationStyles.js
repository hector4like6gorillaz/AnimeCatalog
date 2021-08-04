import styled from "styled-components";

export const Pages = styled.button`
width: 50px;
background: ${props => props.prim ?"cyan": "white"};
border-radius: 7px;
font-size:25px;

&:hover{
    background:red;
}
`