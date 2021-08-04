import styled, { keyframes } from "styled-components";

export const Center = styled.div`
background-color: cyan;
display: flex;
flex-direction:column;
justify-content: space-around;
align-items:center;
`

const spinCW = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const spinCCW = keyframes`
from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`
export const Preloader1 = styled.div`
width: ${props => props.dim ? props.dim : '70'}px;
height: ${props => props.dim ? props.dim : '70'}px;
${props => props.border && `
border: 10px solid #eee;
border-top: 10px solid #666;  

`}
border-radius: 50%;
animation-name: ${props => props.ccw ? spinCCW : spinCW};
animation-duration: ${props => props.duty ? props.duty : 1}s;
animation-iteration-count: infinite;
animation-timing-function: linear;
`

export const Preloader2 = styled.div`
overflow: hidden;
width: ${props => props.dim ? props.dim : '70'}px;
height: ${props => props.dim ? props.dim : '70'}px;
${props => props.border && `
border: 10px solid #eee;
border-top: 10px solid #666;  

`}
border-radius: 50%;
animation-name: ${props => props.ccw ? spinCCW : spinCW};
animation-duration: ${props => props.duty ? props.duty : 1}s;
animation-iteration-count: infinite;
animation-timing-function: linear;
`
export const Img = styled.img`
width: 100%;

`

