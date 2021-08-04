import styled from 'styled-components';
import cal from '../fonts/digital-7.ttf';

export const DivCenter = styled.div`
border-style:solid;
width: ${props => props.size.w}px;
height: ${props => props.size.h}px;
display: grid;
grid-template-columns: repeat(4,1fr);
grid-template-rows: repeat(6,1fr);
grid-template-areas: 
'di di di di'
'off sqrt per div'
'n7 n8 n9 x'
'n4 n5 n6 n-'
'n1 n2 n3 plus'
'n0 dot equal plus';
grid-gap: 10px;
padding: 15px;

`
export const DivButtons = styled.div`
grid-area: ${props => props.area};
//border-style: solid;
display: flex;
align-items: center;
justify-content: space-around;
`
export const Buttons = styled.button`
width:100%;
height: 100%;
font-size: ${props => props.fSize}px;
cursor: pointer;
outline: none;
color: #fff;
background-color: #04AA6D;
border: none;
border-radius: 50px;
box-shadow: 0 9px #999;

&:hover{
  background-color: #3e8e41
}

&:active{
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
  }
`
export const DivDisplay = styled.div`
grid-area: ${props => props.area};
width: 100%;
height: 100%;
border-style: solid;
background-color: green;
`

export const PP = styled.p`

text-align: end;
align-items: center;
font-size: ${props => props.fSize}px;
`