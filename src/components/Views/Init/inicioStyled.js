import styled from 'styled-components'

export const DivInit = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
grid-template-rows: 100px repeat(3,1fr);

grid-template-areas: 
"up up up up"
"lef cont cont cont"
"lef cont cont cont"
"lef cont cont cont";
`
export const  Nav = styled.div`
grid-area: up;
`

export const  DivLeft = styled.div`
grid-area: lef;
display: flex;
flex-direction: column;
align-items: center;
font-size: 20px;
`
export const  DivCont = styled.div`
height: 800px;
grid-area: cont;
display: flex;
flex-direction: row;
flex-wrap: wrap;
overflow-y: scroll;
border-style: solid;
`